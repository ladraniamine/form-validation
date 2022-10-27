import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { shareUser } from '../../redux/postslice';
import './FormComponent.css'

const FormComponent = () => {

const [name ,setname] = useState(null);
const [cardNumber,setcardNumber] = useState(null);
const [date_mm,setdate_mm] = useState(null);
const [date_yy,setdate_yy] = useState(null);
const [cvc, setcvc] = useState(null);

const dispatch = useDispatch();

dispatch(shareUser({name , numbercard:cardNumber , mm:date_mm , yy:date_yy , cvc}))

//for name
const [nameisblank,setnameisblank] = useState(false);

useEffect(()=>{
  if(name == ""){
    setnameisblank(true)
  }else if(name == null){
    setnameisblank(false)
  }else{
    setnameisblank(false)
  }
},[name])


//for card numbers
const [validcard,setvalidcard] = useState(false);
const [isblank,setisblank] = useState(false);

function containanyletters(str){
  return /[a-zA-Z]/.test(str);
}

useEffect(()=>{
    if(cardNumber == ""){
      setisblank(true)
      setvalidcard(false)
    }else if(cardNumber == null){
      setvalidcard(false)
    }else{
      setisblank(false)
      setvalidcard(containanyletters(cardNumber))
    }
},[cardNumber])

//for date-mm
const [datemmisblank,setdatemmisblank] = useState(false);

useEffect(()=>{
  if(date_mm == ""){
    setdatemmisblank(true)
  }else if(date_mm == null){
    setdatemmisblank(false)
  }else{
    setdatemmisblank(false)
  }
},[date_mm])

//for date-yy
const [dateyyisblank,setdateyyisblank] = useState(false);

useEffect(()=>{
  if(date_yy == ""){
    setdateyyisblank(true)
  }else if(date_mm == null){
    setdateyyisblank(false)
  }else{
    setdateyyisblank(false)
  }
},[date_yy])

//for cvc
const [cvcisblank,setcvcisblank] = useState(false);

useEffect(()=>{
  if(cvc == ""){
    setcvcisblank(true)
  }else if(cvc == null){
    setcvcisblank(false)
  }else{
    setcvcisblank(false)
  }
},[cvc])

//whene i change value in my inputs
const handlechangeName=(e)=>{
  setname(e.target.value)
}
const handlechangeCardNumber = (e)=>{
  setcardNumber(e.target.value)
}
const handlechangeDate_mm = (e)=>{
  setdate_mm(e.target.value)
}
const handlechangeDate_yy = (e)=>{
  setdate_yy(e.target.value)
}
const handlechangecvc = (e)=>{
  setcvc(e.target.value)
}

//when i click on confirm button
const [connection ,setconnection] = useState(false)
const handleconfirm = (e)=>{
  e.preventDefault();
  
  if(cvc == "" && name == "" && cardNumber == "" && date_mm == "" && date_yy == "" ){
    setnameisblank(true)
    setisblank(true)
    setdatemmisblank(true)
    setdateyyisblank(true)
    setcvcisblank(true)
  }else if(cvc == null && name == null && cardNumber == null && date_mm == null && date_yy == null ){
    setnameisblank(true)
    setisblank(true)
    setdatemmisblank(true)
    setdateyyisblank(true)
    setcvcisblank(true)
  }else{
    if(validcard === true){
      setconnection(false)
    }else{
      setconnection(true)
    }
  }
}

//blank message and wrong format message
const blankmsg =  <p className='m-0  mt-1' style={{"fontSize":"12px","color":"hsl(0, 100%, 66%)"}}>can't be blank</p>;
const wrongformatmsg =  <p className='m-0  mt-1' style={{"fontSize":"12px","color":"hsl(0, 100%, 66%)"}}>wrong format numbers only</p>;

  return (
    <div className='form-container'>
      <form className='row m-0 p-0'>
          <div className='col-12 text-start mt-1'>
            <label  className="form-label m-0">cardholder name</label>
            <input className={nameisblank?"form-control m-0 no-validate":"form-control m-0"} type="text" placeholder='e.g. jane appessed' onChange={handlechangeName} maxLength="25" />
            {nameisblank?blankmsg:""}
          </div>
          <div className='col-12 text-start mt-1'>
            <label  className="form-label m-0">card number</label>
            <input className={isblank || validcard?"form-control m-0 no-validate":"form-control m-0"} type="text" placeholder='e.g. 1234 5678 9123 0000' onChange={handlechangeCardNumber}  maxLength="16"/>       
            {isblank?blankmsg:""}
            {validcard?wrongformatmsg:""}
          </div>
           <div className='col-12 row m-0 p-0 text-start mt-1'>
              <div className='col-6 row m-0 mt-2 '>
                  <label  className="form-label m-0 p-0">exp. date(mm/yy)</label>
                  <div className='col-6 px-0'>
                    <input className={datemmisblank?"form-control m-0 no-validate mt-2":"form-control mt-2"} type="number"  placeholder='MM' onChange={handlechangeDate_mm} onInput={(e)=>{e.target.value = e.target.value.slice(0,e.target.maxLength)}} maxLength="2" />
                  </div>
                  <div className='col-6 px-1'>
                    <input className={dateyyisblank?"form-control m-0 no-validate mt-2":"form-control mt-2"} type="number" placeholder='YY' onChange={handlechangeDate_yy} onInput={(e)=>{e.target.value = e.target.value.slice(0,e.target.maxLength)}} maxLength="2" />
                  </div>
                    {datemmisblank || dateyyisblank?blankmsg:""}
                    {cvcisblank?<p className='m-0  mt-1' style={{"fontSize":"12px","color":"#fff"}}>cant't be blank</p>:""}
              </div>  
              <div className='col-6 row m-0 mt-2 '>
                  <label  className="form-label m-0 px-2">cvc</label>
                  <div className='col-12 px-1 mx-0'>
                      <input className={cvcisblank?"form-control m-0  no-validate mt-2 ":"form-control mt-2 "} type="number" placeholder='e.g. 123' onChange={handlechangecvc} onInput={(e)=>{e.target.value = e.target.value.slice(0,e.target.maxLength)}} maxLength="3"/>
                  </div>
                  {cvcisblank?blankmsg:""}
                  {datemmisblank || dateyyisblank?<p className='m-0  mt-1' style={{"fontSize":"12px","color":"#fff"}}>cant't be blank</p>:""}
              </div>
           </div>
          <div className='col-12 px-3 mt-3 text-start mt-1'>
            <button className='btn confirm-btn w-100 m-0 px-0' onClick={handleconfirm}>
              <NavLink to={connection?"/confirm":"/"} style={{"color":"#fff","textDecoration":"none"}}>
                confirm
              </NavLink>
            </button>
          </div>
      </form>
    </div>
  )
}

export default FormComponent