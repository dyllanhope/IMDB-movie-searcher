import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';

const CustomCard = (props) => {

    // Function passed through from parent to trigger the modal once an item is selected
    const handleSelect = (item) => {
        props.choice(item);
    }

    return (
        <Row xs={1} md={5} className="g-4">
            {props.results.map((item, id) => (
                <Col key={id} onClick={() => handleSelect(item)}>
                    <Card className='card-hover card-gap'  >
                        <div >
                            <img className='thumb image' variant="top" src={item.Poster} />
                            <div className='middle'>
                                <div className='text'>
                                    {item.Title}
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default CustomCard