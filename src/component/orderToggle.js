function OrderToggle({ active, setActive, list }) {

    const switchToggle = () => {

        if(!list.length){
            return alert('請先新增事項')
        }

        setActive(!active)
    }

    return(
        <div className="flex justifyEnd">
            <span style={{color: '#A7B0BE', fontSize: 'small'}}>Move done things to end?</span>

            <div className="toggle">
                <div className="switch" style={{marginLeft: (active)? 'auto': '0px'}} onClick={() => switchToggle()}></div>
            </div>
        </div>
    )
}

export default OrderToggle;