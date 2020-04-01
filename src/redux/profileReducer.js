const ADD_POST = 'ADD-POST';
const UPDATE_POST_AREA = 'UPDATE-POST-AREA';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hola! Como esta?', likeCount: 23},
        {id: 2, message: 'Que pasa aqui?', likeCount: 12},
        {id: 3, message: 'Vamos a la plalla', likeCount: 50},
        {id: 4, message: 'Quiero salir a calle!', likeCount: 2}
    ],
    textAreaValue: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return  {
                ...state,
                posts: [...state.posts, {id: 5, message: state.textAreaValue, likeCount: 0}],
                textAreaValue:''
            };
        }
        case UPDATE_POST_AREA: {
            return {
                ...state,
                textAreaValue: action.postMessage
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default: return state;
    }
};

// Action creators. Создает экшены для вызова функций Profile
export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updatePostArea = (text) => ({type: UPDATE_POST_AREA, postMessage: text});

export default profileReducer;