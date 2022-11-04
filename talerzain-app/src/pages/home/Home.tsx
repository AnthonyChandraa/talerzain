import {useState, useEffect} from 'react'

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
    <div>
      <h1>Homeee {numberState}</h1>
      <button onClick={handleAddNumber}>Add Number</button>
    </div>

  )
}

export default Home