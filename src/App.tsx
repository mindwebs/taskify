//importing the necessitites
import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { todo } from './components/model';
import Todolist from './components/Todolist';




const App: React.FC = () => {

  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<todo[]>([]);
  
  //the delete HAdnler function
  const deleteHandler = (id: number) => (e:React.MouseEvent) => {
    e.preventDefault();
    console.log(id);
    for (let i=0;i<todos.length;i++){
        if(todos[i].id===id){
            todos.splice(i,1);
        }
    }

    setTodos([...todos]);
};



// the doneHandler function
const doneHandler = (id: number) => (e: React.MouseEvent) => {
  e.preventDefault();
  for(let i=0;i<todos.length;i++){
    if(todos[i].id===id){
      if(todos[i].isDone==false){
        todos[i].isDone=true;
        
      }
      else{
        todos[i].isDone=false;

      }

    }
  }
  setTodos([...todos]);
  console.log(todos)
};
//the addHandler function

  const addHandler = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(inputText);
    if(inputText){
      setTodos([...todos, {id : Date.now(), todo : inputText, isDone : false }])
      setInputText("");
    }
  }
  return (
    <div className='container'>
        <h1 className='header'>Taskify</h1>
        <InputField inputText={inputText} setInputText = {setInputText} addHandler = {addHandler}/>
        <Todolist todos={todos} deleteHandler = {deleteHandler} doneHandler= {doneHandler}/>
    </div>
  )
}

export default App