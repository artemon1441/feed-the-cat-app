import React, { useState } from 'react'
import myPhoto from '../../img/Photo.png'
import './card.css'

export default function Card({header, weight, name, subName, descriprion, disabled, selectedDescription}) {


  let cardClassName = ''

  const [borderDefaultColor, setBorderDefaultColor] = useState('#1698D9');
  const [selected, setSelected] = useState(false);



  if(disabled === true){
    cardClassName= 'disabled'
  }

  function mouseLeave(){
    if(!selected){
      setBorderDefaultColor('#2EA8E6')
    } 
  }
  
  function buy(){
    setBorderDefaultColor('#D91667')
    setSelected(true)
  }

  return (
    <div className="card">
        <div className='card-wrapper' onMouseLeave={mouseLeave} onClick={buy} >
        <div className="card-line" style={{ background: `${borderDefaultColor}` }} />
        <div className='card-body' style={{ border: `4px solid ${borderDefaultColor}` }} >
          
            <div className="card-header"><p>{header}</p></div>
          
          <div className="card-text">
            <h1>{name}</h1>
            <h2>{subName}</h2>
            <p>{descriprion}</p>
          </div>
          <img src={myPhoto} alt="Котик" />
          <div className="card-circle" style={{ background: `${borderDefaultColor}` }} >
            <div className="">{weight}</div>  
            <p>кг</p>
            </div>
        </div>
        <div className={cardClassName}/>
    </div>

    {
      disabled ? <div className="description-text over">Печалька, {subName} закончился.</div> : (
        !selected ? <div className="description-text">Чего сидишь? Порадуй котэ, <p onClick={buy}>&nbsp;купи.</p></div> : (
          <div className="description-text">{selectedDescription}</div>
        )
      )
    }
    </div>
    
    
  )
}
