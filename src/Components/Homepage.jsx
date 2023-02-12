import React from "react";
import { Link } from "react-router-dom";
import style from "./home.module.css"
 const Homepage=()=>{
    return(
        <section id={style.nav}>
       <Link to="/">Create users </Link>
         <Link to="/users">users</Link> 
        </section>
    )
 }
 export default Homepage