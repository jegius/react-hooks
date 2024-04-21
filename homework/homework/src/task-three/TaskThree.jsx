import React, {useState, useEffect, memo, useCallback} from 'react';
import './TaskThree.css';
import { debounce } from 'lodash';
// функция для получения данных с Mock API


const useFetch = ()=>{
    const [search, setSearch] = useState();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)

    const abortController = new AbortController()
    const fetchData = async (search) => {
        setLoading(true)
        try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?search=${search}`, {signal: abortController.signal});
         const answer = await response.json();
         
         return setPosts(answer)}
         catch(error){
            console.log(error)
         }
         finally{setLoading(false)}
    }

   let searchFunc = debounce((value)=>{
        setSearch(value)
    },1000)
    useEffect(()=>{fetchData(search)
    return()=>{
            abortController.abort()
    }},[search])
return {posts, loading, searchFunc}
}

export default function TaskThree() {

    let {posts, loading, searchFunc} = useFetch()

    return (
        <div className="TaskThree">
            <input type="text" onChange={(event) => searchFunc(event.target.value)} placeholder="Search posts"/>
            <h1>Posts</h1>
            <ul>
            {loading? (<p>loading...</p>):
            (posts.map(item => <li key={item.id}>{item.body}</li>))}
            </ul>
        </div>
    )
}