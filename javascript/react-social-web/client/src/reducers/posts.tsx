export default (posts = [], action: any) => { // posts = state, state = []
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload; // payload ~~> posts/,
        case "CREATE":
            return posts;
        default:
            return posts;
    }
}