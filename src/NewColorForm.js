import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
  const history = useHistory();

  const INIT_STATE = {
    colorName: '',
    colorValue: '#ffffff',
  };

  const [formData, setFormData] = useState(INIT_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = () => {
    addColor({ ...formData });
    setFormData(INIT_STATE);
    history.push('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='colorName'>Color name</label>
      <input name='colorName' id='colorName' type='text' value={formData.colorName} onChange={handleChange} />
      <label htmlFor='colorValue'>Color value</label>
      <input name='colorValue' id='colorValue' type='color' value={formData.colorValue} onChange={handleChange} />
      <button>Add color</button>
    </form>
  );
};

export default NewColorForm;
