import { useEffect, useState } from 'react'

function App2() {

  // console.log('inside App2 funciton ');

  const [counter1, setCounter1] = useState(() => 0);
  const [counter2, setCounter2] = useState(() => 0);
  const [counter3, setCounter3] = useState(() => 0);


  /*
  useEffect Notes :

  1)  useEffect hook can do the jop of 2 component life cycle methods :

        A-componentDidMount()
          a function will auto called  at the first render of the component.

        B-componentDidUpdate()
          a function will auto called after we change a value of a state.

  2)  We can use useEffect() with 3 diffrent ways

        A-useEffect(()=>{})
          at this way the useEffect will work as componentDidMount and componentDidUpdate at each time ANY state value changes.
        
        B-useEffect(()=>{},[])
          at this way the useEffect will work as componentDidMount only.

        C-useEffect(()=>{},[state1,state2])
          at this way the useEffect will work as componentDidMount and componentDidUpdate if any of state1 or state2 changing only
          and it will not run as componentDidUpdate if the state is not mentioned in the dependency array.
  */




  useEffect(() => {
    console.log('inside use effect1');
    console.log(counter1)
  }, [counter1, counter2])

  useEffect(() => {
    console.log('inside use effect1');
    console.log(counter1)
  }, [])


  function count1() {
    setCounter1(preValue => preValue + 1);
    console.log(counter1)
  }
  function count2() {
    setCounter2(preValue => preValue + 1);
  }
  function count3() {
    setCounter3(preValue => preValue + 1);
  }


  return (
    <div style={{ padding: '50px' }}>
      <br></br>
      <button onClick={count1}> count1 up</button>
      <button onClick={count2}> count2 up</button>
      <button onClick={count3}> count3 up</button>
      <br></br>
      <span>{counter1}</span>
      <br></br>
      <span>{counter2}</span>
      <br></br>
      <span>{counter3}</span>
    </div>
  )
}

export default App2
