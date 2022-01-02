import {FaEnvelope, FaExternalLinkAlt, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import contactStyles from '../styles/contact.module.scss'

export default function ContactMe(){
    return (
        <div className={contactStyles.items}>
            <ContactItem icon={<FaEnvelope height="auto" />} bg="#0f5889" name="Email" username="Info@anthony16t.com" url="mailto:info@anthony16t.com" />
            <ContactItem icon={<FaTwitter height="auto" />} bg="#1D9BF0" name="Twitter" username="@anthony16t" url="https://twitter.com/Anthony16t" />
            <ContactItem icon={<FaGithub height="auto" />} name="Github" username="@anthony16t" url="https://github.com/anthony16t" />
            <ContactItem icon={<FaLinkedin height="auto" />} bg="#0967C2" name="Linkedin" username="@anthony16t" url="https://www.linkedin.com/in/anthony16t/" />
            <ContactItem icon={<FaInstagram height="auto" />} bg="#A37760" name="Instagram" username="@anthony16t" url="https://instagram.com/anthony16t/" />
        </div>
    )
}
function ContactItem({name,username,url,icon,bg}){
    return (
        <div className={contactStyles.item}>
            <div className={contactStyles.itemIcon} style={{background:bg}}>
                {icon}
            </div>
            <div className={contactStyles.itemInfo}>
                <span className={contactStyles.itemInfoName}>{name}</span>
                <span className={contactStyles.itemInfoUsername}>{username}</span>
            </div>
            <a className={contactStyles.itemLink} target="_blank" rel="noreferrer" href={url}>
                <FaExternalLinkAlt />
            </a>
        </div>
    )
}