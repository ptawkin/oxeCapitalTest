import actions from './actionTypes';

export default function hideBlogNewsPage() {
    return (dispatch) => {
        dispatch({
            type: actions.BLOG_NEWS_PAGE_HIDE,
        });
    };
}