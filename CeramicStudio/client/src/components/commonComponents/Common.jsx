export const CommonBackButton = (props) => {
    const handleBackHistory =()=>{
        window.history.back();
    }

    return (
        <div className="back-div">
            <button className="back-button" onClick={handleBackHistory}>{props.children}</button>
        </div>
    )
}

export const CommonTitlePara = ({titleProps, paraProps})=>{
    return(
        <div className="common-title-para">
            <h2 className="common-title">{titleProps}</h2>
            <p className="common-para">{paraProps}</p>
        </div>
    )
}