import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Prop from '../components/Prop';

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

  return (
    <div>
        <Navbar/> 
     <h1>this is Home Page
        </h1>
        
<h2>Normal Fund Rs.{donation}</h2>
<button onClick={ addDonation}  className='btn btn-primary'>Click to donate</button>

<h2>Emergency Fund Rs.{donationAmount}</h2>
<button onClick={ addDonationAmount} className='btn btn-danger'>Click to donate</button>


{/* Prop */}
{/* <Prop title="Props in React Js"  description="dfskdjfkfsdkdjjkdjdjfkl"/> */}
<Prop data= {postData}/>
        <Footer></Footer>
    </div>
  )
}

export default Home
