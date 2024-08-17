import React from 'react'
import{Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {// use selector ke andar ek callback milta hai or uske andar state ka access milta hai 
    const authStatus=useSelector((state)=> state.auth.status)
    const navigate=useNavigate()

    //jab bhi ek navigation bar banti hai to ek array banaya jata hai or uske upar loop lagao
    const navItems=[
        {
            name:'Home',
            slug:"/",// iska matlb ki url kaha pe hai isliye slug likha
            active:true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]
    
    return (
       <header className='py-3 shadow bg-gray-500'>
        <Container>
            <nav className='flex'>
                <div className='mr-4'>
                    <link  to='/'>
                    <Logo width='70px'/>

                    </link>/
                </div>
                <ul className='flex ml-auto'>
                    {navItems.map((item)=>// writing js
                    item.active ? (// jo bhi html tag repeat hote hai unme key daalo
                        <li key={item.name}>
                            <button
                            onClick={()=>navigate(item.slug)}
                            className='inline-block px-6 py-2
                            duration-200 hover: bg-blue-100 rounded-full'
                            >{item.name}</button>
                        </li>
                    ):null
                    )}
                    {authStatus && (// agr authstatus true hai tab h logout button lo warna ni
                        <li>
                            <LogoutBtn/>
                        </li>
                    )}
                </ul>
            </nav>
        </Container>
       </header>
    )
}

export default Header
