import styled from "styled-components";

export const Container = styled.header`

display: flex;
align-items: center;
justify-content: left;
position: relative;
top: 10vh;
width:40vw;
height: 20vh;
left: calc(50% - 20vw);
padding-left: 3vw;
border: 3px solid var(--purple-dark);

margin: 20px 0;
`
export const Image = styled.img`

position:relative;
left: 0;
top: 0;
width: 13vw;
height: auto;

`
export const Div = styled.div`

width: 100%;
height: 100%;
text-align: center;

h1{
    padding: 0;
    margin: 0;
    font-size: 32px;
}
h5{
    color: var(--purple-dark);
    font-size:14px;
    font-weight: 800;
    padding: 0;
    margin: 15px 0;
}
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
export const Button = styled.button`

width: 200px;
//position: relative;
//bottom: 0;
//right: 0;
text-align: center;
height: 42px;
background-color: var(--purple-dark);
color: white;
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
export const Tag = styled.h1`

margin-top: 100px;
color: var(--purple-dark);
font-size: 56px;

`
export const Center = styled.div`
text-align: center;

`