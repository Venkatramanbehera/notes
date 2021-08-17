import { TextareaAutosize, TextField, Button } from '@material-ui/core'
import React, { useState} from 'react'
import { useDispatch } from 'react-redux'

import { asyncAddNotes, asyncUpdateNote } from '../action/noteAction'

import '../css/AddNotes.css'

const AddNote = ({toggleEdit,title:editTitle, body:editBody, _id}) => {

    const dispatch = useDispatch()

    const [ title, setTitle ] = useState(editTitle ? editTitle : '')
    const [ body, setBody ] = useState(editBody ? editBody : '')

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
        if(_id){
            dispatch(asyncUpdateNote(formData,_id,toggleEdit))
        }else{
            dispatch(asyncAddNotes(formData,formReset))
        }
    }

    return (
        <div className="addNote__form">
            <form onSubmit={ handleSubmit }>
                <div className="form__title">
                    <TextField 
                        style={{ width:'300px',marginBottom:'20px'}}
                        label="Title" 
                        variant="outlined" 
                        value={ title }
                        onChange={ handleChangeTitle}
                    />
                </div>
                <div className="form__textarea">
                    <TextareaAutosize
                        style={{ width:'290px', marginBottom:'20px'}}
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
                        style={{ marginRight : '10px'}}
                        type="submit">Save
                    </Button>
                    {
                    toggleEdit && 
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            onClick={ () => { toggleEdit() }}
                            type="submit">cancel
                        </Button>
                    }
                </div>
                
                
            </form>
        </div>
    )
}

export default AddNote
