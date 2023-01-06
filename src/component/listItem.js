function ListItem({ list, setList }){

    const checkTodo = (index) => {
        list[index].done = !list[index].done

        setList([ ...list ])
    }

    return(
        <ul id="list">
            {
                (list.length)?
                list.map((item, index) => { 
                    return<li className="flex radius" key={index}>
                            <span className=""></span>
                            <input className="checkTodo" type="checkbox" onChange={() => checkTodo(index)}></input>
                            <div className={(item?.done)? 'done': ''}>{item.name}</div>
                            <button className="close">X</button>
                        </li>
                })  :
                ''
            }
        </ul>

    )
}

export default ListItem;