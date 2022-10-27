import React from 'react'

const Confirmcomponent = () => {
  return (
    <div className='form-container'>
        <div className='row m-0 p-0 text-center'>
            <div className='col-12 mt-2'>
                <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
            </div>
            <div className='col-12 mt-2'>
                <h1>thank you !</h1>
            </div>
            <div className='col-12 mt-2'>
                <p style={{"color":"hsl(279, 6%, 55%)"}}>we've added your card details</p>
            </div>
            <div className='col-12 mt-2'>
            <a href="/" className='btn confirm-btn w-100 m-0' >
                continue
            </a>
            </div>
        </div>
    </div>
  )
}

export default Confirmcomponent