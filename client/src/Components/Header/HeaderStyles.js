import styled from "styled-components";

export const Absolute = styled.div`


position: fixed;
width: 100vw;
height: 100vh;
top:0;
right: 0;

`

export const Main = styled.div`

margin: 0;
padding: 0;

display: flex;
justify-content: space-between;
width: 100%;
h1{
    color: var(--purple-dark);
}
height: 72px;
 background-color: white;
/* background-image:
    linear-gradient(
      to right, 
      var(--purple-light), var(--purple-mid)
    );*/
border-bottom: 2px solid var(--purple-dark);  


`
export const Context = styled.div`

display:flex;
align-items: center;
justify-content: left;
overflow: hidden;
width: 30%;
min-width: 30vmax;




h1{
    color: var(--purple-dark);
    font-weight: 800;
    font-size: 40px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    cursor: pointer;
}
h2{
    color: var(--purple-dark);
    font-weight: 700;
    font-size: 21px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    cursor: pointer;
    padding-top: 19px;

}
`

export const Button = styled.button`

width: 100px;

text-align: center;
height: 42px;
background-color: var(--purple-dark);
color: white;
border-radius: 8px;
font-family: sans-serif;
border-color: var(--purple-dark);
cursor: pointer;
margin: 0 15px;
h3{
    padding: 0;
    margin: 0;
}

`
export const Container = styled.div`

display:flex;
text-align: center;
width: auto;
align-items: center;
justify-content: space-between;
margin-right: 3vmax;

h4{
    color: var(--purple-dark);
    margin: 0 2vmax;
  
    font-weight: 200;
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    cursor: pointer;
}
`

export const Image = styled.img`
cursor: pointer;
display: block;
max-width: 150px;
min-height: auto;



`