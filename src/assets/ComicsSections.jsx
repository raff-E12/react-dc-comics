import React from 'react'
import comicsList from "./../components/comics"

export default function ComicsSections() {
    const export_list = comicsList;
  return (
    <section className='comics-sections container-flex-fluid'>
        <div className='box-text-cms'>
            <h6>Current Series</h6>
        </div>
        <div className='container-flex-fluid comics-catalog-view col-lg-12 col-xl-8 col-2xl-8 col-xxl-8'>
            {export_list.map((element) => {
                return(
                    <>
                    <div className='comics-type-box'>
                        <div className='thumbs-box'>
                            <img src={element.thumb} alt="thumbs-img" />
                        </div>
                        <h6>{element.series}</h6>
                    </div>
                    </>
                )
            })}
        </div>
        <button className='btn-comics-sc'>Load More</button>
    </section>
  )
}
