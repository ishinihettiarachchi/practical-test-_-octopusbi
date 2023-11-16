import React, { useState } from 'react';
import './hobby.css';

export default function Hobby() {
  const [hobbies, setHobbies] = useState([
    { id: 1, name: 'Painting' },
    { id: 2, name: 'Singing' },
    { id: 3, name: 'Reading books' },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [newHobbyName, setNewHobbyName] = useState('');

  const handleEditClick = (index) => {
    setEditIndex(index);
    setNewHobbyName(hobbies[index].name);
  };

  const handleSaveClick = (index) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies[index].name = newHobbyName;
    setHobbies(updatedHobbies);
    setEditIndex(null);
  };

  const handleCancelClick = () => {
    setEditIndex(null);
  };

  const handleInputChange = (event) => {
    setNewHobbyName(event.target.value);
  };

  return (
    <div className='hobby'>
      <h2>Hobbies</h2>

      <div className='hobby-input'>
        <p>Add New Hobby</p>

        <div className='hobby-form'>
          <input type='text'></input>
          <button className="add">
            Add
          </button>
        </div>
      </div>

      <table>
        <tbody>
          {hobbies.map((hobby, index) => (
            <tr key={hobby.id}>
              <td>{index + 1}</td>
              <td>
                {editIndex === index ? (
                  <input
                    type='text'
                    value={newHobbyName}
                    onChange={handleInputChange}
                  />
                ) : (
                  hobby.name
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <button className="save" onClick={() => handleSaveClick(index)}>
                      Save
                    </button>
                    <button className="cancel" onClick={handleCancelClick}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <button className="edit" onClick={() => handleEditClick(index)}>
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button className="delete">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
