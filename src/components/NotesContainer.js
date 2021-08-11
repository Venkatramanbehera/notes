import React from 'react'
import { useSelector } from 'react-redux'
import NoteItem from './NoteItem'

const NotesContainer = (props) => {

    const notes = useSelector((state) => {
        return state.notes 
    })

    return (
        <div>
            <h2>Notes Container </h2>
            {
                notes.map((note) => {
                    return <NoteItem key={note._id} {...note}/>
                })
            }
        </div>
    )
}

export default NotesContainer
