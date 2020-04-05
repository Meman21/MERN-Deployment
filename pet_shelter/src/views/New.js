import React, { useEffect, useState } from 'react'
import PetForm from '../components/PetForm';
import Axios from 'axios';
import { Link } from '@reach/router';

export default () => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() =>{
        Axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                setPet(res.data);
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err))
    }, [])
    const removeFromDom = petId => {
        setPet(pet.filter(pet => pet._id != petId));
    }
    return (
        <div className="jumbotron jumbotron-fluid" style={{
            backgroundColor: "stone"
        }}> <div className="container">
            <h1>Pet Shelter</h1>
            <h4>Know of a Pet needing a home?</h4>
              <PetForm/>  
        </div>
        </div>
    )
}