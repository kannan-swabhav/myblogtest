import React from 'react'


export default ({comments})=>{
   
     const rednerCmmednts =comments.map(c=>{
           return  <li key={c.commentId}>{c.content}
                 </li>;
           
     });
    return (<ul>
          {rednerCmmednts}

      </ul>)
}
