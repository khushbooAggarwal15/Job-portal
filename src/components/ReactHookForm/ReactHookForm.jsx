import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { updateFormData } from "../../redux/formDataSlice";
import {useNavigate} from "react-router-dom"

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  address: yup.string().required("Address is required"),
  domain: yup.string().required("Domain is required"),
  technology: yup.string().required("Technology is required"),
  experience: yup.string().required("Experience is required"),
  phone: yup.string().required("Phone is required"),
});

function ReactHookForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const formData = useSelector((state) => state.formData.data);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    dispatch(updateFormData(data));
    navigate('/personal')
    console.log(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> was</h1>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
          )}
        />
        <p style={{ color: "red", height: "7px", fontStyle: "italic" }}>
          {errors?.name?.message}
        </p>

        <Controller
          control={control}
          name="address"
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              fullWidth
              name="address"
              label="address"
              type="address"
              id="address"
              autoComplete="address"
            />
          )}
        />
        <p style={{ color: "red", height: "7px", fontStyle: "italic" }}>
          {errors?.address?.message}
        </p>

        <Controller
          control={control}
          name="domain"
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              fullWidth
              id="domain"
              label="domain"
              name="domain"
              autoComplete="domain"
              autoFocus
            />
          )}
        />
        <p style={{ color: "red", height: "7px", fontStyle: "italic" }}>
          {errors?.domain?.message}
        </p>

        <Controller
          control={control}
          name="technology"
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              fullWidth
              name="technology"
              label="technology"
              type="technology"
              id="technology"
              autoComplete="technology"
            />
          )}
        />
        <p style={{ color: "red", height: "7px", fontStyle: "italic" }}>
          {errors?.technology?.message}
        </p>
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              fullWidth
              id="phone"
              label="phone"
              name="phone"
              autoComplete="phone"
              autoFocus
              
              InputLabelProps={{
                style: { color: 'black' }, 
              }}
              InputProps={{
                style: {
                  
                  '&:focus': {
                    borderColor: 'black',
                  },
                },
              }}
            />
          )}
        />
        <p style={{ color: "red", height: "7px", fontStyle: "italic" }}>
          {errors?.phone?.message}
        </p>

        <Controller
          control={control}
          name="experience"
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              fullWidth
              name="experience"
              label="experience"
              type="experience"
              id="experience"
              autoComplete="experience"
            />
          )}
        />
        <p style={{ color: "red", height: "7px", fontStyle: "italic" }}>
          {errors?.experience?.message}
        </p>

        <Button
         
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 ,
            backgroundColor: 'orange', 
            '&:hover': {
              backgroundColor: 'darkorange',}}}
         
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default ReactHookForm;
