import {React,useState} from "react";
import "./index.css";
import TodoLists from "./TodoList";

const App=()=>{

    const [presentData,setUpdatedData]=useState("");
    const [items,setItem]=useState([]);

    const addItem=(event)=>{
        setUpdatedData(event.target.value);

    };

    const listOfItems=()=>{
        setItem((olditems)=>{
            return [...olditems,presentData];
        });
        setUpdatedData("");

    };

    const deleteItem=(id)=>{
        console.log("deleted");

        setItem((olditems)=>{
            return olditems.filter((arrElem,index)=>{
                return index!== id;
            });
        });

    };
    return (
        <>
         <div className="main_div">
             <div className="center_div">
                 <h1>My Daily Bucket</h1>
                 <br/>
                 <input type="text" placeholder="Enter a task" 
                 value={presentData} onChange={addItem}/>
                 <br/>
                 <button onClick={listOfItems}>Add item</button>
                 <h3>Items in your bucket</h3>

                 <ol>
                     {items.map((itemval,index)=>{
                         return <TodoLists 
                         key={index}
                         id={index}
                         text={itemval}
                         onSelect={deleteItem}/>
                     })}
                 </ol>

             </div>
         </div>


        </>

    );

};

export default App;