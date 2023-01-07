import { useState } from "react";

function InputField ({ list, setList, listRef }){

    //輸入框內容的臨時站點
    const [temp, setTemp] = useState('')

    //加入新的事項
    const alterList = (newTodo) => {

        console.log('listRef :>>>', listRef)

        console.log('newTodo :>>>', newTodo)

        //先加入原有的陣列，再放入新的事項
        setList([ ...list, { name: newTodo, done: false, time: new Date().getTime() } ])

        //清空輸入框內容
        setTemp('')

        //確保有標記到清單父層的位置
        if(listRef && listRef.current)

            //滾動到該位置的最上方
            listRef.current.scrollTo(0, 0)
    }

    return(
        <div className="inputWrapper">
            <span className='text-middle'>Add to list</span>

            <div className="flex">
                <input className="newTodo radius" value={temp} onChange={(v) => { setTemp(v.target.value); }} type="text"></input>
                <button className="addBtn radius text-white" onClick={() => { alterList(temp) }}>+</button>
            </div>
        </div>
    )
}

export default InputField;