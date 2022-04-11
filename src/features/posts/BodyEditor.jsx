import React, {useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { useStoreState, useStoreActions } from "easy-peasy"


const BodyEditor = () => {

    const { id } = useParams();
    const navigate = useNavigate()
   
    const getPostById = useStoreState((state) => state.posts.getPostById)
    const post = getPostById(id);
    const setEditPost = useStoreActions((actions) => actions.posts.setEditPost)
    const updatePost = useStoreActions((actions) => actions.posts.updatePost)
    const editPost = useStoreState((state) => state.posts.editPost)

    const handleSubmit = async (id) => {
        const editData = { ...post, text: editPost }
        await updatePost(editData)
        navigate(`/posts`)
    }


    useEffect(() => {
        if (post) {
            setEditPost(post.text)
        }
    }, [post, setEditPost])

    return (
        <>
            <section className="section">
                <main className='cont'>
                    {id &&
                        <form action="" className="form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="text">Text</label>
                                <textarea type="text" className="form-control" required value={editPost} onChange={(e) => setEditPost(e.target.value)} />
                            </div>
                            <button onClick={() => handleSubmit(id)} className="btn btn-primary">Save</button>
                        </form>
                    }
                </main>
            </section>     
        </>
    )
}

export default BodyEditor