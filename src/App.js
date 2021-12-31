/* eslint-disable */
import './App.css';
import {Navbar, Nav, NavDropdown, Container, Card} from 'react-bootstrap'
import {useState} from 'react';
import data from './data';
import {Link, Route, Switch} from 'react-router-dom'
import Detail from './Detail';

function App() {

    let [shoes, shoes변경] = useState(data)

    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>

                    <Navbar.Brand>
                        <Link to='/' exact="exact">ShoeShop</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/Detail'>detail</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route exact="exact" path='/'>
                    <Card className='background'>
                        <Card.Body>
                            <h1>This is some text within a card body.</h1>
                        </Card.Body>
                    </Card>
                    <div className='container'>
                        <div className='row'>
                            {
                                shoes.map((a, i) => {
                                    return <Box shoes={shoes[i]} i={i} />
                                })
                            }
                        </div>
                    </div>
                </Route>
                <Route path='/detail/:id'>
                    <Detail shoes={shoes}/>

                </Route>

                <Route path='/:id'>
                    <div>아무거나~</div>
                </Route>
            </Switch>
        </div>
    );
}

function Box(props) {
    return (
        <div className='col-md-4'>
            <img
                src={'http://codingapple1.github.io/shop/shoes' + (
                    props.i + 1
                ) + '.jpg'}width='100%'/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}</p>

        </div>
    )
}

export default App;
