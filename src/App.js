
import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './component/progressBar'
import ListItem from './component/listItem'
import InputField from './component/InputField'

function App() {
  const [list, setList] = useState([])
  const [percentage, setPercentage] = useState(0)


  useEffect(() => {

    console.log('list :>>>', list)

  }, [list])

  return (
    <div className="App">

      <div id="wrapper">
        <header className="App-header">
          <h1 className='text-heavy'>Todo List</h1>
          <small className='text-light'>add things to do</small>
        </header>    

        <ProgressBar percentage={percentage} setPercentage={setPercentage}></ProgressBar>

        <ListItem list={list} ></ListItem>

        <InputField list={list} setList={setList}></InputField>
      </div>    

    </div>
  );
}

export default App;
