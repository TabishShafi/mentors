import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Menteeform from "./Menteeform";
import "./profiles.css"

const Profiles = (props) => {
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/profiles/${props.match.params.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res is profile/id !!!!!", res);
        
        setProfile(res);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [props.match.params.id]);
  console.log(props.match.params.id);

  
  return (
    <>
      {isLoading ? 
      (<div>Loading...</div>) : (
     <div> 
      < div style={{border: 'solid .1px black', padding:'6rem', marginTop: '1rem'}}>
        <div className ="text-container">
          <p className ="first-last-name" style={{fontFamily: "Roboto"}}><h1> {profile[0].firstName} {profile[0].lastName}</h1></p>
        <div className="skills-container">
          <p>{profile[0].skills}</p>
        </div>
        <div>
          <p>{profile[0].about}</p>
        </div>
        </div>
        Email: {profile[0].email} <br />
        <p> <Link to={Menteeform}><Button size='sm' variant="outline-secondary">Mentor Me</Button>{' '}</Link></p>

     </div>
      
      </div>  )}
    </>
  );
};

export default Profiles;