import myWorks from '../db.json'
import workStyles from '../styles/works.module.scss'
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Works(){
    return(
        <>
        {myWorks.map(workSection=>(
            <div key={workSection.id}>
                <div className={workStyles.worksSectionTitle}>
                    <span className={workStyles.date}>
                        <span className={workStyles.startDate}>{workSection.start}</span>-<span className={workStyles.endDate}>{workSection.end}</span>
                    </span>
                    <div className={workStyles.line}></div>
                </div>
                <div className={workStyles.works}>
                    {workSection.works.map(work=><Work work={work}  key={work.id} />)}
                </div>
            </div>
        ))}
        </>
    )
}

function Work({work}) {
    return (
        <div className={workStyles.work}>
            <div className={workStyles.workLink}>
                <a href={work.url} rel="noreferrer" target="_blank">
                    <FaExternalLinkAlt height="auto" />
                </a>
            </div>
            <div className={workStyles.workImage}>
                <img src={work.image} alt={work.name} />
            </div>
            <div className={workStyles.workDesc}>
                <span className={workStyles.workTitle}>{work.name}</span>
                <div className={workStyles.workSkills}>
                    {work.skills.map((skill)=><span key={skill}>{skill}</span>)}
                </div>
                <p className={workStyles.workOverview}> {work.overview}</p>
            </div>
        </div>
    );
}