
import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './component/progressBar'
import ListItem from './component/listItem'
import OrderToggle from './component/orderToggle';
import InputField from './component/InputField'

function App() {
  const [list, setList] = useState([])  //{ name: string, done: boolean, time: timeStamp }
  const [percentage, setPercentage] = useState(0)
  const [active, setActive] = useState(false)


  useEffect(() => {

    console.log('list :>>>', list)

    let all = list.length
    let done = 0

    if(all > 0){
      console.log('100% :>>>', all)

      for(let i=0; i < list.length; i++){
          if(list[i].done == true)
            done += 1
      }

      console.log('done :>>>', done)
      // console.log(done / all)

      if(done == all){
        setPercentage(100) 
      }else     

      if(done == 0){
        setPercentage(0)   
      }else{

        let rougthNumber = (done / all).toString()

        console.log('rougthNumber :>>>', rougthNumber)

        setPercentage( Number(rougthNumber[ rougthNumber.length -1 ] + '0')  )   
      }
    }

  }, [list])

  useEffect(() => {

    if(active){

      let checked = list.filter((item) => item.done == true)

      let unCheck = list.filter((item) => item.done == false)

      setList([...unCheck, ...checked])

    }else{

      for(let i=0; i < list.length; i++){

        if( list[i + 1] !== undefined ){

          let current = list[i]
          let next = list[i + 1]

          if(current.time > next.time){
            list[i + 1] = current

            list[i] = next
          }
        }

      }

      console.log('back to default :>>>', list)

      setList([...list])
    }

  }, [active])

  return (
    <div className="App">

      <div id="wrapper">
        <header className="App-header">
          <h2 className='text-heavy'>Todo List</h2>
          <small className='text-light'>add things to do</small>
        </header>    

        <ProgressBar percentage={percentage} setPercentage={setPercentage}></ProgressBar>

        <ListItem list={list} setList={setList}></ListItem>

        <OrderToggle active={active} setActive={setActive}></OrderToggle>

        <InputField list={list} setList={setList}></InputField>
      </div>    

    </div>
  );
}

export default App;
