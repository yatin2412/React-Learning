import React,{useState} from "react";

const Form = React.memo(function Form() {
    const [form, setForm] = useState({
        name: "", email: "", password: "", confirmPassword: ""
    })
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        const { name, value} = e.target
        setForm(prev => ({...prev, [name]: value}))
    }
    const isValid = () => {
        const newError = {}
        if (!form.name.trim()){
            newError.name = "Name is required"
        }
        if (!form.email.trim()){
            newError.email = "Email is required"
        }
        if (!form.password.trim()){
            newError.password = "Password is required"
        }
        if (!form.password.trim().length<8){
            newError.password = "Password should be minimum 8 char long"
        }
        if (!form.confirmPassword.trim()){
            newError.confirmPassword = "Confirm Password is required"
        }
        if (form.confirmPassword != form.password){
            newError.confirmPassword = "Confirm Password doesnot match Password"
        }
        if (!form.email.includes("@")){
            newError.email = "Email is not valid"
        }
        
        setErrors(newError)
        
        return Object.keys(newError).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const valid = isValid()
        if (valid){
            console.log("Form is", form);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <div>
                <input name="name" value={form.name} placeholder={"Enter Name"} onChange={handleChange}/>
                {errors?.name && <span style={{color: 'red', fontSize: '12px'}}>{errors?.name}</span>}
            </div>
            <div>
                <input name="email" value={form.email} placeholder={"Enter email"} onChange={handleChange}/>
                {errors?.email && <span style={{color: 'red', fontSize: '12px'}}>{errors?.email}</span>}
            </div>
            <div>
                <input name="password" value={form.password} placeholder={"Enter password"} onChange={handleChange}/>
                {errors?.password && <span style={{color: 'red', fontSize: '12px'}}>{errors?.password}</span>}
            </div>
            <div>
                <input name="confirmPassword" value={form.confirmPassword} placeholder={"Enter confirmPassword"} onChange={handleChange}/>
                {errors?.confirmPassword && <span style={{color: 'red', fontSize: '12px'}}>{errors?.confirmPassword}</span>}
            </div>
            <button disabled={Object.keys(errors).length > 0} type="submit">Submit</button>
        </form>
        </>
    );
});

export default Form;