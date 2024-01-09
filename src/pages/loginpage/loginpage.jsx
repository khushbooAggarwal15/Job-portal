import React from "react";
import Header from "../../components/Header/Header";
import { LoginForm, PageContainer, InputField,LoginButton} from "../../styles/pages/login";
import  {useForm,Controller } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from "react-router";


const schema=yup.object().shape({
  username:yup.string().required("Username is Required"),
  password:yup.string().required("Password is required"),
});

function LoginPage(){

  const navigate = useNavigate();
const {control,handleSubmit,reset,formState:{errors}}=useForm({resolver:yupResolver(schema)});
  const onSubmit=(data)=>{
    console.log(data)
    navigate("/dashboard")
    reset();
  }
  return (
    <>
      <PageContainer>
        <Header />
        <LoginForm greyHeader onSubmit={handleSubmit(onSubmit)}>
          <h2 align="center">Welcome to Job-Portal</h2>
         
          <h4 align="center">Please Log-In To Continue</h4>

          <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <InputField
              {...field}
              type="text"
              placeholder="Username"
            />
          )}
        />
        <p style={{color:"red",height:"7px",fontStyle:"italic"}}>{errors?.username?.message}</p>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputField
              {...field}
              type="password"
              placeholder="Password"
            />
          )}
        />
        <p style={{color:"red",height:"7px",fontStyle:"italic"}}>{errors?.password?.message}</p>
        <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
      </PageContainer>
    </>
  );
}

export default LoginPage;
