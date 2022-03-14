import React ,{useState,useEffect }from 'react'
import axios  from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'


export default ()=>{
      const [posts,setPosts]=useState({})
     const fetchPosts = async ()=>{

         const resp = await axios.get('http://my-sample-blog-kannan.xyz/posts')
         console.log(resp.data)
         setPosts(resp.data)
        }
        useEffect(()=>{
           fetchPosts()
        },[]);

       // console.log(posts)
        const renderedPosts= Object.values(posts).map(p=>{
            return (
                 <div className='card'
                 key={p.id} 
                 style={{width:'30%',marginBotton:'20px'}}>
                      <div className='card-body'>
                              <h3>{p.title}</h3>
                              <CommentList comments={p.comments} />
                              <CommentCreate postId={p.id}/>
                              
                      </div>
                 </div>
            )
        })


    return (<div className='d-flex flex-row flex-wrap justify-content-between'>

         {renderedPosts}
    </div>)
}