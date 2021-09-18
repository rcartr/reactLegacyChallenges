import React, { useState, useEffect } from 'react';
import { Input, Button } from 'reactstrap';

const ToDoIndex = () => {
    let [list, setList] = useState([])
    let [item, setItem] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="myDiv">
            <form onSubmit={handleSubmit}>
            <Input type="text" placeholder="To-Do Item" value={item} onChange={e => setItem(e.target.value)} />
            <Button id="submish" type="submit"
                onClick={e => { setList(list => [...list, item])
                                setItem('') } }
                
            >Add To-Do Item</Button>
            </form>
            <br />
            <h3>To-Do List:</h3>
            {list.map((current, index) => {
                return (
                    <div id={index}>
                        <p>{current}
                        <Button id="todoDone" color="primary" 
                            onClick={e => document.getElementById(index).remove()}
                        >Complete/Remove</Button></p>
                    </div>
                )
            })}
        </div>
    )
}

export default ToDoIndex;