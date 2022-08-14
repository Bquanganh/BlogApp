import { useEffect } from "react";
import { useState } from "react"
import "./sidebar.css"
import axios from "axios"
import { Link } from "react-router-dom";

export default function Sidebar(){
    const [cats,setCat]= useState([]);

    useEffect(()=>{
        const getCats = async()=>{
            const res = await axios.get("api/categories");
            setCat(res.data);
        };
        getCats();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://cdnb.artstation.com/p/assets/covers/images/049/967/995/smaller_square/olga-skaskevich-olga-skaskevich-thumb.jpg?1653747571"
                 alt="" className="sidebarImg" />
                 <p>This is  my post</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORY</span>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                        <Link to ={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                        
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}