import React, { useState,useEffect } from 'react';
import './hobby.css';
import axios from 'axios'


export default function Hobby() {
  

  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:3001/')
    
    .then(res=>setHobbies(res.data))
    .catch(err=>console.log(err));
  }, []);

  const [values, setValues] =useState({
    hobby : ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/hobby',values)
    .then(res=>console.log(res))
    .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/delete/'+id)
    .then(res=>{
     
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className='hobby'>
      <h2>Hobbies</h2>
      <div className='hobby-input'>
        <p>Add New Hobby</p>
        <div className='hobby-form'>
          <form onSubmit={handleSubmit}>
          <input type='text' onChange={e=>setValues({...values,hobby:e.target.value})}></input>
          <button className="add" >
            Add
          </button>
          </form>
        </div>
      </div>

      <table>
        <tbody>
        {hobbies.map((hobby,index)=>{
            return <tr key={index}>
            <td>{hobby.HobbyId}</td>
            <td>
            {hobby.Hobby}
            </td>
            <td>
            
                <button className="edit" >
                  Edit
                </button>
            
            </td>
            <td>
              <button className="delete" onClick={()=>handleDelete(hobby.HobbyId)}>
                Delete
              </button>
            </td>
            </tr>
        })}
           
       
        </tbody>
      </table>
    </div>
  );
}
