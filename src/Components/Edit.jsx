import axios from "axios"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from "./home.module.css"
import { useState } from "react"
const Edit=()=>{
    
    let[name,setName]=useState("")
    let[company,setCompany]=useState("")
    let[salary,setSalary]=useState("")
     
    let{index}=useParams()
       
    console.log(index)
   
    useEffect(()=>{
            axios.get(`http://localhost:3000/content/${index}`)
            .then((resp)=>{
                console.log(resp.data)
                setName(resp.data.name)
                setSalary(resp.data.salary)
                setCompany(resp.data.company)
            })
            .catch(()=>{
                console.log("data not found")
            })
        },[])

   
        let nameData=(e)=>{
            setName(e.target.value)
        }
        let salData=(e)=>{
            setSalary(e.target.value)
        }
        let companyData=(e)=>{
            setCompany(e.target.value)
        }
        let navigate=useNavigate()
        let  formHandle=()=>{
            let xyz={name,salary,company}
            //put is used to modify existing data.
            axios.put(`http://localhost:3000/content/${index}`,xyz)
            .then(()=>{
                console.log("data updated")
            })
            .catch(()=>{
                console.log("not found");
            })
        
        navigate("/users")
      } 
        
        return(
             <div id={style.user}>
            <table>
                <tr>
                <td><label htmlFor="">Name</label></td>
                <td><input type="text" value={name} onChange={nameData} /></td>
                </tr>
                <tr><td><label htmlFor="">Salary</label></td>
                <td><input type="number" value={salary} onChange={salData} /></td>
                </tr>
                <tr><td><label htmlFor="">Company</label></td>
                <td><input type="text" value={company} onChange={companyData} /></td>
                </tr>
                <tr><th colSpan="2"><button onClick={formHandle} >Update</button></th></tr>
            </table>
        </div>
    )
        } 
        

export default Edit