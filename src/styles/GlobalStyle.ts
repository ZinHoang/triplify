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
  transition: all .2s linear;
}

a, a:visited {
  color: inherit;
}

html {
  /* 
    The default font-size for most browsers is 16px.
    Setting font-size to 62.5% on the html element changes the base font size to 10px (62.5% of 16px).
    With a base font size of 10px, 1rem equals 10px.
    This makes it easier to calculate rem values. For example, 1.6rem equals 16px, 2rem equals 20px, etc. 
  */
  font-size: 62.5%;
  overflow-x: hidden;
  
  scroll-behavior: smooth;
  scroll-padding-top: 9rem;
  
  &::-webkit-scrollbar {  
    width: 1rem;
  }
  &::-webkit-scrollbar-track {  
      background-color: ${({ theme }) => theme.darkBackgroundColor}; 
  }
  &::-webkit-scrollbar-thumb {  
      background-color: ${({ theme }) => theme.darkBackgroundColor}; 
  }
  
  @media (max-width: 991px) {
        font-size: 55%;
    }
  
    @media (max-width: 450px) {
        font-size: 50%;
    }
}

body {
  background: ${({ theme }) => theme.black};
  overflow-x: hidden;
}

section {
  padding: 0 10rem;

  @media (max-width: 991px) {
    padding: 0 5rem;
  }

  @media (max-width: 380px) {
    padding: 0 2rem;
  }
}


`;

