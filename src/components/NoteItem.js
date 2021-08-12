import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeNote } from '../action/noteAction'

const NoteItem = (props) => {
    const dispatch = useDispatch()
    const { title, body, _id } = props

    const handleRemove = () => {
        dispatch(removeNote(_id))
    }
    return (
        <Card style={{ margin:'10px', height:'200px', width:'300px',textAlign:'center'}}>
            <CardContent>
                <Typography>{ title }</Typography>
                <Typography>{ body }</Typography>
            </CardContent>
            <CardActions style={{ margin:'40px'}}>
                <Button variant="contained" color="secondary" onClick={ () => handleRemove() }>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default NoteItem
