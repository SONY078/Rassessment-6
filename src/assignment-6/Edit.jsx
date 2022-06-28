import React from "react";
import "./Styling.css"
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import  {Name2} from './Data.jsx';
function Edit() 
{
  const [student, setStudent] = useContext(Name2);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");

  const changeName = (event) => {
        setName(event.target.value);
        const val = event.target.value;
       console.log(val);
    };
    const changeAge = (event) => {
        setAge(event.target.value);
        const val = event.target.value;
       console.log(val);
    };
    const changeCourse = (event) => {
        setCourse(event.target.value);
        const val = event.target.value;
       console.log(val);
    };
    const changeBatch = (event) => {
        setBatch(event.target.value);
        const val = event.target.value;
       console.log(val);
    };

    useEffect(() => 
    {
      student.forEach((element) => 
      {
        if (element.id === id) 
        {
          setName(element.Name);
          setAge(element.Age);
          setCourse(element.Course);
          setBatch(element.Batch);
        }
      });
    }, [id, student]);
  
    const SubmitHandler = () => {
      setStudent((previousV) =>
        previousV.map((store) =>
          store.id === id
            ? {
                id: id,
                Name: name,
                Age: age,
                Batch: batch,
                Course: course,
              }
            : store
        )
      );
    };

  return (
        <div className="col-md-4 mt-5" id='group'>
        <div id="group-con">
        <div className="textOnInput">
            <label htmlFor="inputText">Name</label>
            <input className='form-control'  name='name' type="text" value={name} onChange={changeName} />
        </div>
        <div className="textOnInput">
            <label htmlFor="inputText">Age</label>
            <input className='form-control'  name='age' type="text" value={age} onChange={changeAge}/>
        </div>
        <div className="textOnInput">
            <label htmlFor="inputText">Course</label>
            <input className='form-control'  name='course' type="text" value={course} onChange={changeCourse}/>
        </div>
        <div className="textOnInput">
            <label htmlFor="inputText">Batch</label>
            <input className='form-control'  name='batch' type="text" value={batch} onChange={changeBatch}/>
        </div>
        </div>
        {/* <button id='bt1' onClick={closePage}>Cancel</button> */}
        <Link to='/student' id="bt1">Cancel</Link>
        <Link to='/student' id='bt2' onClick={SubmitHandler}>Update</Link>
    </div>
    
        );

};
export default Edit;
