import React,{ useState } from 'react'

import { useDispatch } from 'react-redux'
import { removeNote } from '../action/noteAction'

import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddNote from './AddNote';

const NoteItem = (props) => {

    const { title, body, _id } = props

    const [ isEdit, setIsEdit ] = useState(false)

    const dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeNote(_id))
    }

    const toggleEdit = () => {
        setIsEdit(!isEdit)
    }
    return (
        <>
            {
                isEdit ? <AddNote toggleEdit={toggleEdit} title={ title } body={ body } _id={_id} />: (
                    <Card style={{ margin:'10px', height:'200px', width:'250px',textAlign:'center',color:"blueviolet",backgroundColor:"lightgrey"}}>
                    <CardContent>
                        <Typography>{ title }</Typography>
                        <Typography>{ body }</Typography>
                    </CardContent>
                    <CardActions style={{ margin:'40px'}}>
                        <Button variant="contained" color="secondary" onClick={ handleRemove }><DeleteIcon/></Button>
                        <Button variant="contained" color="secondary" onClick={ toggleEdit }><EditIcon/></Button>
                    </CardActions>
                    </Card>
                )
            }
        </>
        
    )
}

export default NoteItem
