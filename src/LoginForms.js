import React, { useState } from 'react';

const LoginForms = () => {
    const [personData, setPersonData] = useState({
        fname:"",
        lname:"",
        email:"",
        mobile:"",
    });

    const inputEvent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)

        const {value, name} = event.target
        setPersonData((preValue) => {
            // or we can de with spread operator
            // return {
            //     ...preValue,
            //     [name] : value,
            // }
            if (name === "fname") {
                return {
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    mobile: preValue.mobile
                }
            } else if (name === "lname") {
                return {
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    mobile: preValue.mobile
                }
            } else if (name === "email") {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    mobile: preValue.mobile
                }
            } else if (name === "mobile") {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    mobile: value
                }
            }
        })


    }

    const submitForm = (event) => {
        event.preventDefault();
        alert('form-submitted')
    }

    return (
        <form  onSubmit={submitForm}>

       
        <div className="main-div">
            <h1 className="h1-div">Hello {personData.fname} {personData.lname}</h1>
            <div>{personData.email} </div>
            <div>{personData.mobile}</div>
            <div>
            <input className="input-div" onChange={inputEvent} value={personData.fname} name="fname" placeholder="Enter your first name" />
            </div>
            <div>
            <input className="input-div" onChange={inputEvent} value={personData.lname} name="lname" placeholder="Enter your last name" />
            </div>
            <div>
            <input className="input-div" onChange={inputEvent} autoComplete='off' value={personData.email} name="email" placeholder="Enter your email" />
            </div>
            <div >
            <input className="input-div" onChange={inputEvent} value={personData.mobile} name="mobile" placeholder="Enter your phone number" />
            </div>
            <div >
                <button className="button-div" type="submit">Submit 👍</button>
            </div>
        

        </div>
</form>
    )
}

export default LoginForms;