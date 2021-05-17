import actionTypes from '../actions/actionTypes';

const initialState = {
    blogNewsIsOpen: false,
    currentNewsId: null,
}

export default function blogNewsPage(state = initialState, action) {
    switch (action.type) {
        case actionTypes.BLOG_NEWS_PAGE_SHOW:
            return {
                ...state,
                blogNewsIsOpen: true,
                currentNewsId: action.id,
            };

        case actionTypes.BLOG_NEWS_PAGE_HIDE:
            return {
                ...state,
                blogNewsIsOpen: false,
                currentNewsId: null,
            };

        default:
            return state;
    }
}