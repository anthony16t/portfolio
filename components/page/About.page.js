import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { theme } from "../core/theme";

const About_page = styled.div`
    max-width: 1500px;
    width: 95%;
    margin:auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width:700px) {
        margin-bottom: ${props=>`${props.navHeight+5}px`};
    }
`
const PageTitle = styled.h2`
    font-size: 3rem;
    color: ${theme.headerColor};
    margin-bottom: 10px;
    @media screen and (max-width:700px) {
        font-size: 2.3rem;
    }
`
const P = styled.p`
    font-size: 1rem;
    color: ${theme.textColor};
    line-height: 30px;
    margin-bottom: 10px;
    @media screen and (max-width:700px) {
        font-size: 0.9rem;
    }
`
const PageLink = styled.a`
    text-decoration: none;
    color: ${theme.mainColor};
    font-size: 1.2rem;
    font-weight: 800;
    margin-left: 5px;
`
const PageBtn = styled.button`
    background-color: ${theme.mainColor};
    color: #fff;
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    transition: transform 0.3s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
    @media screen and (max-width:700px) {
        font-size: 0.8rem;
    }
`

export default function AboutPage(){
    function getMyAge(){
        const date = new Date()
        let age = date.getFullYear() - 1998
        if(date.getMonth() < 12 && date.getDay() < 16){ age = age - 1 }
        return age
    }
    // get nav height to use height for mobile margin bottom
    const [navHeight,setNavHeight] = useState()
    useEffect(()=>setNavHeight(document.querySelector('nav').offsetHeight),[])
    // return component
    return (
        <About_page navHeight={navHeight}>
            <PageTitle>About Me</PageTitle>
            <P>
                My name is Anthony Toribio, I am a {getMyAge()}-year-old Full Stack Web Developer who specializes in building websites using HTML, CSS, JavaScript (React.js and Next.js) for the Front-end and Flask Python or Node.js for the Back-end.
            </P>
            <P>
                Since I was a child I was a curious person who always wanted to know how things work and how they were made, which made me enroll for the Electrical Technician program at 
                <PageLink rel="noreferrer" href="https://www.fortis.edu/campuses/new-jersey/wayne/electrical-systems-technician.html" target="_blank">Fortis Institute in Wayne NJ</PageLink> right after high school.
            </P>
            <P>
                I received my Electrical Technician Certification and stated to learn new skills from how to wire a new house and how to be responsible. However, I was big into computers and technology, I would go home to teach myself how to code
                and how to use programs like adobe photoShop watching YouTube videos, Facebook groups and taking online courses on udemy.com.
            </P>
            <Link href="/works/">
                <PageBtn>Check my work</PageBtn>
            </Link>
        </About_page>
    )
}