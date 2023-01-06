import { useState } from "react";

function InputField ({ list, setList }){

    const [temp, setTemp] = useState('')

    const alterList = (newTodo) => {

        console.log('newTodo :>>>', newTodo)

        setList([ ...list, { name: newTodo, done: false, time: new Date().getTime() } ])

        setTemp('')
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