import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
    const posts = useSelector((state: RootStateOrAny) => state.posts);
    const classes = useStyles();

    console.log(posts);
    
    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts;