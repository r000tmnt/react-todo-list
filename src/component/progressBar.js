function ProgressBar({ percentage }){

    return(
        <div className="flex" >
            {/* 此處表示完成的趴數 */}
            <span className="text-middle">{ percentage || 0 }%</span>
            <div className="bar">
                {/* 根據趴數改變寬度 */}
                <div className="progress" style={{width: `${percentage}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar;