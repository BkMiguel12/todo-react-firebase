import { ReactComponent as Check } from '../../assets/check.svg';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import './Task.scss';

function Task(props) {
    const { task } = props;
    
    return (
        <div className='task'>
            <div className='task__check'>
                <Check />
            </div>
            <div className='task__text'>
                {task.name}
            </div>
            <div className='task__delete'> 
                <Delete />
            </div>
        </div>
    )
}

export default Task;