import axios from "axios"
import { useState } from "react"
import style from "./home.module.css"
import {useNavigate} from "react-router-dom"
const Createusers=()=>{
    let[name,setName]=useState("")
    let[company,setCompany]=useState("")
    let[salary,setSalary]=useState("")

    let Navigate =useNavigate()
    
    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let FormHandle=()=>{
        let xyz={name,salary,company}
        axios.post("http://localhost:3000/content",xyz)
        .then(()=>{
            console.log("data found");
        })
        .catch(()=>{
            console.log("not found");
        })
        Navigate("/users")
    }
    return(
        <div id={style.user}>
            <table>
                <tr>
                <td><label htmlFor="">Name</label></td>
                <td><input type="text" value={name} onChange={nameData} /></td>
                </tr>
                <tr><td><label htmlFor="">Salary</label></td>
                <td><input type="number" value={salary} onChange={salData}/></td>
                </tr>
                <tr><td><label htmlFor="">Company</label></td>
                <td><input type="text" value={company} onChange={companyData} /></td>
                </tr>
                <tr><th colSpan="2"><button onClick={FormHandle}>Submit</button></th></tr>
            </table>
        </div>
    )
}
export default Createusers