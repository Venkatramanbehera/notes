import React from 'react'

import { TextField, ButtonGroup,Button } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { login } from '../action/userAction'

const Login = (props) => {

    const dispatch = useDispatch()

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        const formData = {
            email:email,
            password:password
        }
        const resetForm = () => {
            setPassword('')
            setEmail('')
        }
        dispatch(login(formData,resetForm))
    }

    return (
        <div>
            <h1>Login To Your Account </h1>
            <div className="form__login">
                <form onSubmit={ submitForm }>
                    <div className="email">
                        <TextField 
                            id="outlined-basic" 
                            label="Your Email" 
                            variant="outlined" 
                            value={ email } 
                            onChange={ handleEmailChange } />
                    </div>
                    <div className="password">
                        <TextField 
                            id="outlined-basic" 
                            label="Password" 
                            variant="outlined" 
                            value={ password } 
                            onChange={ handlePasswordChange}/>
                    </div>
                    <div className="button__group">
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button type="submit">Login</Button>
                            <Button>Cancel</Button>
                        </ButtonGroup>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login