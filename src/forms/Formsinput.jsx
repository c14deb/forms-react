import React from 'react'
import { useState } from 'react'
import "./UncontrolledForms.css"

const Formsinput = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [userList, setUSerList] =useState([])

    const submitForm = (e) =>{
        e.preventDefault()
        if(!(name && email)) {
            alert("please fill the input fields")
        } else {
            const getUser = { id: new Date().getTime().toString(), name, email}
            console.log(getUser);

            setUSerList(()=>{
                return [...userList, getUser]
                
            })
           
            
        }

        setName("")   
        setEmail("")
       
    }

  return (
    <div id='main'>
        <h1>uncontrolled forms</h1>
        <form>
            <div className="input">
                <label htmlFor="name">name:</label>
                <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input">
                <label htmlFor="email">email:</label>
                <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type='submit' onClick={submitForm}>submit</button>
        </form>
        <div className="mapUser">
            {
                userList.map((y) =>{
                    return (
                        <div key={y.id}>
                        <h4>{y.name}</h4>
                        <h4>{y.email}</h4>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Formsinput