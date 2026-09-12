import React from 'react'

// const Prop = ({title,description}) => {
const Prop = ({data}) => {
  return (
    <div>
      <h1>{data.title} </h1>
      <p>{data.description}</p>
    </div>
  )
}

export default Prop
