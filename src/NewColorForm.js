import React, { useState } from 'react';

const NewColorForm = ({ addColor }) => {
  const INIT_STATE = {
    colorName: '',
    colorValue: '',
  };

  const [formData, setFormData] = useState(INIT_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = () => {
    addColor({ ...formData });
    setFormData(INIT_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='colorName'>Color name</label>
      <input id='colorName' type='text' placeholder='color name' value={formData.value} onChange={handleChange} />
      <label html='colorValue'>Color value</label>
      <input id='colorValue' type='color' value={formData.value} onChange={handleChange} />
      <button>Add color</button>
    </form>
  );
};

export default NewColorForm;
