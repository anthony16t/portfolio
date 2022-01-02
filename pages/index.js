import Head from 'next/head'
import MySkills from '../components/MySkills'
import homeStyles from '../styles/home.module.scss'
import profileImage from '../public/static/images/me.png'

export default function Home() {
    return (
        <>
        <Head>
            <title>Anthony | Full stack web developer</title>
        </Head>
        <div className={homeStyles.homePageProfile}>
            <div className={homeStyles.homePageProfileImg}>
                <img src={profileImage.src} height="100%" alt=""/>
            </div>
            <h2 className={homeStyles.homePageProfileH2}>Anthony Toribio</h2>
            <h3 className={homeStyles.homePageProfileH3}>Full stack web developer</h3>
            <MySkills />
        </div>
        </>
)
}

