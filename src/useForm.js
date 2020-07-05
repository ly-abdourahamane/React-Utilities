import { useState } from "react";
import { callbackify } from "util";

const useForm = () => {
    const [values, setValues] = useState({email: "", password: ""});

    const handleChange = event => {
        const {name, value} = event.target;

        setValues({
            ...values, [name]: value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        console.log("submit succefully", values);
        // callback();
    }

    return {
        handleChange,
        handleSubmit,
        values
    }
}

export default useForm;