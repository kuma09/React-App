import Home from "./Home";
import { useHistory, useParams } from "react-router-dom";
const Tasks = ({tasks }) => {
    const history = useHistory()
    const id = useParams()
    const delTask = (e) => {
        fetch('http://localhost:8000/tasks/' + e.target.id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/Addtask')
        })
    }
    return ( 
        <div className="Tasks">
            <fieldset>
            {tasks.map(task =>(
            <fieldset className="div1" key={task.id}>
                <h1 className="h1">{task.game}</h1>
                <p className="p1">{task.dic}</p>
                <h3 className="h3">{task.comp}</h3>
                <button className="but4" onClick={delTask} id={task.id}>Delete Task</button>
            </fieldset>
  ))    }   </fieldset>
        </div>
     );
}
 
export default Tasks;