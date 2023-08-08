import React from 'react'

const Lattice = ({data, sum, width}) => {
  function Cell({ isSpecial }) {
    const className = isSpecial ? "component special" : "component";
    return <div className={className}></div>;
  }

  const listItems = () => {
    const items = [];
    for (let i = 1; i <= sum; i++) {
      const isSpecial = data.indexOf(i) >= 0;
      items.push(<Cell key={i} isSpecial={isSpecial} />);
    }
    return items;
  }

  return (
    <>
      <div className="app grid md:gap-4 gap-2 p-4 justify-center justify-items-center" style={{ gridTemplateColumns: `repeat(${width}, 1fr)`}}>
        {listItems()}
      </div>
    </>
  )
}

export default Lattice