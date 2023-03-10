import { useState } from "react";

function InputField ({ list, setList, listRef, active }){

    //輸入框內容的臨時站點
    const [temp, setTemp] = useState('')

    //加入新的事項
    const alterList = (newTodo) => {

        console.log('listRef :>>>', listRef)

        console.log('newTodo :>>>', newTodo)


        //如果有改變排序
        if(active){

            //找出已完成的事項
            let checked = list.filter((item) => item.done == true)

            //找出未完成的事項
            let unCheck = list.filter((item) => item.done == false)


            //在中間插入新的事項
            setList([...unCheck, { name: newTodo, done: false, time: new Date().getTime() }, ...checked])

        }else{

            //先加入原有的陣列，再放入新的事項
            setList([ ...list, { name: newTodo, done: false, time: new Date().getTime() } ])

        }


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
                {
                    (temp.length)?
                    <button className="addBtn radius text-white" onClick={() => { alterList(temp) }}>+</button> :

                    //輸入框空白時候所顯示的按鈕
                    <button className="addBtn radius text-white disable" disabled>+</button> 
                }
            </div>
        </div>
    )
}

export default InputField;