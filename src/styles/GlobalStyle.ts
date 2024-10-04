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

a, a:visited {
  color: inherit;
}

html {
  font-size: 62.5%; // need to figure out why this % and need to convert to rem
  overflow-x: hidden;
  
  scroll-behavior: smooth;
  scroll-padding-top: 9rem;
  
  &::-webkit-scrollbar {  
    width: 1rem;
  }
  &::-webkit-scrollbar-track {  
      background-color: ${({ theme }) => theme.backgroundColor}; 
  }
  &::-webkit-scrollbar-thumb {  
      background-color: ${({ theme }) => theme.backgroundColor}; 
  }
  
  @media (max-width: 991px) {
        font-size: 55%;
      /* & {
        padding: 1.5rem 2rem;
      } */
    }
  
    @media (max-width: 450px) {
        font-size: 50%;
    }
}

body {
  background: ${({ theme }) => theme.black};
  overflow-x: hidden;
}


`;

