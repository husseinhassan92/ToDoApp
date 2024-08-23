import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddTodo = ({ addTodo }) => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const addTodoHandler = e => {
		e.preventDefault()
		if (title.trim().length !== 0) {
			addTodo({
				title,
				description,
				completed: false,
			})
			setTitle('')
			setDescription('')
		}
		
		//console.log(title, description)
	}

	return (
		<Form>
			<Form.Group controlId='title'>
			  <Form.Label>Title</Form.Label>
			  <Form.Control type='text' placeholder='Enter Todo Title' value={title} onChange={e => setTitle(e.target.value)} />
			</Form.Group>

			<Form.Group controlId='description'>
			  <Form.Label>Description</Form.Label>
			  <Form.Control type='text' placeholder='Enter Description' value={description} onChange={e => setDescription(e.target.value)} />
			</Form.Group>

			<Button className='mt-2' variant='primary' type='submit' onClick={addTodoHandler}>Add Todo</Button>
		</Form>
	)
}

export default AddTodo