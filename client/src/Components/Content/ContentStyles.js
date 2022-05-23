import styled from "styled-components";

export const Center = styled.div`

width:50%;
height: 100vh;

background-color: var(--purple-mid-lighter);
background-image:
    linear-gradient(
        to top,
        var(--purple-mid-lighter),
        white
    );

`

export const Image = styled.img`


width: 100%; /* width of container */
    height: 100vmin; /* height of container */
    object-fit: cover;
    object-position: 0px 0px; /* try 20px 10px */ 
    margin-bottom: -10px;
   
`

export const Topic = styled.h1`

position: absolute;
font-size: 92px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: white;
font-weight: 500;
left: 35vw;
bottom: 6vh;
`
export const About = styled.div`

width:100%;
height: 70%;
background-color: red;
`
