import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Name2} from './Data.jsx';
import "./Styling.css"
// import Edit from './Edit.jsx';
export default function Students() 
{

 const [student] = useContext(Name2);
//  const [editData , setEditData] = useState(
//   {
//     Name : "",
//     Age : "",
//     Course : "",
//     Batch  : "",
//   }
//  )
 
//  const [edit , setEdit] = useState(null);
 
//  const handleClick = (event,student) =>
//     {
//       event.preventDefault();
//       setEdit(student.id);
//       console.log(student);
      // const fvalues = 
      // {
      //   Name : student.Name,
      //   Age : student.Age,
      //   Course : student.Course,
      //   Batch : student.Batch
      // }
      // setEditData(fvalues);
    // }
    // const handleEdit = (event) =>
    // {
    //   const Cname = event.target.getAttribute("Name");
    //   const Cvalue = event.target.value;
    //   const newData = {...edit};
    //   newData[Cname] = Cvalue;

    //   setEditData(newData);
    //   console.log(newData);
    // }
 
  return (
    <div>
        <br/>
        <br/>
        <h1>Student Details</h1>
        <Link to='/student-new' id='buttn'>Add Student</Link>
        <br/>
        <br/>
        <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody className="table-group-divid">
  {
    student.map((student)=>(
          (<tr key={student.id} >
          <td>{student.Name}</td>
          <td>{student.Age}</td>
          <td>{student.Course}</td>
          <td>{student.Batch}</td>
          <td>
          <Link to={`/Edit/${student.id}`}>Edit</Link>
            {/* <Edit editData={editData} handleEdit={handleEdit}/> 
            onChange={handleEdit} editdata={editData}*/}
          </td>
      </tr>)
      // : 
      // (<tr key={student.id} >
      //     <td>{student.Name}</td>
      //     <td>{student.Age}</td>
      //     <td>{student.Course}</td>
      //     <td>{student.Batch}</td>
      //     <td><Link to="/edit" onClick={(event)=>handleClick(event,student)}>Edit</Link></td>
      //   </tr>)
      
    ))}

{/* onClick={(event)=>handleClick(event,student)   */}
</tbody>
</table>
    
    
    </div>
  );
}
