import React from 'react'

export default function Card(post) {
  return (
    <div className="card my-3">
      {post.img ? 
        <img className='card-img-top' src={post.img}/> : ""
      }
      <div className='card-body'> 
        <h4 className='card-title'> 
          <a href='#'>{post.title} </a>
        </h4> 
        <p className='card-text'> {post.content} </p>
        <a href={post.link ? post.link : ""} class="btn btn-primary" target="blank" >see more</a>
      </div>
    </div>
  )
}