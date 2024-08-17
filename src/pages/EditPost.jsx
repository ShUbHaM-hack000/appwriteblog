import React ,{useEffect,useState}from 'react'
import { Container,PostForm } from '../components'
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'
import { set } from 'react-hook-form'

function EditPost() {
    const [post,setPosts]=useState(null)
    const {slug}=useParams()// agr url se valure leni hoti hai to 
    const navigate=useNavigate()
    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                setPosts(post)
            })
        }
        else{
            navigate('/')
        }
    },[slug,navigate])

    return post ?(
        <div className='py-8'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ):null
        
    
}

export default EditPost
