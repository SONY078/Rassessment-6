import React,{useState} from 'react'
import "./Styling.css"
import { Link } from 'react-router-dom';
import  {Name2} from './Data.jsx';
import { useContext } from 'react';
export default function CreateNew() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [batch, setBatch] = useState('');
    const [data , setData] = useContext(Name2);

    const changeName = (event) => {
        setName(event.target.value);
    };
    const changeAge = (event) => {
        setAge(event.target.value);
    };
    const changeCourse = (event) => {
        setCourse(event.target.value);
    };
    const changeBatch = (event) => {
        setBatch(event.target.value);
    };
    const transferValue = (event) => {
        event.preventDefault();
       setData([...data,{
        Name:name,
        Age:age,
        Course:course,
        Batch:batch,
        id:new Date().getTime().toString()
    }])
        clearState();
    };
    
    const clearState = () => {
        setName('');
        setAge('');
        setCourse('');
        setBatch('');
    };

  return (
    <div className="col-md-4 mt-5" id='group'>
        <div id="group-con">
        <div className="textOnInput">
            <label htmlFor="inputText">Name</label>
            <input className='form-control' type="text" value={name} onChange={changeName}/>
        </div>
        <div className="textOnInput">
            <label htmlFor="inputText">Age</label>
            <input className='form-control' type="text" value={age} onChange={changeAge}/>
        </div>
        <div className="textOnInput">
            <label htmlFor="inputText">Course</label>
            <input className='form-control' type="text" value={course} onChange={changeCourse}/>
        </div>
        <div className="textOnInput">
            <label htmlFor="inputText">Batch</label>
            <input className='form-control' type="text" value={batch} onChange={changeBatch}/>
        </div>
        </div>
        {/* <button id='bt1' onClick={closePage}>Cancel</button> */}
        <Link to='/student' id="bt1">Cancel</Link>
        <Link to='/student' id='bt2' onClick={transferValue} >Update</Link>
        {/* <button id='bt2' onClick={transferValue}>Update</button> */}
    </div>


  );
}
