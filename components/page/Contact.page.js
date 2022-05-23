import styled from '@emotion/styled'
import {FaEnvelope, FaExternalLinkAlt, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Items = styled.div`
    max-width: 390px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Item = styled.div`
    width: 100%;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
    background-color: #f7f7f7;
    color: #2b2b2b;
    box-shadow: 1px 1px 3px rgba(0,0,0,.7);
    margin-bottom: 10px;
`
const Icon = styled.div`
    background-color: ${props=>props.color?props.color:'#464646'};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 10px;
    svg{ font-size: 40px}
    @media screen and (max-width:700px) {
        svg{ font-size: 20px}
        width: 40px;
        height: 40px;
    }
`
const ItemInfo = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const ItemName = styled.span`
    margin-right: 10px;
    font-size: 1.3rem;
    font-weight: 800;
    @media screen and (max-width:700px) {
        font-size: 1.1rem;
    }
`
const ItemUsername = styled.span`
    font-size: 1rem;
    font-weight: 400;
    @media screen and (max-width:700px) {
        font-size: 0.9rem;
    }
`
const ItemLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #46464694;
    color: #fff;
    padding: 7px;
    border-radius: 50%;
    svg{
        font-size: 15px;
    }
`

export default function Contacts(){
    return (
        <Items>
            <ContactItem icon={<FaEnvelope height="auto" />} bg="#0f5889" name="Email" username="Info@anthony16t.com" url="mailto:info@anthony16t.com" />
            <ContactItem icon={<FaTwitter height="auto" />} bg="#1D9BF0" name="Twitter" username="@anthony16t" url="https://twitter.com/Anthony16t" />
            <ContactItem icon={<FaGithub height="auto" />} name="Github" username="@anthony16t" url="https://github.com/anthony16t" />
            <ContactItem icon={<FaLinkedin height="auto" />} bg="#0967C2" name="Linkedin" username="@anthony16t" url="https://www.linkedin.com/in/anthony16t/" />
            <ContactItem icon={<FaInstagram height="auto" />} bg="#A37760" name="Instagram" username="@anthony16t" url="https://instagram.com/anthony16t/" />
        </Items>
    )
}
function ContactItem({name,username,url,icon,bg}){
    return (
        <Item>
            <Icon color={bg}>{icon}</Icon>
            <ItemInfo>
                <ItemName>{name}</ItemName>
                <ItemUsername>{username}</ItemUsername>
            </ItemInfo>
            <ItemLink target="_blank" rel="noreferrer" href={url}>
                <FaExternalLinkAlt />
            </ItemLink>
        </Item>
    )
}