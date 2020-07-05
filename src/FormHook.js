import React from 'react';
import useForm from "./useForm";
import validate from './validateLogin';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default function FormHook() {
  const {handleChange, handleSubmit, values, errors} = useForm(submit, validate);

function submit() {
    console.log("submitted * succefully", values);
}

  return (
   <form noValidate onSubmit={handleSubmit}>
    

       <br/><br/>
    
        <div>
          <label>Email</label>
          <TextField 
          className={`${errors.password && "inputError"}`}
          name="email" type="text" value={values.name} onChange={handleChange}
          id="email" label="Email" variant="outlined" />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <br/>
        <div>
        <label>Password</label>
        <TextField 
        className={`${errors.password && "inputError"}`}
        name="password" type="password" value={values.password} onChange={handleChange}
        id="password" label="Password" variant="outlined" />
        {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <br/>
        <Button variant="contained" color="primary" type="submit">Submit</Button>
   </form>
  );
}