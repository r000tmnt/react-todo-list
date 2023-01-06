function ListItem({ list, setList }){

    const checkTodo = (index) => {
        list[index].done = !list[index].done

        setList([ ...list ])
    }

    const removeItem = (index) => {
        list.splice(index, 1)
        
        setList([ ...list ])
    }

    return(
        <ul id="list" style={{}}>
            {
                (list.length)?
                list.map((item, index) => { 
                    return<li className="flex radius" key={index}>
                            <span className=""></span>
                            {(item.done)?
                                <input className="checkTodo" type="checkbox" onChange={() => checkTodo(index)} checked></input> :

                                <input className="checkTodo" type="checkbox" onChange={() => checkTodo(index)}></input>
                            }
                            <div className={(item?.done)? 'done': ''}>{item.name}</div>
                            <button className="close" onClick={() => removeItem(index)}>X</button>
                        </li>
                })  :
                ''
            }
        </ul>
    )
}

export default ListItem;