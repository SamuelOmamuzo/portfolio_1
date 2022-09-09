import style from "styled-components"

const Container = style.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Wrapper = style.div`
    width:70%;
    height:100%;
    background-color:white;
    display:flex;
`

const Card = style.div`
    width:50%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Image = style.img`
    width:100%;
    height:90vh;
    background-color:lightgrey;
    object-fit:contain;
`

const FacebookLogs = style.div`
    width:360px;
    height:360px;
    background-color:white;
    border-radius:3px;
    border:solid 1px lightgrey;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const H1 = style.h1`
    font-size:40px;
`

const Avater = style.img`
    width:100px;
    height:100px;
    border-radius:50%;
    object-fit:cover;
`

const Button = style.button`
    width:70%;
    height:30px;
`

export default {
    Container,
    Wrapper,
    Card,
    Image,
    FacebookLogs,
    H1,
    Avater,
    Button
}