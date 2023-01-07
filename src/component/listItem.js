function ListItem({ list, setList, listRef }){

    console.log('list_from_parent :>>>', list)

    //對該事項標記完成或未完成
    const checkTodo = (index) => {
        list[index].done = !list[index].done

        setList([ ...list ])
    }

    //移除該事項
    const removeItem = (index) => {
        list.splice(index, 1)
        
        setList([ ...list ])
    }

    return(
        <ul id="list" ref={listRef} style={{maxHeight: (list.length >= 4)? '160px': 'unset', overflowY: (list.length >= 4)? 'scroll': 'unset'}}>
            {
                /* 依據事項的數量跑回圈，生成清單 */
                (list.length)?
                list.map((item, index) => { 
                    return<li className="flex radius" key={index}>
                            <span className=""></span>
                            <input className="checkTodo" type="checkbox" checked={item.done} onChange={() => checkTodo(index)}></input>
                            <div className={(item.done)? 'done': ''}>{item.name}</div>
                            <button className="close" onClick={() => removeItem(index)}>X</button>
                        </li>
                })  :
                ''
            }
        </ul>
    )
}

export default ListItem;