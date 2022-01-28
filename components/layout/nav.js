import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";
import {theme} from '../core/theme'

const MainNav = styled.nav`
    background-color: ${theme.navBg};
    min-height: 10vh;
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const NavLinks = styled.ul`
    display: flex;
    list-style: none;
`
const NavLink = styled.a`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    margin: 5px 12px;
    position: relative;
    z-index: 1;
    cursor: pointer;
    @media screen and (max-width:700px) {
        font-size: 1rem;
    }
    &:hover::after , &.active::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: -1;
        width: 100%;
        height: 100%;
        background: ${theme.mainColor};
        padding: 5px 10px;
        border-radius: 5px;
    }
`

export default function Nav(){
    const router = useRouter()
    const links = [
        {name:'home',href:'/'}, {name:'about',href:'/about'},
        {name:'works',href:'/works'}, {name:'contact',href:'/contact'},
    ]
    return(
        <MainNav>
            <NavLinks>
                {links.map((link,index)=>(
                    <Link key={index} href={link.href}>
                        <NavLink className={router.asPath===link.href?'active':'notActive'}>{link.name}</NavLink>
                    </Link>
                ))}
            </NavLinks>
        </MainNav>
    )
}