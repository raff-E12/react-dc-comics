import React from 'react'
import componets from "./links.json"

// Componente Card 

export default function Cards(props) {
  const { classCards, list } = props;
  return (
    <>
    <div class="container-hero">
    {list.Card.map((cards) =>{return(
          <div className={classCards}>
          <div className="card-img">
            <img src={cards.url} alt={cards.title}/>
          </div>
          <div class="card-content">
              <h3 class="card-title">{cards.title}</h3>
              <p class="card-description">{cards.description}</p>
              <button class="card-btn">Scopri di più</button>
          </div>
        </div>
    )})}
    </div>
    </>
  )
}
