function ProgressBar({ percentage }){

    return(
        <div className="flex" >
            <span>{ percentage || 0 }%</span>
            <div className="bar">
                <div className="progress"></div>
            </div>
        </div>
    )
}

export default ProgressBar;