// import './App.css';
// import Counter from './components/counter';
// import { useContext } from 'react';
// import { CounterContext } from './context/counter';

// function App() {

//   const counterState = useContext(CounterContext);
//   console.log('context ',counterState);


//   return (
//     <div className="App">
//       <h1>Count is {counterState.count}</h1>
//       <Counter /><br/>
//       <Counter /><br/>
//       <Counter /><br/>
//       <Counter />
//     </div>
//   );
// }

// export default App;



import './App.css';
import Item from './components/item';
import Cart from './components/cart';

function App() {



  return (
    <div className="App">
      <h1 style={{ textAlign: 'center'}}>API Context</h1>
      <p><Item name='Macbook Pro' price={100000}/></p>
      <p><Item name='Macbook Air' price={80000}/></p>
      <p><Item name='Dell Inspiron' price={60000}/></p>
      <p><Item name='HP Envy' price={70000}/></p>
      <p><Item name='Lenovo Thinkpad' price={50000}/></p>
      <p><Item name='Asus Zenbook' price={90000}/></p>
      <Cart></Cart>
    </div>
  );
}

export default App;
