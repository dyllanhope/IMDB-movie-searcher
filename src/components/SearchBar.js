import React, { useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';



const SearchForm = (props) => {

    const [value, setValue] = useState("");

    // Handles the state change as the text box is being changed in order to gather the users search string
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    // handles the submit request from the form using a function passed down by the parent component "Home"
    const handleSubmit = (e) => {
        props.searchValue(value)
        e.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="basicSearch">
                <Form.Control type="text" placeholder="eg. Lord of the Rings" onChange={handleChange} />
            </Form.Group>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Button className='text-center' variant="outline-light" type="submit" >
                            Submit
                        </Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </Form>
    );
}

export default SearchForm;