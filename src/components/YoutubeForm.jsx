import { useFormik } from 'formik';
import React from 'react';


const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: ''
    }
  });
  console.log(formik.values);
  return (
    <div>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' onChange={formik.handleChange} 
        value={formik.values.name}/>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' name='email' value={formik.values.email} 
        onChange={formik.handleChange}/>
        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel' name='channel' value={formik.values.channel}
        onChange={formik.handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;