import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');

*{
  font-family: 'Poppins', sans-serif;
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:none;
  border:none;
  text-decoration: none;
  text-transform: capitalize;
  transition: all .2s linear;
  
}
`;
