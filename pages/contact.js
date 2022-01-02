import Head from "next/head";
import ContactMe from "../components/ContactMe";
import Page from "../components/Page";

export default function Contact(){
    return (
        <Page noMargin>
            <Head> <title>Contact | Anthony</title> </Head>
            <ContactMe />
        </Page>
    )
}