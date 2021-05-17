import actions from './actionTypes';

export default function openBlogNewsPage(id) {
    return (dispatch) => {
        dispatch({
            type: actions.BLOG_NEWS_PAGE_SHOW,
            id: id,
        });
    };
}