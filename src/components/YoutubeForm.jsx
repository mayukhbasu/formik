import { Formik, useFormik } from 'formik';
import React from 'react';


const YoutubeForm = () => {
  const initialValues = {
    name: '',
    email: '',
    channel: ''
  };
  const onSubmit = values => {
    console.log(values);
  }
  const validate = values => {
    let errors = {};
      let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      if(!values.name) {
        errors.name = 'Required!'
      }
      if(!values.email) {
        errors.email = 'Required!'
      } else if(!regex.test(values.email)) {
        errors.email = 'Invalid email format'
      }
      if(!values.channel) {
        errors.channel = 'Required!'
      }
      return errors;
  }
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });
  
  console.log('Form errors ', formik.errors );
  console.log('Form visited ', formik.touched)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' onChange={formik.handleChange}
          value={formik.values.name} onBlur={formik.handleBlur}/>
          {
            formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null
          }
        </div>
        
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email' value={formik.values.email} 
          onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {
            formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null
          }
        </div>
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <input type='text' id='channel' name='channel' value={formik.values.channel}
          onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          {
            formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null
          }
        </div>
        
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;