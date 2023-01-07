function ListItem({ list, setList, listRef }){

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
                {/* 依據事項的數量跑回圈，生成清單 */}
                (list.length)?
                list.map((item, index) => { 
                    return<li className="flex radius" key={index}>
                            <span className=""></span>
                            {/* 檢查是否有標記為完成的事項 */}
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