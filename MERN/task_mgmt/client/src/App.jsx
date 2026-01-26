
import './App.css'
import Component from './components/component.jsx';
import {Greet} from './components/greet.jsx';

function App() {

  return (
    <div>
      <h1>Hello World</h1>
    <li>jsx</li>
    <li>props</li>
    {2+2}
    {/* {Component()} */}
    <Component />
    <Greet user={"Abinash"} name={'abc'}/>
    <Greet user={'Roshan'} />
    <Greet />
    <Greet />
    <li>component</li>
    </div>
    
    
       
  )}

export default App;

// { ""; ""}
// xml
// user = {name:'abc'}
// <user>
// <name>abc</name>
// </user>


