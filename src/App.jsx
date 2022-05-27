import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import List from './components/list/List';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.scss';

function App() {

  const showToast = () => {
    console.log('hola xd  ');
    toast.success('HOOOOLA');
  }

  return (
    <Container fluid className='px-0'>
      <Header />
      <List />
      <ToastContainer autoClose={2000} />
    </Container>
  )
}

export default App
