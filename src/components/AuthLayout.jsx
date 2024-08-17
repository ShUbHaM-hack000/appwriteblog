// it is mechanism to protect pages and route // file name or function name can be differ
import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'// y auth status batata hai 
import { useNavigate } from 'react-router-dom'

 export default function Protected({children,authentication=true}) {
        const navigate=useNavigate()
        const[loader,setLoader]=useState(true)
        const authStatus=useSelector(state =>state.auth.status)

        useEffect(()=>{
                // true && false !==true// niche wale ka explaination==final result =true
                // todo make it more easy            
                // if(authStatus===true) {
                //     navigate("/")
                // }else if(authStatus===false){
                //     navigate("/login")
                // }
                // let authvalue= authStatus===true?true:false--- another method
                if(authentication && authStatus !==authentication){
                    navigate("/login")
                    //false && ture!==true
                }else if(!authentication&& authStatus !==authentication){
                    navigate("/")
                }
                setLoader(false)
        },[authStatus,navigate,authentication])

    return  loader ? <h1>Loading...</h1> :<>{children}</>
    
}


