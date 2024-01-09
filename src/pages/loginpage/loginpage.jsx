import React from "react";
import Header from "../../components/Header/Header";
import { LoginForm, PageContainer, InputField,LoginButton} from "../../styles/pages/login";
import  {useForm,Controller } from "react-hook-form";

function LoginPage() {
const {control,handleSubmit,reset}=useForm();
  const onSubmit=(data)=>{
    console.log(data)
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
        <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
      </PageContainer>
    </>
  );
}

export default LoginPage;
