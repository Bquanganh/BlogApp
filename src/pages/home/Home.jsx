import Header from '../../components/header/Header'
import './home.css'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useLocation} from 'react-router'


export default function HomePage(){
    const [posts, setPosts]= useState([]);
    const {search} = useLocation()
    
   
    
    useEffect(() =>{
        const fetchPosts = async() =>{
            const res = await axios.get("api/posts"+search)
            setPosts(res.data);
        }
        fetchPosts();
    },[search])
    
    return(
        <>
            <Header/>
            <div className="home">    
                <Posts posts={posts} />
                <Sidebar/>
            </div>
        </>
    )
}