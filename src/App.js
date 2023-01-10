
import { useEffect, useRef, useState } from 'react';
import './App.css';
import ProgressBar from './component/progressBar'
import ListItem from './component/listItem'
import OrderToggle from './component/orderToggle';
import InputField from './component/InputField'

function App() {
  //代辦事項的 state, 預設空陣列
  const [list, setList] = useState([])  //{ name: string, done: boolean, time: timeStamp }

  //事項完成的趴數，預設為0
  const [percentage, setPercentage] = useState(0)

  //改變排序的開關，預設關閉
  const [active, setActive] = useState(false)

  //要拿來標記清單父層的變數
  const listRef = useRef(null)


  //代辦事項發生變化時發動
  useEffect(() => {

    console.log('list :>>>', list)

    //代辦事項不為空的情況
    if(list.length){
      let all = list.length

      //計算完成的事項
      let checked = list.filter((item) => item.done == true).length
      console.log('100% :>>>', all)
      console.log('checked :>>>', checked)

      //全部未完成
      if(checked == 0){
        setPercentage(0)   
      }else{
        //計算完成事項佔全體多少 (取小數點後兩位)
        let rougthNumber = (checked / all).toFixed(2)

        console.log('rougthNumber :>>>', rougthNumber)

        //改寫數字
        setPercentage( Math.floor(100 * rougthNumber ) )   
      }
    }

  }, [list])


  //切換扭開關變動時發動
  useEffect(() => {

    //開啟的情況
    if(active){

      //找出已完成的事項
      let checked = list.filter((item) => item.done == true)

      //找出未完成的事項
      let unCheck = list.filter((item) => item.done == false)

      //組合維新的陣列
      setList([...unCheck, ...checked])

    }else{
      //關閉的情況
      if(list.length){
       
        //根據時間先後排序
        list.sort((a, b) => { return a.time - b.time })

        console.log('back to default :>>>', list)

        setList([...list])        
      }
    }

  }, [active])

  return (
    <div className="App">

      <div id="wrapper">
        <header className="App-header">
          <p className='text-heavy'>Todo List</p>
          <small className='text-light'>add things to do</small>
        </header>    

        {/* 進度條 */}
        <ProgressBar percentage={percentage} setPercentage={setPercentage}></ProgressBar>

        {/* 代辦事項清單 */}
        <ListItem list={list} setList={setList} listRef={listRef}></ListItem>

        {/* 排序改變開關 */}
        <OrderToggle active={active} setActive={setActive} list={list}></OrderToggle>

        {/* 輸入框 */}
        <InputField list={list} setList={setList} listRef={listRef} active={active}></InputField>
      </div>    

    </div>
  );
}

export default App;
