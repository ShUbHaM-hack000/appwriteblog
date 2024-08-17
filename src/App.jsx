import { useState,useEffect } from 'react'
import{useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import{login,logout} from"./store/authSlice"

import './App.css'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  // making a loding state for appwrite
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{// .then returns a promise // y sab hamesha call back dete hai 
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
  return !loading ?(
    <div className='min-h-screen flex flex-wrap 
    content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          TODO:<Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ):(null) 
    
  
}

export default App
