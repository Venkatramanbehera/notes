import React from 'react'
import { useSelector } from 'react-redux'
import NoteItem from './NoteItem'

import '../css/NotesContainer.css'

const NotesContainer = (props) => {

    const notes = useSelector((state) => {
        return state.notes 
    })

    return (
        <div className="notes__container">
            {
                notes.map((note) => {
                    return <NoteItem key={note._id} {...note}/>
                })
            }
        </div>
    )
}

export default NotesContainer
