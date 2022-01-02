import Head from "next/head"
import Page from "../components/Page"
import WorksSections from "../components/Works"

export default function Works(){
    return (
        <Page>
            <Head>
                <title>Works | Anthony</title>
            </Head>
            <WorksSections />
        </Page>
    )
}
