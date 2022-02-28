import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import CustomCard from '../components/Card';
import CustomModal from '../components/Modal';
import CustomList from '../components/List';
import { useStoreState } from 'easy-peasy';
import { ArrowLeftSquareFill } from 'react-bootstrap-icons';

const Home = () => {
    const [searched, setSearched] = useState(false);
    const [movieData, setMovieData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [searchValue, setSearchValue] = useState({});
    const [imdbIDVal, setImdbIDVal] = useState("");

    // Fetches actions and current persisted state of the favourites and toggle items
    const toggled = useStoreState((state) => state.toggled);

    // Executes the respective API calls depending on a search or a selection of movie
    useEffect(() => {
        fetchSearchData()
        fetchSelectedData()
    }, [searchValue, imdbIDVal]);

    const RenderModal = () => {
        return <CustomModal showModal={showModal} selectedItem={selectedItem} setShowModal={setShowModal} />
    }

    // Activates the modal and sets the ID value of the chosen movie
    const DisplayModalOfResult = (e) => {
        setImdbIDVal(e.imdbID);
        setShowModal(true);
    }

    const retrieveSearchValue = (searchString) => {
        setSearchValue(searchString);
    }

    // Fetches the data once a movie item has been selected for more detail on the movie
    const fetchSelectedData = () => {
        if (imdbIDVal.length > 0) {
            fetch("https://imdb-data-searching.p.rapidapi.com/om?i=" + imdbIDVal, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "imdb-data-searching.p.rapidapi.com",
                    "x-rapidapi-key": "1746dbabe9msh29a4d677197bc80p14ca87jsnc73bd4ae9d2d"
                }
            })
            .then(response => response.json())
            .then(data => setSelectedItem(data))
        }
    }


    // Fetches the data once search result has been obtained
    const fetchSearchData = () => {
        if (searchValue.length > 0) {
            fetch("https://imdb-data-searching.p.rapidapi.com/om?s=" + searchValue, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "imdb-data-searching.p.rapidapi.com",
                    "x-rapidapi-key": "1746dbabe9msh29a4d677197bc80p14ca87jsnc73bd4ae9d2d"
                }
            })
            .then(response => response.json())
            .then(data => setMovieData(data.Search))
            .then(() => setSearched(true))
        }
    }

    // Displays choice of card or list display after being toggled in Navbar
    const renderToggle = () => {
        if (toggled) {
            return <CustomCard choice={DisplayModalOfResult} results={movieData} />
        } else {
            return <CustomList choice={DisplayModalOfResult} results={movieData} />
        }
    }

    // Renders the search results and the search bar, switches between during process so users can have more screen
    // space when viewing movie options
    const renderSearchResults = () => {
        if (searched) {
            return (
                <Stack gap={2} className="col-md-12 mx-auto">
                    <ArrowLeftSquareFill size={30} className='icon' onClick={() => setSearched(false)} />
                    <h3 className='heading'>
                        The results for "{searchValue}"
                    </h3>
                    {renderToggle()}
                </Stack>
            );
        } else {
            return (
                <Row className='vertical-center'>
                    <Col>
                        <h1 className='heading'>
                            Search for a movie
                        </h1>
                        <SearchBar searchValue={retrieveSearchValue} />
                    </Col>
                </Row>

            );
        }
    }

    return (
        <Container className='result-container'>
            {renderSearchResults()}
            {RenderModal()}
        </Container>
    );
};

export default Home;