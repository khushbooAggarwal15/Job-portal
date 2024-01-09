import styled from "styled-components";



export  const PageContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;

height: 100vh;


`;


export const LoginForm = styled.form`
  width:25%;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 50px;
  margin: 20px;
  margin-top: 100px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: rgb(238, 155, 30);
  
  h2 {
    color: ${(props) => (props.greyHeader ? 'grey' : 'initial')};
    font-size: 24px; 
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

 export const InputField = styled.input`
 padding: 12px;
 margin-bottom: 10px; 
 border-radius: 4px;
 border: 1px solid #ccc;
 display: block;
 font-size: 16px;
`;


export const LoginButton = styled.button`
padding: 12px; 
margin-top:30px;
width: 100%;
border: none;
border-radius: 5px;
background:orange; 
color: white;
cursor: pointer;
text-align: center;
font-size: 18px; 
&:hover {
  background: darkorange; 
}
`;