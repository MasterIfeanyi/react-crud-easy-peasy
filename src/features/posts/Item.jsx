import React from 'react'
import {Link} from "react-router-dom"

const Item = ({post, deletePosts}) => {
  
  return (
    <>
      <div className="cont">
          <div className="item">
              <p>
                {post.text}
              </p>
              <div className='buttons'>
                <button className="btn btn-danger" onClick={() => deletePosts({ id: post.id})}>Delete</button>
                <Link to={`/edit/${post.id}`}><button className="btn btn-primary">Edit</button></Link>
              </div>
          </div>
      </div>

      {!post &&
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing.</p>
          <p>
            <Link to='/'>Visit Our Homepage</Link>
          </p>
        </>
      }
    </>
  )
}

export default Item