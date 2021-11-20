import Tasks from './Tasks'
import useEffecct from './useEffecct'
import useEffect from './useEffecct'
const Home = () => {
    const {tasks,download,erreur} = useEffect('http://localhost:8000/tasks')
    
    return (
        <div className="Home">
            <h1 className="block">Block of games </h1>
            {erreur && <div>{erreur}</div>}
            {download && <div>Loading </div>}
            {tasks && <Tasks tasks={tasks}/>}
        </div>

      );
}
 
export default Home;