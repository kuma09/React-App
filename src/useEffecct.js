import { useState,useEffect } from "react"
const useEffecct = (url) => {
    const [tasks,setTasks] = useState(null)
    const [download,setDownload] = useState(true)
    const [erreur,setErreur] = useState(null) 

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok) {
                throw Error('there is  problem in getting data from the server')
            }
            return res.json()
        })
        .then(data => {
            setTasks(data)
            setDownload(false)
            setErreur(null)
        })
        .catch(err =>{
            setDownload(false)
            setErreur(err.message)})
    },[url])

    return (
        {tasks,download,erreur}

      );
}
 
export default useEffecct;