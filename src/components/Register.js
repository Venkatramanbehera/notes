import React, { useState }  from 'react'

import { Button, TextField, ButtonGroup } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import swal from 'sweetalert'

import { isRegister, registerError } from '../action/userAction'

import '../css/Register.css'

const Register = (props) => {

    const stateError = useSelector( state => {
        return state.user.error 
    })

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

        axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
            .then( (response) => {
                const data = response.data
                
                if(data.createdAt){
                    dispatch(isRegister(true))
                    resetForm()
                    swal("Registration Successful!", "plz click the button!", "success")
                    props.history.push('/login')
                }else if(data.errors){
                    dispatch(registerError(data.errors))
                }
            })
            .catch(err => alert(err)) 
    }

    const handleCancel = () => {
        props.history.push('/')
    }


    return (
        <div className="register">

            <h1>Register With Us</h1>

            <div className="form" autoComplete="off">
                <form onSubmit={ handleSubmit }>
                    <div className="form__username">
                        <TextField 
                            error = { stateError.username ? true : false}
                            style={{ width:'400px'}}
                            label="Enter User Name" 
                            type = "text"
                            variant="outlined" 
                            value={username} 
                            onChange={ handleUsername }
                            helperText = { stateError.username ? stateError.username.message : '' }
                             /> 
                    </div>
                    <div className="form__email">
                        <TextField 
                            error = { stateError.email ? true : false}
                            label="Enter Email" 
                            type = "email"
                            style={{ width:'400px'}}
                            variant="outlined" 
                            value = {email} 
                            onChange={ handleEmail}
                            helperText = { stateError.email ? stateError.email.message : '' }
                             />
                    </div>
                    <div className="form__password">
                        <TextField 
                            error = { stateError.password ? true : false}
                            label="Enter Password" 
                            type="password"
                            style={{ width:'400px'}}
                            variant="outlined" 
                            value={password}
                            onChange={ handlePassword} 
                            helperText = { stateError.password ? stateError.password.message : '' }
                            />
                    </div>
                    <div className="form__button">
                        <ButtonGroup 
                            color="primary" 
                            aria-label="outlined primary button group">
                            <Button type="submit">Register</Button>
                            <Button onClick={ handleCancel }>Cancel</Button>
                        </ButtonGroup>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
