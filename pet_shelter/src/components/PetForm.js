import React, {useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});

    const adopt = e => {
        e.preventDefault();
        const newPet = {name, type, description, skill1, skill2, skill3};
        axios.post("http://localhost:8000/api/pets", newPet)
            .then(res=> {
                if(res.data.errors){
                    setErrors(res.data.errors);
                } else {
                    navigate("/pets");
                }
            })
            .catch(err => console.log(err));
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then(res=>{
                console.log("Response: ", res);
                navigate("/pets");
                })
            .catch(err=>console.log("Error: ", err))
    }
    return(
<div class="container">  
  <form id="contact" onSubmit={adopt}>
    <fieldset>
         &nbsp;
      <input placeholder="Pet name:" type="text" tabindex="1" required autofocus onChange={e=>setName(e.target.value)}/>
      <p><span style={{color: 'red'}}>{errors.type ? errors.type.message: ""}</span></p>
    </fieldset>
    <fieldset>
        &nbsp;
      <input placeholder="Pet Type" type="text" tabindex="2" required onChange={e=>setType(e.target.value)}/>
      <p><span style={{color: 'red'}}>{errors.type ? errors.type.message: ""}</span></p>
    </fieldset>
    <fieldset>
         &nbsp;
      <input placeholder="Descrption" type="text" tabindex="3" required onChange={e=>setDescription(e.target.value)}/>
      <p><span style={{color: 'red'}}>{errors.description ? errors.description.message: ""}</span></p>
    </fieldset>
    <fieldset>
    &nbsp;
    <input placeholder="Skill 1" type="text" tabindex="4" required onChange={e=>setSkill1(e.target.value)}/>
    </fieldset>
    <fieldset>
    &nbsp;
    <input placeholder="Skill 2" type="text" tabindex="4" required onChange={e=>setSkill2(e.target.value)}/>
    </fieldset>
    <fieldset>
    &nbsp;
    <input placeholder="Skill 3" type="text" tabindex="4" required onChange={e=>setSkill3(e.target.value)}/>
    </fieldset>
    <fieldset>
    &nbsp;
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Add pet</button>
      <Link to="/pets">Cancel</Link>
    </fieldset>
  </form>
</div>

    )
}