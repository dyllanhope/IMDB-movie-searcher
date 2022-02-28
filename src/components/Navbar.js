import { navbar } from '../App.css';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { ToggleButton, Navbar, Container, Nav, ButtonGroup } from 'react-bootstrap';

const NavBar = () => {

  const toggleView = useStoreActions(actions => actions.toggleItem);
  const toggled = useStoreState((state) => state.toggled);

  // toggles the radio button in order to allow the user to switch easily between card and list view of movies
  const setRadioValue = () => {
    toggleView();
  }

  return (
    <Navbar className='navbar' bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#/">Movie Searcher</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/Favourites">Favourites</Nav.Link>
            <Nav.Link href="#/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <ButtonGroup>
              <ToggleButton
                type="radio"
                variant='outline-info'
                name="Cards"
                value="Cards"
                checked={toggled === true}
                onClick={setRadioValue}
              >
                Cards
              </ToggleButton>
              <ToggleButton
                type="radio"
                variant='outline-dark'
                name="List"
                value="List"
                checked={toggled === false}
                onClick={setRadioValue}
              >
                List
              </ToggleButton>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;

