
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

  3)  If we set an object as initial state as the following :
      
      const [person, setPerson] = useState(() => {
        return { name: 'mhmd', age: 26 , hoppy:'sleeping'};
      });

      and wanted to change the value of one of its properties we cant do this setPerson({name: 'ali'})
      and the reason of that is the new object will over-write on the whole last object, so we have to do this instde :

      setPerson({...person, name:'ali'});

  <<<<==============================================================================================================================>>>>
  
  
  */

  async function addOne() {
    let x = count
    console.log(1);
    await setCount(++x);
    moew();
    console.log(2);
    console.log(3);
    console.log(count, 'inside addOne function');
  }

  async function moew() {
    await console.log('meow inside meow func')
    await setCount(1000)
    console.log('meow moew ')
  }

  // function addOne() {
  //   setCount({name: 'ali', age: 26 , hoppy:'sleeping'});
  // }

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