// useForm.js
import { useState } from 'react';

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const resetForm = () => {
    setFormData(initialState);
  };
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return { formData, handleChange, resetForm };
};

export default useForm;
