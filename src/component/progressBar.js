function ProgressBar({ percentage }){

    return(
        <div className="flex" >
            <span className="text-middle">{ percentage || 0 }%</span>
            <div className="bar">
                <div className="progress" style={{width: `${percentage}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar;