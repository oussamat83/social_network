import { GET_ALL_POSTS } from "../actions/post.actions";

const initialeState = {};

export default function allPostsReducer(state = initialeState, action) {
    switch (action.type) {
        case GET_ALL_POSTS:
            return action.payload;
        default:
            return state;
    }
}
