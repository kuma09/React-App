import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Addtask = () => {
    const [game,setGame]=useState('')
    const [dic,setDic]=useState('')
    const [comp,setComp]=useState('')
    const [addingtask,setAddingTask] = useState(false)
    const history = useHistory()

    const Submit = (e) => {
        e.preventDefault()
       const task = {game,dic,comp}
       setAddingTask(true)
       fetch('http://localhost:8000/tasks',
       {method:'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(task)})
        .then(()=>{console.log("new task added");
        setAddingTask(false);
        history.push('/Home')})
        
        
    }
    return ( 
        <div className="addtask">
            <h2 className="add">Add New Task</h2>
            <form onSubmit={Submit}> 
            <input type="text" className="text1" required placeholder="enter ur game's name" value={game} onChange={(e)=>setGame(e.target.value)}/>
            <br/>    <br/> <br/>       
            <textarea className="text2" required placeholder="dic ur game" value={dic} onChange={(e)=>setDic(e.target.value)}></textarea>
            <br/> <br/>
            <input className="text3" type="text"  required placeholder="enter ur game's comp" value={comp} onChange={(e)=>setComp(e.target.value)}/>
            <br/> <br/>
            {!addingtask && <button className="button2" >AddTask</button>}
            {addingtask && <button className="button2" >AddingTask ...</button>}
            </form>
        </div>
     );
}
 
export default Addtask;