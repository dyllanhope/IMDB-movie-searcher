import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import CustomCard from '../components/Card';
import CustomList from '../components/List';
import { useStoreState, useStoreActions } from 'easy-peasy';
import CustomModal from '../components/Modal';
import { Container, Row, Col } from 'react-bootstrap';


const Favourites = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const favourites = useStoreState((state) => state.favourites);
  const toggled = useStoreState((state) => state.toggled);

  // trigger to show modal once a movie has been selected for more detail
  const DisplayModalOfResult = (movie) => {
    setSelectedItem(movie);
    setShowModal(true);
}

// Renders the movies in a card of List format depending on the toggle selection in the navbar
const renderToggle = () => {
  if(toggled){
      return <CustomCard choice={DisplayModalOfResult} results={favourites} />
  } else {
      return <CustomList choice={DisplayModalOfResult} results={favourites} />
  }
}

  return (
    <Container>
      <Row>
        <Col>
          <h1 className='heading'>Favourites</h1>
          {renderToggle()}
        </Col>
      </Row>
      <CustomModal showModal={showModal} selectedItem={selectedItem} setShowModal={setShowModal}/>
    </Container>
  );
}

export default Favourites;
