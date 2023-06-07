import React from 'react'
import { useState } from 'react'
import "./UncontrolledForms.css"

const UncontrolledForms = () => {

const  [name, setName] = useState("")
const [email, setEmail] = useState("")
const [person, setPerson] = useState([])


const submitHandler = (e) =>{
    e.preventDefault()
    if (!(name && email)) {
        alert("please fill input fields")
    } else {
        const people = { id: new Date().getTime(), name, email }
        console.log(people)
        setPerson((x)=>{
            return [...person, people]
        })
        
    }  
    setName("")   
    setEmail("")
}

  return (
    <div id='main'>
        <h1>Uncontrolled Forms</h1>
        <form onSubmit={submitHandler}>
            <div className="input">
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input">
                <label htmlFor="email">Email:</label>
                <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button type='submit'>submit</button>
        </form>
        <main className='people'>
            {
                person.map((y) =>{
                    return (
                        <div key={y.id}>
                            <h4>{y.name}</h4>
                            <p>{y.email}</p>
                        </div>

                    )
                })
            }
        </main>
    </div>
  )
}

export default UncontrolledForms