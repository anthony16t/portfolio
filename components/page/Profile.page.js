import profileImage from '../../public/static/images/anthony.png'
import styled from '@emotion/styled'
import { theme } from '../core/theme'

const Profile = styled.div`
    flex: 1;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media screen and (max-width:700px) {
        margin-bottom: 10vh;
    }
`
const ProfileImgDiv = styled.div`
    background-color: #d5d5d5;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    transition: transform 0.5s;
    &:hover{
        transform: scale(1.1) rotate(360deg);
    }
    @media screen and (max-width:700px) {
        width: 120px;
        height: 120px;
    }
`
const H2 = styled.h2`
    color: ${theme.headerColor};
    font-size: 2.2rem;
    font-weight: 800;
    margin-top: 20px;
    @media screen and (max-width:700px) {
        font-size: 1.9rem;
    }
`
const H3 = styled.h3`
    color: ${theme.headerColor};
    margin-top: 20px;
    font-size: 1.8rem;
    font-weight: 400;
    margin: 10px 0px;
    @media screen and (max-width:700px) {
        font-size: 1.5rem;
    }
`

export default function ProfilePage({children}) {
    return (
        <Profile>
            <ProfileImgDiv>
                <img src={profileImage.src} height="100%" alt="anthony"/>
            </ProfileImgDiv>
            <H2>Anthony Toribio</H2>
            <H3>Full stack web developer</H3>
            {/* add any children here */}
            {children}
        </Profile>
)
}

