import { useState, useEffect } from "react";

const useForm = (submit, validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    isCheckedImages: false,
    isCheckedVideos: false,
    isCheckedOthers: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit();
      setValues({
        email: "",
        password: "",
        isCheckedImages: false,
        isCheckedVideos: false,
        isCheckedOthers: false,
      });
    }
  }, [errors, isSubmitting, submit]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const clearForm = () => {
    setValues({
      email: "",
      password: "",
      isCheckedImages: false,
      isCheckedVideos: false,
      isCheckedOthers: false,
    });
  };

  const handleChangeCheckBox = (event) => {
    const { checked, name } = event.target;

    setValues({
      ...values,
      [name]: checked,
    });

    console.log(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    handleChange,
    handleSubmit,
    handleChangeCheckBox,
    clearForm,
    values,
    errors,
  };
};

export default useForm;
