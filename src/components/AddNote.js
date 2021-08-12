import { TextareaAutosize, TextField, Button } from '@material-ui/core'
import React, { useState} from 'react'
import { useDispatch } from 'react-redux'

import { addNewNotes } from '../action/noteAction'

import '../css/AddNotes.css'

const AddNote = (props) => {

    const dispatch = useDispatch()

    const [ title, setTitle ] = useState('')
    const [ body, setBody ] = useState('')

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeBody = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title : title,
            body : body
        }
        const formReset = () => {
            setTitle('')
            setBody('')
        }
        dispatch(addNewNotes(formData,formReset))
    }

    return (
        <div className="addNote__form">
            <form onSubmit={ handleSubmit }>
                <div className="form__title">
                    <TextField 
                        style={{ width:'400px',marginBottom:'20px'}}
                        label="Title" 
                        variant="outlined" 
                        value={ title }
                        onChange={ handleChangeTitle}
                    />
                </div>
                <div className="form__textarea">
                    <TextareaAutosize
                        style={{ width:'390px', marginBottom:'20px'}}
                        minRows={6}
                        placeholder="Body"
                        value={ body }
                        onChange = { handleChangeBody }
                    />
                </div>
                <div className="note__button">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{ width:'200px', marginLeft:'80px'}}
                        type="submit">Save</Button>
                </div>
            </form>
        </div>
    )
}

export default AddNote
