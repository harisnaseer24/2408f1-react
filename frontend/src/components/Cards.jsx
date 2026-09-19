import React from 'react'

const Cards = ({data}) => {
  return (
   <div className="container">
    <div className="row">

{data.map((item)=>{
    return <div className="col-lg-3 col-md-6 col-sm-12">
            <div class="card">
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Rs. {item.price}</a>
  </div>
</div>
        </div>

})}

    </div>
   </div>
  )
}

export default Cards
