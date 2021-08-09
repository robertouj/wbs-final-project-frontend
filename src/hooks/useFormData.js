
import { useState } from 'react';

function useFormData(initialValue) {
  const [formData, setFormData] = useState(initialValue);
  const handleChange = (e) => {
    //console.log(e)
    const { name, value } = e.target;
    setFormData({
      ...formData,
      isChanged: true,
      [name]: value
    });
  };

  return [formData, setFormData, handleChange];
}

export default useFormData;