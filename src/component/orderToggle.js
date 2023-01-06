function OrderToggle({ active, setActive }) {

    return(
        <div className="flex justifyEnd">
            <span style={{color: '#A7B0BE', fontSize: 'small'}}>Move done things to end?</span>

            <div className="toggle">
                <div className="switch" style={{marginLeft: (active)? 'auto': '0px'}} onClick={() => setActive(!active)}></div>
            </div>
        </div>
    )
}

export default OrderToggle;