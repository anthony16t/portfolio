import Head from "next/head";
import Link from "next/link";
import Page from "../components/Page";
import aboutStyles from '../styles/about.module.scss'

export default function About(){
    function getMyAge(){
        const date = new Date()
        let age = date.getFullYear() - 1998
        if(date.getMonth() < 12 && date.getDay() < 16){ age = age - 1 }
        return age
    }

    return (
        <Page>
            <Head>
                <title>About | anthony</title>
            </Head>
            <div className={aboutStyles.page}>
                <h2 className={aboutStyles.pageTitle}>About Me</h2>
                <p className={aboutStyles.p}>
                My name is Anthony Toribio, I am a {getMyAge()}-year-old Full Stack Web Developer who specializes in building websites using HTML, CSS, JavaScript (React.js and Next.js) for the Front-end and Flask Python or Node.js for the Back-end.
                </p>
                <p className={aboutStyles.p}>
                    Since I was a child I was a curious person who always wanted to know how things work and how they were made, which made me enroll for the Electrical Technician program at 
                    <a className={aboutStyles.link} rel="noreferrer" href="https://www.fortis.edu/campuses/new-jersey/wayne/electrical-systems-technician.html" target="_blank">Fortis Institute in Wayne NJ</a> right after high school.
                </p>
                <p className={aboutStyles.p}>
                    I received my Electrical Technician Certification and stated to learn new skills from how to wire a new house and how to be responsible. However, I was big into computers and technology, I would go home to teach myself how to code
                    and how to use programs like adobe photoShop watching YouTube videos, Facebook groups and taking online courses on udemy.com.
                </p>
                <Link href="/works/">
                    <a className={aboutStyles.btn}>Check my work</a>
                </Link>
            </div>
        </Page>
    )
}