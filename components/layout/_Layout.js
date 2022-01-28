import Nav from "./nav"
import styled from "@emotion/styled"

const Main = styled.div`
    min-height: 100%;
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 15px;
`

export default function Layout({children}){
    return(
        <Main>
            {children}
            <Nav />
        </Main>
    )
}