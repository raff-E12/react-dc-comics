import React from 'react'

export default function Cards({cardclass, url, title, description}) {
  return (
    <div className="card">
          <div className="card-img">
            <img src={url} alt={title}/>
          </div>
          <div class="card-content">
              <h3 class="card-title">{title}</h3>
              <p class="card-description">{description}</p>
              <button class="card-btn">Scopri di più</button>
          </div>
    </div>
  )
}
