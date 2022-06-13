import styled from "styled-components";

export const Image = styled.img`


left: 0;
top: 0;
width: 100vw;
height: auto;
border-radius: 10px;
`
export const Container = styled.header`

display: flex;
align-items: center;
justify-content: left;
position: relative;
top: 10vh;
width:90vw;
height: 80vh;
left: calc(50% - 45vw);
padding-left: 3vw;
border: 3px solid var(--purple-dark);

`

export const Div = styled.div`

text-align: center;
align-items: center;
width: 100vw;
height: 755px;

a{
  color: var(--purple-dark);
  font-weight: 600;
  font-size: 32px;
}
h1{
  font-weight: 600;
  font-size: 48px;
  margin-bottom: 100px;
}
h3{
  text-align: right;
  margin-right: 17px;
}
`
export const Button = styled.button`

width: 250px;
//position: relative;
//bottom: 0;
//right: 0;
text-align: center;
height: 42px;
margin-top: 55px;
background-color: var(--purple-dark);
color: white;
cursor: pointer;
border-radius: 5px;
font-family: sans-serif;
border-color: var(--purple-dark);
cursor: pointer;
margin: 0 15px;
h3{
    padding: 0;
    margin: 0;
}

`

export const Input = styled.input.attrs({ 
  type: 'date',
  placeholder: "liczba dni",
})`
  
  background-color: var(--purple-lighter);
  margin: 0 20px;
 // text-transform: uppercase;
  width: 200px;
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
export const Holder = styled.div`

padding-left: 200px;
margin-top:80px;
display: flex;
width:20vw;
height: 10vh;
text-align:right;
justify-content: space-between;
`
    