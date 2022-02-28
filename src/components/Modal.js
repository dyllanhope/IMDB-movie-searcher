import { Row, Col, Modal, Button } from 'react-bootstrap';
import { useStoreState, useStoreActions } from 'easy-peasy';


const CustomModal = (props) => {

    // Fetches the favourites as well as the 
    const favourites = useStoreState((state) => state.favourites);
    const addToFavourites = useStoreActions(actions => actions.addItem);
    const removeFromFavourites = useStoreActions(actions => actions.removeItem);

    // Renders different versions of the render button depending on whether a movie is already favourited or not
    const setFavouriteButton = () => {
        let isFound = false;
        favourites.forEach(item => {
            if (item.imdbID == props.selectedItem.imdbID) {
                isFound = true;
            }
        });

        if(isFound){
            return <Button variant="danger" onClick={() => removeFromFavourites(props.selectedItem)}>Remove from Favourites</Button>
        } else {
            return <Button variant="success" onClick={() => addToFavourites(props.selectedItem)}>Add to Favourites</Button>
        }
    }
    return (
        <Modal
            show={props.showModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className='modal-colour'
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.selectedItem.Title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <img src={props.selectedItem.Poster}></img>
                    </Col>
                    <Col></Col>
                    <Col>
                        <p> <p className='extra-info'>Cast:</p> {props.selectedItem.Actors}</p>
                        <p> <p className='extra-info'>Genres:</p> {props.selectedItem.Genre}</p>
                        <p> <p className='extra-info'>Languages:</p> {props.selectedItem.Language}</p>
                    </Col>
                </Row>
                <Row>
                    <hr style={{ marginTop: '5px' }}></hr>
                    <p>
                        {props.selectedItem.Plot}
                    </p>
                </Row>
                <Row>
                    <Col><p> <p className='extra-info'>Rated:</p> {props.selectedItem.Rated}</p></Col>
                    <Col><p> <p className='extra-info'>Released:</p> {props.selectedItem.Released}</p></Col>
                    <Col><p> <p className='extra-info'>Runtime:</p> {props.selectedItem.Runtime}</p></Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                {setFavouriteButton()}
                <Button onClick={() => props.setShowModal(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomModal;