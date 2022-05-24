import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import List from './components/list/List';

import './App.scss';

function App() {

  return (
    <Container fluid className='px-0'>
      <Header />
      <List />
    </Container>
  )
}

export default App
