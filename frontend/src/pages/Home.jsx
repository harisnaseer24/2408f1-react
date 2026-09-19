import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Prop from '../components/Prop';
import Cards from '../components/Cards';

const Home = () => {
//normal variable
let donation=100;

let addDonation=()=>{
    donation=donation+100;
    console.log(donation)
}

//state
let [donationAmount,setDonationAmount]=  useState(2500);// initialize the state
let addDonationAmount=()=>{
    setDonationAmount(donationAmount +100)
}

let postData={
    title:"Props in React Js",
    description:"dfskdjfkfsdkdjjkdjdjfkl"
}

let products = [
    {id:1, name:"Iphone 14", price:120000,image:"https://www.91-cdn.com/hub/wp-content/uploads/2022/09/iPhone-14-Pro-Max-1.jpg"},
    {id:2, name:"Samsung S22", price:80000,image:"https://www.91-cdn.com/hub/wp-content/uploads/2022/09/iPhone-14-Pro-Max-1.jpg"},
    {id:3, name:"One Plus 10", price:60000,image:"https://www.91-cdn.com/hub/wp-content/uploads/2022/09/iPhone-14-Pro-Max-1.jpg"},
    {id:4, name:"Redmi Note 12", price:20000,image:"https://www.91-cdn.com/hub/wp-content/uploads/2022/09/iPhone-14-Pro-Max-1.jpg"},
]

  return (
    <div>
        <Navbar/> 
     <h1>this is Home Page
        </h1>
        
<h2>Normal Fund Rs.{donation}</h2>
<button onClick={ addDonation}  className='btn btn-primary'>Click to donate</button>

<h2>Emergency Fund Rs.{donationAmount}</h2>
<button onClick={ addDonationAmount} className='btn btn-danger'>Click to donate</button>{/* Prop */}
{/* <Prop title="Props in React Js"  description="dfskdjfkfsdkdjjkdjdjfkl"/> */}
<Prop data= {postData}/>
<Cards data={products} />



        <Footer></Footer>
    </div>
  )
}

export default Home
