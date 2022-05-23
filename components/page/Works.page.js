import data from '../../db.json'
import { FaExternalLinkAlt } from 'react-icons/fa';
import styled from '@emotion/styled';
import { theme } from '../core/theme';
import { useState,useEffect } from 'react';

const Items = styled.div`
    max-width: 1500px;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${props=>`${props.navHeight}px`};
    margin-right: auto;
    margin-left: auto;
`
const Item = styled.div`
    border-radius: 3px;
    padding: 10px;
    margin: 5px;
    width: calc(100% / 3 - 10px);
    background-color: #f3f3f3;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 3px rgba(0,0,0,.2);
    @media screen and (max-width:700px) {
        width: 100%;   
    }
`
const ItemImageDiv = styled.div`
    flex: 1;
    background-color: purple;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    overflow: hidden;
    margin-right: 10px;
    box-shadow: 0px 0px 2px rgba(0,0,0,.2);
    position: relative;
    img{
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        transition: transform 0.3s ease-in-out;
        &:hover{
            transform: scale(1.05);
        }
    }
`
const ItemLink = styled.a`
    position: absolute;
    width: 30px;
    height: 30px;
    top: 10px;
    right: 10px;
    padding: 5px;
    border-radius: 50%;
    background-color: ${theme.mainColor};
    box-shadow: 0px 0px 3px rgba(0,0,0,.3);
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg{
        margin: 0px;
    }
`
const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`
const ItemName = styled.span`
    font-size: 1.5rem;
    font-weight: 500;
    position: relative;
    margin-left: 5px;
    color: #5a5a5a;
    &::before{
        position: absolute;
        left: -5px;
        content: '';
        height: 100%;
        width: 3px;
        background-color: ${theme.mainColor};
        border-radius: 5px;
    }
    @media screen and (max-width: 700px) {
        font-size: 1.1rem;
    }
`
const ItemDesc = styled.p`
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 300;
    background-color: #fff;
    color: ${theme.textColor};
    padding: 5px;
    border-radius: 3px;
    box-shadow: 0px 0px 3px rgba(0,0,0,.1);
    @media screen and (max-width: 700px) {
        font-size: 0.9rem;
    }
`
export default function WorksPage(){
    // get nav height to use height for mobile margin bottom
    const [navHeight,setNavHeight] = useState()
    useEffect(()=>setNavHeight(document.querySelector('nav').offsetHeight),[])
    // return component
    return(
        <Items navHeight={navHeight}>
            {data.map((work,index)=>(
                <Item key={index}>
                    <ItemImageDiv>
                        <img src={work.image} />
                        <ItemLink href={work.url} target="_blank"><FaExternalLinkAlt/></ItemLink>
                    </ItemImageDiv>
                    <ItemInfo>
                        <ItemName>{work.name}</ItemName>
                        <ItemDesc>{work.overview}</ItemDesc>
                    </ItemInfo>
                </Item>
            ))}
        </Items>
    )
}