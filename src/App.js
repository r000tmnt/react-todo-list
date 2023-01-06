
import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './component/progressBar'
import ListItem from './component/listItem'
import InputField from './component/InputField'

function App() {
  const [list, setList] = useState([])  //{ name: string, done: boolean, time: timeStamp }
  const [percentage, setPercentage] = useState(0)


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

      if(done == all) setPercentage(100)      

      if(done == 0){
        setPercentage(0)   
      }else{

        let rougthNumber = (done / all).toString()

        console.log('rougthNumber :>>>', rougthNumber)

        setPercentage( Number(rougthNumber[ rougthNumber.length -1 ] + '0')  )   
      }
    }

  }, [list])

  return (
    <div className="App">

      <div id="wrapper">
        <header className="App-header">
          <h1 className='text-heavy'>Todo List</h1>
          <small className='text-light'>add things to do</small>
        </header>    

        <ProgressBar percentage={percentage} setPercentage={setPercentage}></ProgressBar>

        <ListItem list={list} setList={setList}></ListItem>

        <InputField list={list} setList={setList}></InputField>
      </div>    

    </div>
  );
}

export default App;
