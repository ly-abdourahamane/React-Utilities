import { useState, useEffect } from "react";

const useForm = (submit, validate) => {
    const [values, setValues] = useState({email: "", password: ""});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            submit();
            setValues({email: "", password: ""});
        }
    }, [errors]);

    const handleChange = event => {
        const {name, value} = event.target;

        setValues({
            ...values, [name]: value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true)
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }
}

export default useForm;