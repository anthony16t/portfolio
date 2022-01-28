import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        const title = 'Anthony | Full stack web developer'
        const desc = 'Full stack web developer who specializes in Front-end and Back-end development.'
        return (
            <Html>
                <Head>
                <link rel="shortcut icon" href="/static/images/favicon.png" />
                <link rel="icon" type="image/png" href="/static/images/favicon.png" />
                <meta name="description" content={desc} />
                <meta name="keywords" content="web, developer, front-end, back-end" />
                <meta property="og:site_name" content="Anthony"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={desc} />
                <meta property="og:url" content="https://anthony16t.com/"/>
                <meta property="og:image" content="/static/images/backdrop.png"/>
                <meta property="og:image:secure_url" content="/static/images/backdrop.png"/>
                <meta property="twitter:card" content="summary"/>
                <meta property="twitter:title" content={title}/>
                <meta property="twitter:description" content={desc}/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument