import React,{useState} from 'react'
import axios from 'axios'

export default ()=> {
   const btnText ="submit"
    let [title,setTitle] =useState('post1')
    const onSubmitHandler = async (event)=>{
        event.preventDefault()
        await axios.post('http://posts.com/posts/create',{
            title
        })

       // setTitle('')
       //title=''
       setTitle('')
    }
     return (
         <div>
            {title}
          <form onSubmit={onSubmitHandler}>
               <div className='form-group'>
                     <label>Title</label>
                     <input type="text" 
                     value={title}
                     onChange={e=>setTitle(e.target.value)}
                     className="form-control"/>
               </div>
                <button className='btn btn-primary'>
                     {btnText}
               </button>
          </form>

         </div>

     )

}