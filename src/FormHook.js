import React, { useState } from 'react';
import useForm from "./useForm";
import validate from './validateLogin';

export default function FormHook() {
  const {handleChange, handleSubmit, values, errors} = useForm(submit, validate);

function submit() {
    console.log("submitted * succefully", values);
}

  return (
   <form noValidate onSubmit={handleSubmit}>
       <label>Email</label>
       <div>
            <input
                className={`${errors.email && "inputError"}`}
             name="email" type="email" value={values.email}
             onChange={handleChange}
             />
           {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <label>Password</label>
       <div>
            <input 
            className={`${errors.password && "inputError"}`}
            name="password" type="password" value={values.password} onChange={handleChange}/>
            {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>
   </form>
  );
}