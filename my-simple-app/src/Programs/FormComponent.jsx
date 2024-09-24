import React, { useState } from 'react'

function FormComponent() {

    const initialFormState={
        name:'',
        password:'',
        email:'',
        city:'',
        gender:'',
        age:'',
        dob:''
    }


    const [formData, setFormData]=useState(initialFormState);

    const[errors, setErrors]=useState({})

    const handleChange=(e)=>{
        console.log("Event e : ",e)
        console.log("Event e.target :",e.target)
        const {name, value}=e.target
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const validateForm=()=>{
        let formErrors={}

        if(!formData.name)
            formErrors.name="Name is required"
        if(!formData.password)
            formErrors.password="Password is required"
        else if(formData.password.length<6)
            formErrors.password="Password should be at least 6 char long"

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!formData.email){
            formErrors.email="Email is required"
        }
        else if(!emailPattern.test(formData.email))
            formErrors.email="Invalid email format"

        if(!formData.city)
            formErrors.city='city is required'
        if(!formData.gender)
            formErrors.gender="Please select your gender"
        if(!formData.age){
            formErrors.age="Age is required"
        }else if(isNaN(formData.age)||formData.age<1||formData.age>100)
            formErrors.age="Please enter a valid age"

        if(!formData.dob)
            formErrors.dob="Date of birth is required"
        return formErrors
    }


    const handleSubmit=(e)=>{
        e.preventDefault()

       const validationErrors= validateForm();
       if(Object.keys(validationErrors).length===0){
        console.log("Form submitted success ", formData)
        alert("FOrm Submitted scessfully")

        setFormData(initialFormState)
       }else{
        setErrors(validationErrors)
       }
    }

  return (
    <div>
        <h2>Form Submission with hooks</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
            </div>
            <div>
                <label>Password:</label>
                <input 
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input 
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            </div>
            <div>
                <label>City:</label>
                <input 
                    type='text'
                    name='city'
                    value={formData.city}
                    onChange={handleChange}
                />
                {errors.city && <p style={{color:'red'}}>{errors.city}</p>}
            </div>
            <div>
                <label>Gender:</label>
                <select name='gender' value={formData.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.gender && <p style={{color:'red'}}>{errors.gender}</p>}
            </div>
            <div>
                <label>Age:</label>
                <input 
                    type='number'
                    name='age'
                    value={formData.age}
                    onChange={handleChange}
                />
                {errors.age && <p style={{color:'red'}}>{errors.age}</p>}
            </div>
            <div>
                <label>Date of Birth:</label>
                <input 
                    type='date'
                    name='dob'
                    value={formData.dob}
                    onChange={handleChange}
                />
                {errors.dob && <p style={{color:'red'}}>{errors.dob}</p>}
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormComponent