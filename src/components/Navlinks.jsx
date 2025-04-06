import React from 'react'
import listlinks from "./links.json"

// Importazione della lista in maniera dinamica.

export default function Navlinks(props) {
  const links_import = props.list;
  return (
    <>
    <ul className='container-flex col-sm-12 list-nav'>
        {links_import.NavLinks.map((element) => {return <li><a href='#' className='links'>{element.links}</a></li>})}
    </ul>
    </>
  )
}
