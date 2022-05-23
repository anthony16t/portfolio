import Head from 'next/head'
import MySkills from '../components/shared/MySkills'
import ProfilePage from '../components/page/Profile.page'

export default function Home() {
    return (
        <>
        <Head>
            <title>Anthony | Full stack web developer</title>
        </Head>
        <ProfilePage>
            <MySkills />
        </ProfilePage>
        </>
)
}

