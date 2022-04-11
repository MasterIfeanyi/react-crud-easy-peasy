import React, {useState } from 'react'
import { Link } from "react-router-dom"
import { useStoreActions } from "easy-peasy"
import { format } from 'date-fns';
import { v4 as uuid } from "uuid";


const Create = () => {

  const savePost = useStoreActions((actions) => actions.posts.savePost)

  const [text, setText] = useState("");

  const handleSubmit = (text) => {
    if (!text) return 
    const id = uuid()
    const dateTime = format(new Date(), 'MMMM, dd')
    const newData = {id, day: dateTime, reminder: false, text }
    console.log(newData)
    savePost(newData)
    setText("")
  }


  return (
    <>
      <main className="section">
        <div className="cont">
          <div className="d-flex justify-content-around align-items-center mt-3 mb-0">
            <p>Create</p>
            <Link to={`/posts`}>
              <button className="btn btn-primary">View all</button>
            </Link>
          </div>
          <form action="" className="form" onSubmit={(e) => e.preventDefault()}>        
            <div className="form-group">
              <label htmlFor="text">Text</label>
              <textarea
                type="text"
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="form-control"
                required />
            </div>
            <button onClick={() => handleSubmit(text)} className="btn btn-primary">Save</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default Create
