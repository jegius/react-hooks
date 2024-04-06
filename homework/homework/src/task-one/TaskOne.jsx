import React, {useEffect, useState} from 'react';
import './TaskOne.css';
function useForm(initialValue){
    const [firstName, setFirstName] = useState(initialValue);
    const [lastName, setLastName] = useState(initialValue);
    const [email, setEmail] = useState(initialValue);
    const [password, setPassword] = useState(initialValue);
    const [confirmPassword, setConfirmPassword] = useState(initialValue);
    const [error, setError] = useState(initialValue); 
   const eventHandler = e => {
        if(e.target.name === "firstName"){
            setFirstName(e.target.value)      
        }
        if(e.target.name === "lastName"){
            setLastName(e.target.value)
        }
        if(e.target.name === "email"){
            setEmail(e.target.value)
        }
        if(e.target.name === "password"){
            setPassword(e.target.value)
        }
        if (e.target.name === "confirmPassword"){
            setConfirmPassword(e.target.value)
        }
    }
    useEffect(()=>{firstName == ""? setError("First Name field can't be empty"):setError("")},[firstName])
    useEffect(()=>{lastName == ""? setError("Last Name field can't be empty"):setError("")},[lastName])
    useEffect(()=>{!new RegExp("[a-zA-Z0-9]+@[a-zA-Z0-9]+[a-zA-Z0-9]*\.[a-zA-Z0-9]+[a-zA-Z0-9]+[a-zA-Z0-9]*").test(email)? setError("incorrect Email field"):setError("")},[email])
    useEffect(()=>{!new RegExp("(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}").test(password)? setError("incorrect Password field"):setError("")},[password])
    useEffect(()=>{confirmPassword !== password?
        setError("confirm Password must match with password"):setError("")
}, [confirmPassword])

  const  submitForm = () => {
        alert(`First Name: ${firstName} Last Name: ${lastName}  Email: ${email}  Password: ${password}  Confirm Password: ${confirmPassword}`);
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    };

    return{
        firstName, lastName, email, password, confirmPassword, error, eventHandler, submitForm
    }
}

function TaskOne() {
    const form = useForm("")

    const onSubmitHandle = (event) => {
        event.preventDefault();

        if (form.firstName!==""&&form.lastName!==""&&form.email!==""&&form.password!==""&&form.confirmPassword!==""&&form.error===""){
            form.submitForm()
        }
    }
    return (
        <div className="form-container">
            <div className="error-message">{form.error}</div>
            <form> 
                <input type="text" name="firstName" placeholder="First Name" className="form-input"
                       onChange={form.eventHandler} value={form.firstName}/>
                <input type="text" name="lastName" placeholder="Last Name" className="form-input"
                       onChange={form.eventHandler} value={form.lastName}/>
                <input type="email" name="email" placeholder="Email" className="form-input"
                       onChange={form.eventHandler} value={form.email}/>
                <input type="password" name="password" placeholder="Password" className="form-input"
                       onChange={form.eventHandler} value={form.password}/>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-input"
                       onChange={form.eventHandler} value={form.confirmPassword}/>
                <button type="submit" onClick={onSubmitHandle} className="form-button">Register</button>
            </form>
        </div>
    );
}

export default TaskOne;