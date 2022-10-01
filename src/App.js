
import React from 'react'


console.log('Top of App');

function App() {

  const [count, setCount] = React.useState(() => {
    return 10;
  });

  // const [count, setCount] = React.useState(() => {
  //   return { name: 'mhmd', age: 26 , hoppy:'sleeping'}
  // });


  console.log(count, 'inside App Component ');

  /*
  useState Notes :

  1)  ways to define the initial value of states :
  
  useState(10) :
  Each time we render the Component the aurgument of useState
  will be measured.

  useState( () => 10 ) :
  First time *ONLY* we render the Component the aurgument of useState
  will be measured.

  2)  *ALWAYS* destructure the array of state and setState using *const* key word.

  3)  If we dont change the value of state even if i use the updater function the component will not re-renderd (if the value equal the initial one)
      but if its not it will renderd twice then will stop , pleas check it !!!!
  
  4) If we set an object as initial state as the following :
      
      const [person, setPerson] = useState(() => {
        return { name: 'mhmd', age: 26 , hoppy:'sleeping'};
      });

      and wanted to change the value of one of its properties we cant do this setPerson({name: 'ali'})
      and the reason of that is the new object will over-write on the whole last object, so we have to do this instde :

      setPerson({...person, name:'ali'});

==========================================================================================================================================

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

==========================================================================================================================================
  */


  // async function addOne() {
  //   let x = count
  //   console.log(1);
  //   await setCount(++x);
  //   moew();
  //   console.log(2);
  //   console.log(3);
  //   console.log(count, 'inside addOne function');
  // }

  // async function moew() {
  //   await console.log('meow inside meow func')
  //   await setCount(1000)
  //   console.log('meow moew ')
  // }

  // function addOne() {
  //   setCount({name: 'ali', age: 26 , hoppy:'sleeping'});
  // }

  function addOne() {
    console.log('inside addOne')
    setCount(10);
  }

  // return (
  //   <div className="App">
  //     {console.log(count, 'Inside  App Component return')}
  //     <button>-</button>
  //     <span>{count.name}</span>
  //     <span>{count.age}</span>
  //     <span>{count.hoppy}</span>
  //     <span>{count.hoppy}</span>
  //     <button onClick={addOne}>+</button>
  //   </div>
  // );

  return (
    <div className="App">
      {console.log(count, 'Inside  App Component return')}
      <button>-</button>
      <span>{count}</span>
      <button onClick={addOne}>+</button>
    </div>
  );

}




export default App;







console.log('Bot of App');