import styled from '@emotion/styled'
import {FaCss3, FaDatabase, FaGit, FaHtml5, FaJs, FaNodeJs, FaPython} from 'react-icons/fa'
import { theme } from '../core/theme'

const Skills = styled.div`
    display: flex;
    align-items: center;
    color: ${theme.textColor};
    margin-top: 5px;
`
const Skill = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: ${theme.mainColor};
    width: 40px;
    height: 40px;
    font-size: 30px;
    border-radius: 50%;
    padding: 10px;
    margin: 0px 5px;
    transition: transform ease-in-out 0.3s;
    &:hover{ transform: scale(1.05); }
    svg{margin:0px}
    path{margin:0px}
    &[aria-label]:hover::after {
        position: absolute;
        top: calc(100% + 5px);
        content: attr(aria-label);
        background: ${theme.navBg};
        color: #fff;
        border-radius: 3px;
        padding: 2px 5px;
        font-weight: 300;
        font-size: 13px;
        width: max-content;
    }
`

export default function MySkills(){
    return(
        <Skills>
            <Skill aria-label="Html"> <FaHtml5 height="auto" /> </Skill>
            <Skill aria-label="Css"> <FaCss3 height="auto" /> </Skill>
            <Skill aria-label="JavaScript"> <FaJs height="auto" /> </Skill>
            <Skill aria-label="Node.js"> <FaNodeJs height="auto" /> </Skill>
            <Skill aria-label="Python"> <FaPython height="auto" /> </Skill>
            <Skill aria-label="Mongodb"> <FaDatabase height="auto" /> </Skill>
            <Skill aria-label="Git"> <FaGit height="auto" /> </Skill>
        </Skills>
    )
}