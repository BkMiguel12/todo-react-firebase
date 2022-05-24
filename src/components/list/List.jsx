import { Row, Col } from 'react-bootstrap';
import AddTask from '../AddTask/AddTask';
import './List.scss';

function List() {
    return (
        <Row className='todolist mx-0'>
            <Col 
                md={{ span: 8, offset: 2 }}
                className='todolist__title mt-4 py-4 text-center'
            >
                <h2 className='mb-0'>Today</h2>
            </Col>

            <Col 
                md={{ span: 8, offset: 2 }}
                className='todolist__list mt-2 text-center'
            >
                <p>Lista de tareas</p>
            </Col>

            <Col 
                md={{ span: 8, offset: 2 }}
                className='todolist__input mt-2 px-0 text-center'
            >
                <AddTask />
            </Col>
        </Row>
    )
}

export default List;