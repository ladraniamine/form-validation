import React from 'react';
import './App.css'
import FormComponent from './component/formComponent/FormComponent';
import { ImagesComponent } from './component/imagesComponent/ImagesComponent';
import Confirmcomponent from './component/Confirmcomponent/Confirmcomponent';
import { BrowserRouter , Routes, Route } from 'react-router-dom';



function App() {



  return  (
   
    <div className='App '> 
        <div className='row w-100 h-100 mx-0 px-0'>
          <div className='col-sm-12 col-lg-4  px-0 mx-0'>
              <ImagesComponent/>
          </div >
          <div className='col-sm-12 col-lg-8 px-0 mx-0 d-flex'>
            
            <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormComponent />}/>
          <Route path='/confirm' element={<Confirmcomponent/>}/>
        </Routes>
      </BrowserRouter>
          </div>

        </div>
    </div>
  
  )
}
export default App;
