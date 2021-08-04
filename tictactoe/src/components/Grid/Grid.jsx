import React, { useEffect, useState } from 'react';
import './grid.scss';


export default function Grid() {
  const boxNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [box, newBox] = useState(0)

  const onClickBox = (e) => {
    const index = +e.target.getAttribute("data-key")
    newBox(index)
    console.log(`clicked box ${boxNumbers[index]}`)
  }



  return <>
  hi
    <div className="page">
      {boxNumbers.filter((box, index) => box === index).map((box, index) =>
        <div className="boxes" />)}
      <div className="grid">
        {/* render boxes for box highligting baced on number of boxes*/}
        {boxNumbers.map((box, index) => {
          if (index === box) {
            return <span className="box box-highlighted" key={index} data-key={index}></span>
          }
          return <span className="box" key={index} data-key={index} onClick={onClickBox}></span>
        })}
      </div>
    </div>
  </>
}