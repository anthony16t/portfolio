import globalStyles from '../styles/globals.module.scss'

export default function Page({children,noMargin}){
    return(
        <div className={globalStyles.page} style={noMargin&&{marginBottom:"0px"}}>
            {children}
        </div>
    )
}