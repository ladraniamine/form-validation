import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './ImagesComponent.css'

export const ImagesComponent = () => {

    const {getinfo} = useSelector(state=>state.posts)

    const {name , numbercard , mm , yy , cvc} = getinfo[0];
    const [num , setnum] = useState([])
    console.log(num)
   useEffect(()=>{
    if(numbercard === null || numbercard === ""){
        console.log("whyyy i wanna cry this is not working")
    }else{
        const splitTheString = numbercard.match(/.{1,4}/g) ||[];
        setnum(splitTheString);
    }
   },[numbercard])
   


  return (
    <div className='images-container'>
        <img className='bg-image' src={require('../../images/bg-main-desktop.png')} />
        <div className='cards '>
            <div className='bg-front'>
                <img className='w-100 h-100' src={require('../../images/bg-card-front.png')} />
                <div className='card-info'>
                    <div className='two-circels row p-0 m-0 align-items-center'>
                        <div className='bg-light col-6 ' style={{"width":"40px","height":"40px","borderRadius":"50%","border":"0.1px solid rgb(151 107 177)" }}></div>
                        <div className='col-6  d-flex' >
                            <div className='m-auto' style={{"width":"20px","height":"20px","borderRadius":"50%","border":"1px solid #fff"}}></div>
                        </div>
                    </div>
                    <div className='typography' style={{"width":"90%"}}>
                        <p>{numbercard?(<><span>{num[0]}</span> <span>{num[1]?num[1]:""}</span> <span>{num[2]?num[2]:""}</span> <span>{num[3]?num[3]:""}</span></>):"0000 0000 0000 0000"}</p>
                    </div>
                    <p className='name'>{name?name:"your name"}</p>
                    <p className='date'><span>{mm?mm:"00"}</span>/<span>{yy?yy:"00"}</span></p>
                </div>
            </div>
            <div className='bg-back'>
                <img className='w-100 h-100' src={require('../../images/bg-card-back.png')} />
                <p className='cvv'>{cvc?cvc:"000"}</p>
            </div>
        </div>
    </div>
  )
}
