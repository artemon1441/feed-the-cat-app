import React from 'react'
import Card from '../Card/card'
import './main.css'


export default function Main() {

  let data = [
    {
      name: 'Нямушка',
      subName:'с фуа-гра',
      descriprion:'10 порций мышь в подарок',
      header:'Сказочное заморское яство',
      weight:'0,5',
      disabled: false,
      selectedDescription:'Печень утки разварная с артишоками.'
    },
    {
      name: 'Нямушка',
      subName:'с рыбой',
      descriprion:'40 порций 2 мыши в подарок',
      header:'Сказочное заморское яство',
      weight:'2',
      disabled: false,
      selectedDescription:'Головы щучьи с чесноком да свежайшая сёмгушка.'
    },
    {
      name: 'Нямушка',
      subName:'с курой',
      descriprion:'100 порций 5 мышей в подарок заказчик доволен',
      header:'Сказочное заморское яство',
      weight:'5',
      disabled: true,
      selectedDescription:'Филе из цыплят с трюфелями в бульоне.'
    }
  ]


  function renderCards(){
    return data.map((e, i)=>{
      return(
        <Card 
        key={i}
        name={e.name}
        subName={e.subName}
        descriprion={e.descriprion}
        header={e.header}
        weight={e.weight}
        disabled={e.disabled}
        selectedDescription={e.selectedDescription}
        />
      )
    })
  }



  return (
    <div className='main-container' >
        
        <div className="header-description"><p>Ты сегодня покормил кота?</p></div>
        <div className="card-section">
            {renderCards()}
        </div>
        
    </div>
  )
}
