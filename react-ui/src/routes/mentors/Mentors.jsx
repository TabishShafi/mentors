import { Card, Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import React from "react"
import { Link } from "react-router-dom"

const Mentors = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [mentors, setMentors] = useState([])

    useEffect(() => {
      getMentors();
    }, []);
    const getMentors = () => {
        setIsLoading(true)
        fetch("/api/mentors")
        .then(response=>response.json())
        .then(mentors => {
            setMentors(mentors)
            console.log(mentors)
            setIsLoading(false)
        })
    }
    return (
      <>
      <header>
      </header>
        <div style= {{display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
           {isLoading ? <h1>Loading</h1> : mentors?.map((mentors) => {
            return (
              <div key={mentors.id} style= {{textAlign:'center', display: 'flex', justifyContent: 'space-evenly'}}>
               <Card style={{ width: '230px', margin:'20px' }}>
               <Card.Img variant="top" src="holder.js/100px180" />
               <Card.Body>
               <Card.Title style={{fontFamily:'roboto', fontWeight:700, marginBottom:0, letterSpacing:'1px'}}>{mentors.firstName} {mentors.lastName} </Card.Title>
                 <Card.Text style={{fontFamily:'lato', fontWeight:300,}}> {mentors.skills} </Card.Text>
                 <Link to= {`./profiles/${mentors.id}`}><Button variant="dark">Select Mentor</Button></Link>
               </Card.Body>
             </Card>
             </div>
            )
           }
           )} 
        </div> 
        
        </>
    )
}

export default Mentors