import {FaCss3, FaDatabase, FaGit, FaHtml5, FaJs, FaPhp, FaPython} from 'react-icons/fa'
import skillStyles from '../styles/skills.module.scss'

export default function MySkills(){
    return(
        <div className={skillStyles.skills}>
            <div className={skillStyles.skill} aria-label="Html"> <FaHtml5 height="auto" /> </div>
            <div className={skillStyles.skill} aria-label="Css"> <FaCss3 height="auto" /> </div>
            <div className={skillStyles.skill} aria-label="JavaScript"> <FaJs height="auto" /> </div>
            <div className={skillStyles.skill} aria-label="Python"> <FaPython height="auto" /> </div>
            <div className={skillStyles.skill} aria-label="Mongodb & Mysql"> <FaDatabase height="auto" /> </div>
            <div className={skillStyles.skill} aria-label="Git"> <FaGit height="auto" /> </div>
            <div className={skillStyles.skill} aria-label="PHP"> <FaPhp height="auto" /> </div>
        </div>
    )
}