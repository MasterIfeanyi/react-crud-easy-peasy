import React from 'react'
import {useStoreActions, useStoreState} from "easy-peasy"
import Item from "./Item"


const Posts = () => {

    const fetchPosts = useStoreActions(actions => actions.posts.fetchPosts)

    const posts = useStoreState(({posts}) => posts.lists)

    const deletePosts = useStoreActions(({posts}) => posts.deletePosts)


    console.log(JSON.stringify(posts))

    return (
        <>
            <section className="section">
                <div className="cont">
                    <div className='fetchBtn'>
                        <button className="btn btn-primary" onClick={fetchPosts}>Fetch</button>
                    </div>
                    {posts.map((post, index) => <li key={index}>{<Item deletePosts={deletePosts} post={post} idx={index} />}</li>)}
                </div>
            </section>
        </>
    )
}

export default Posts