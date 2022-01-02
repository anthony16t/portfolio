import { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import navStyles from '../styles/nav.module.scss'
export default function Nav(){
    const mainNavLinks = useRef()
    const router = useRouter()
    // update main nav active link when page url change
    useLayoutEffect(()=>{
        mainNavLinks.current.querySelectorAll('a').forEach(link=>{
            link.classList.remove(navStyles.mainNavLinkActive)
            if(link.pathname===router.pathname){
                link.classList.add(navStyles.mainNavLinkActive)
            }
        })
    },[router])
    // return component
    return(
        <header className={navStyles.mainHeader}>
            <nav className={navStyles.mainNav}>
                <ul className={navStyles.mainNavLinks} ref={mainNavLinks}>
                    <Link href="/"><a className={navStyles.mainNavLink}>Home</a></Link>
                    <Link href="/about"><a className={navStyles.mainNavLink}>About</a></Link>
                    <Link href="/works"><a className={navStyles.mainNavLink}>Works</a></Link>
                    <Link href="/contact"><a className={navStyles.mainNavLink}>Contact</a></Link>
                </ul>
            </nav>
        </header>
    )
}