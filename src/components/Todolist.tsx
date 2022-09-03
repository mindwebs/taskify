// all necessary imports done here
import React from 'react';
import { todo } from './model';
import Delete from './delete.png';
import Done from './checked.png';


// interfacing the props
interface props {
    todos: todo[];
    deleteHandler: (id: number) => (e: React.MouseEvent) => void;  //typing the deleteHandler props
    doneHandler: (id: number) => (e: React.MouseEvent) => void;  //typing the doneHadnler props
}

//the functional component

const Todolist: React.FC<props> = ({ todos, deleteHandler, doneHandler }) => {
    return (
        <div className="container">
            <div className="todoList">
                {todos.map((element: todo) => {
                    return (
                        <div className="list">
                            {element.isDone ? (
                                <div className="task doneClass">
                                    {element.todo}
                                </div>
                            ) : (
                                <div className="task notDoneClass">
                                    {element.todo}
                                </div>
                            )}

                            <div className="buttons">
                                <div className="delete">
                                    <img
                                        src={Delete}
                                        alt="sin"
                                        onClick={deleteHandler(element.id)}
                                    />
                                </div>
                                <div className="done">
                                    <img
                                        src={Done}
                                        alt="sin"
                                        onClick={doneHandler(element.id)}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Todolist;
