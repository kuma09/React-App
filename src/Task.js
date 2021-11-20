import {Link} from 'react-router-dom'
const Task = () => {
    return (
        <div className="task">
            <button className="but3">{<Link className="l1" to="/Home">HOME PAGE</Link>}</button>
            <button className="but2">{<Link className="l1" to="/Addtask">ADD New TASK</Link>} </button>
        </div>
      );
}
 
export default Task;