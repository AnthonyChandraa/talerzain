import {useState, useEffect} from 'react'
// import './../../css/index.scss'

function Home() {
  let number = 3;
  const [numberState, setNumberState] = useState(3);
 
  useEffect(() => {
    alert('Current NumberState Value is ' + numberState);
  }, [numberState])

  function handleAddNumber(){
    // number = number + 1;
    setNumberState(numberState+1);
    console.log("Triggered" + numberState);
  }


  return (
    <div className='bg-yellow m-1'>
      <h1 className="title">Homeee {numberState}</h1>
      <button onClick={handleAddNumber} className="button1">Add Number</button>
    </div>

  )
}

export default Home