import { useState } from "react";

function InputField ({ list, setList }){

    const [temp, setTemp] = useState('')

    const alterList = (newTodo) => {

        console.log('newTodo :>>>', newTodo)

        setList([ ...list, { name: newTodo, done: false, time: new Date().getTime() } ])

        setTemp('')
    }

    return(
        <div className="flex inputWrapper">
            <input className="newTodo" value={temp} onChange={(v) => { setTemp(v.target.value); }} type="text"></input>
            <button className="addBtn radius text-white" onClick={() => { alterList(temp) }}>+</button>
        </div>
    )
}

export default InputField;