import React from 'react'
import components from "./links.json"

//Importazione della lista dinamica

export default function FooterLinks(props) {
  const links_import = props.list;
  return (
    <>
     {links_import.FooterLinks.map((element)=>{return(
            <div className='links-tb'>
                <h4>{element.title}</h4>
                <ul className={element.id}>
                    {element.links.map((links) => {return <li><a href="#">{links}</a></li>})}
                </ul>
            </div>
    )})}
    </>
  )
}
