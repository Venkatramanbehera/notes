import React, { useState }  from 'react'

import { Button, TextField, ButtonGroup } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { postData } from '../action/userAction'

const Register = (props) => {

    const dispatch = useDispatch() 

    const [ username, setUserName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleUsername = (e) => {
        setUserName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const redirectToLogin = () => {
        props.history.push('/login')
    }

    const handleSubmit= (e) => {
        e.preventDefault()
        const formData = {
            username : username,
            password : password,
            email : email
        }
        const resetForm = () => {
            setPassword('')
            setUserName('')
            setEmail('')
        }
        dispatch(postData(formData,resetForm,redirectToLogin))
    }

    const userIsRegister = useSelector((state) => {
        return state.user.isRegister
    })

    return (
        <div>
            <div>
                {
                    userIsRegister && <div><h1> user Register Successfully </h1>{  } </div>
                }
            </div>
            <h1>Register With Us</h1>

            <div className="form" autoComplete="off">
                <form onSubmit={ handleSubmit }>
                    <div className="form__username">
                        <TextField 
                            id="outlined-basic" 
                            label="Enter User Name" 
                            variant="outlined" 
                            value={username} 
                            onChange={ handleUsername } /> 
                    </div>
                    <div className="form__email">
                        <TextField 
                            id="outlined-basic" 
                            label="Enter Email" 
                            variant="outlined" 
                            value = {email} 
                            onChange={ handleEmail} />
                    </div>
                    <div className="form__password">
                        <TextField 
                            id="outlined-basic" 
                            label="Enter Password" 
                            variant="outlined" 
                            value={password}
                            onChange={ handlePassword} />
                    </div>
                    <div className="form__button">
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button type="submit">Register</Button>
                            <Button>Cancel</Button>
                        </ButtonGroup>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
