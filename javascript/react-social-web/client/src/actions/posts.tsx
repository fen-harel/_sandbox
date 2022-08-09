import * as api from "../api"; // * = all


// Action Creators ~~> Return action. Action = obj with type returning a payload
export const getPosts = () => async (dispatch: any) => {
    try{
        const {data} = await api.fetchPosts(); // fetching posts

        dispatch({ type: "FETCH_ALL", payload: data}); // ~~> dispatch(action)

    } catch (error: any) {
        console.log(error.message)
    }
}