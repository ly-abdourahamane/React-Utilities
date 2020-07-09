import React, { useEffect } from "react";
import useForm from "./useForm";
import validate from "./validateLogin";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MyCard from "./components/MyCard";
import { Grid, Checkbox, FormControlLabel } from "@material-ui/core";

export const FormHook = ({ title }) => {
  const {
    handleChange,
    handleSubmit,
    handleChangeCheckBox,
    clearForm,
    values,
    errors,
  } = useForm(submit, validate);

  function submit() {
    console.log("submitted * succefully", values);
  }

  useEffect(() => {
    console.log(values);
  }, []);

  return (
    <div>
      <MyCard />
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              className={`${errors.password && "inputError"}`}
              name="email"
              type="text"
              value={values.name}
              onChange={handleChange}
              id="email"
              label="Email"
              variant="outlined"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </Grid>
          <Grid item xs={6}>
            <TextField
              className={`${errors.password && "inputError"}`}
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              id="password"
              label="Password"
              variant="outlined"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </Grid>
        </Grid>

        <Grid container direction="row" justify="flex-start">
          <FormControlLabel
            control={
              <Checkbox
                checked={values.isCheckedImages}
                onChange={handleChangeCheckBox}
                name="isCheckedImages"
              />
            }
            label="Images"
          />
        </Grid>

        <Grid container direction="row" justify="flex-start">
          <FormControlLabel
            control={
              <Checkbox
                checked={values.isCheckedVideos}
                onChange={handleChangeCheckBox}
                name="isCheckedVideos"
              />
            }
            label="Videos"
          />
        </Grid>

        <Grid container direction="row" justify="flex-start">
          <FormControlLabel
            control={
              <Checkbox
                checked={values.isCheckedOthers}
                onChange={handleChangeCheckBox}
                name="isCheckedOthers"
              />
            }
            label="Others"
          />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="primary" onClick={clearForm}>
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
