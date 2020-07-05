import React, { useState } from 'react';
import useForm from "./useForm";

export default function FormHook() {
  const {handleChange, handleSubmit, values} = useForm(submit);

function submit() {
    console.log("submitted succefully", values);
}

  return (
   <form noValidate onSubmit={handleSubmit}>
       <label>Email</label>
       <div>
            <input name="email" type="email" value={values.email} onChange={handleChange}/>
            {/*error  here */}
        </div>

        <label>Password</label>
       <div>
            <input name="password" type="password" value={values.password} onChange={handleChange}/>
            {/*error  here */}
        </div>

        <button type="submit">Submit</button>
   </form>
  );
}