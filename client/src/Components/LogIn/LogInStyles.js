import styled from "styled-components";

export const Container = styled.div`
filter: brightness(95%);
position: absolute;
top: 10vh;
left:35vw;

width:30vw;
background-color: white;
height: 80vh;
text-align: center;
//border: 3px solid var(--purple-dark);
border-radius: 10px;


h1{
    font-family: var(-czcionka);
    font-size: 1.9vmax;
    font-weight: 600;
    margin-bottom: 45px;
}
`

export const ButtonMedia = styled.button`

border: 2px solid var(--purple-dark);
border-radius: 5px;
background-color: white;
cursor: pointer;
height: 5vh;
width: 25vw;
text-align: center;
margin: 10px 0;

font-weight: 800;
font-size: 0.8vmax;
font-family: var(--czcionka);
color: var(--purple-dark);
&:hover{
    border: 5px solid var(--purple-dark);
    
}
a{
   
}
`



export const Image = styled.img`

filter: brightness(45%);
width: 100%; /* width of container */
    height: 100vmin; /* height of container */
    object-fit: cover;
    object-position: 0px 0px; /* try 20px 10px */ 
    margin-bottom: -10px;
   
`
export const ImageMedia = styled.img`


width: 1.35vmax;
height: auto;
    
   
   
`
export const Line = styled.div`

width: 10vw;
height: 1px;
border-bottom: 1px solid var(--purple-dark);
color: var(--purple-dark);

`
export const Holder = styled.div`

height: auto;
width: 25vw;
margin-top: 3vh;
margin-left: 5.5vh;
display: flex;
align-items: center;
justify-content: space-between;

a{
    font-size: 0.8vmax;
    font-weight: 500;
font-family: var(--czcionka);
}
`
export const LogButton = styled.div`
height: 5vh;
text-decoration: none;
cursor: pointer;
width: 12.5vw;
color: var(--purple-dark);
font-size: 0.7vmax;
    font-weight: 500;
font-family: var(--czcionka);
`
export const LogButtonChecked = styled.div`
height: 5vh;
text-decoration: none;
cursor: pointer;
width: 12.5vw;
border-bottom: 2px solid var(--purple-dark);
color: var(--purple-dark);
font-size: 0.7vmax;
    font-weight: 700;
font-family: var(--czcionka);

`
export const Label = styled.label`

display: block;
width: 25vw;
height: 20px;
text-align: left;
padding-left: 2.5vw;
margin-top: 2vh;
font-size: 0.7vmax;
    font-weight: 100;
font-family: var(--czcionka);

`
export const InputEmail = styled.input.attrs({ 
    type: 'email',
    placeholder: "mail",
  })`
    
    background-color: var(--purple-lighter);
    margin-bottom: 0;
   // text-transform: uppercase;
    width: 25vw;
    border-radius: 5px;
    height: 35px;
   border: 2px solid var(--purple-dark);
    box-shadow: 0px;
    outline: none;
    transition: 0.75s;
    text-align: center;
    &:active {
      background-color: var(--purple-mid);

    }
   ` 
   export const InputPass = styled.input.attrs({ 
    type: 'Password',
    
  })`
    
    background-color: var(--purple-lighter);
    margin-bottom: 0;
   // text-transform: uppercase;
    width: 25vw;
    border-radius: 5px;
    height: 35px;
   border: 2px solid var(--purple-dark);
    box-shadow: 0px;
    outline: none;
    transition: 0.75s;
    text-align: center;
    &:active {
      background-color: var(--purple-mid);

    }
   ` 

 export const Reminder = styled.a`
 
   
   margin-left: 8vw;
    font-weight: 600;
    color: var(--purple-dark);
    font-family: var(--czcionka);
    text-align: center;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
 `  

 export const ConfirmButton = styled.button`
    
    margin-top: 2vh;
    width: 25vw;
    height: 5vh;
    background-color: var(--purple-dark);
    color: white;
    border: 4px solid var(--purple-dark);
    border-radius: 5px;
    transition: 0.25s;
    cursor: pointer;
    font-size: 18px;
    font-family: var(--czcionka);
    font-weight: 500;

    &:hover{
        background-color: white;
        color: var(--purple-dark);
        
    }
    

 
 `