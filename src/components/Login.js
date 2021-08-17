import React from 'react'

import { TextField, ButtonGroup,Button } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { asynclogin } from '../action/userAction'

import '../css/Login.css'

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
        const redirectToHome = () => {
            props.history.push('/')
        }
        const resetForm = () => {
            setPassword('')
            setEmail('')
        }
        dispatch(asynclogin(formData,resetForm,redirectToHome))
    }

    const handleCancel = () => {
        props.history.push('/')
    }

    return (
        <div className="login">
            <h1>Login To Your Account </h1>
            <div className="form__login">
                <form onSubmit={ submitForm }>
                    <div className="email">
                        <TextField 
                            label="Your Email" 
                            style={{ width:'400px'}}
                            variant="outlined" 
                            type = "text"
                            value={ email } 
                            onChange={ handleEmailChange } />
                    </div>
                    <div className="password">
                        <TextField 
                            label="Password" 
                            variant="outlined" 
                            type = "password"
                            style={{ width:'400px'}}
                            value={ password } 
                            onChange={ handlePasswordChange}/>
                    </div>
                    <div className="button__group">
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button type="submit">Login</Button>
                            <Button onClick={ handleCancel }>Cancel</Button>
                        </ButtonGroup>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
