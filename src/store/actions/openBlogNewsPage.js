import actions from './actionTypes';
import data from '../../data/blogNewsDada.json';

export default function openBlogNewsPage(id) {
    console.log('openBlogNewsPage')
    console.log('action id', id)

    return (dispatch) => {
        dispatch({
            type: actions.BLOG_NEWS_PAGE_SHOW,
            id: id,
        });
    };
}