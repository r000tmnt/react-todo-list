function ListItem({ list }){

    console.log('ListItem :>>>', list)

    return(
        <ul id="list">
            {
                (list.length)?
                list.map((item) => { 
                    return<li>
                            <input type="checkbox"></input>
                            <span>{item}</span>
                            <button className="close">X</button>
                        </li>
                })  :
                ''
            }
        </ul>

    )
}

export default ListItem;