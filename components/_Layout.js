import Nav from "./nav"
import Head from "next/head"
import globalsStyles from '../styles/globals.module.scss'

export default function Layout({children}){
    return(
        <main className={globalsStyles.main}>
            <Head> <link rel="icon" type="image/png" href="/static/images/favicon.png" /> </Head>
            <img src="/static/images/animations/mars.png" className={globalsStyles.mars} alt="" />
            <img src="/static/images/animations/moon.png" className={globalsStyles.moon} alt="" />
            <div className={globalsStyles.content}>
                {children}
            </div>
            <Nav />
        </main>
    )
}