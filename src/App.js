import React, {Component} from 'react';
import './App.css';
import Form from './AddToDo';

class App extends Component {
  state = {todo:[
    {id: 1,
    content: "do now",
    done: true},
    {id: 2,
    content: "do that",
    done: false},
    {id: 3,
    content: "do then",
    done: true}
  ] }


  render(){
  return (
    <div className="App">
     <Form/>
     <ul>
       {this.state.todo.map((todoItem)=> {
         return <li>{todoItem.content + todoItem.done}</li>
       })}
     </ul>
    </div>
  );}
}

export default App;
