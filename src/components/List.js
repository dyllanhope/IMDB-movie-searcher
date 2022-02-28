import React from 'react';
import { Stack } from 'react-bootstrap';

const CustomList = props => {

    // Function passed through from parent to trigger the modal once an item is selected
    const handleSelect = (item) => {
        props.choice(item);
    }

    return (
        <Stack gap={2} className="list-scroll col-md-5 mx-auto">
            {props.results.map((item, idx) => (
                <div key={idx} onClick={() => handleSelect(item)}>
                    <Stack className='list-item' direction="horizontal" gap={3}>
                        <img className='thumb' variant="top" src={item.Poster} />
                        <Stack>
                            <h4>{item.Title}</h4>
                            <p>Release year: {item.Year}</p>
                        </Stack>
                    </Stack>
                    <hr />
                </div>
            ))}
        </Stack>
    );
}

export default CustomList