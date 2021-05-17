import {connect} from "react-redux";
import data from '../../data/blogNewsDada.json';

import hideBlogNewsPage from "../../store/actions/hideBlogNewsPage";

import post0 from '../../img/post0.png';
import post1 from '../../img/post1.png';
import post2 from '../../img/post2.png';
import post3 from '../../img/post3.png';
import post4 from '../../img/post4.png';
import post5 from '../../img/post5.png';
import post6 from '../../img/post6.png';
import post7 from '../../img/post7.png';

import './BlogNewsPage.scss';

const mapStateToProps = (state) => ({
    currentNewsId: state.blogNewsPage.currentNewsId,
});

const mapDispatchToProps = (dispatch) => {
    return {
        hideBlogNewsPage: (blogNewsId) => dispatch(hideBlogNewsPage(blogNewsId))
    };
};

function BlogNewsPage(props) {

    const {
        currentNewsId,
        hideBlogNewsPage,
    } = props;

    return (
        <div className={'blog-news-page'}>
            {currentNewsId && (
                <div className={'blog-news-page__content'}>
                    <div className={'blog-news-page__button'}
                    onClick={hideBlogNewsPage}
                    >
                        Назад к блогу
                    </div>
                    <div className={'blog-news-page__part blog-news-page__part_left'}>
                        <div className={'blog-news-page__header'}>
                            {data[currentNewsId].title}
                            {/*{data[0].title}*/}
                        </div>
                        <div className={'blog-news-page__text'}>
                            {data[currentNewsId].content}
                            {/*{data[0].content}*/}
                        </div>
                    </div>
                    <div className={'blog-news-page__part blog-news-page__part_right'}>
                        <div className={'blog-news-page__img'}>
                            {/*<img src={data[currentNewsId].img} alt={data[currentNewsId].shortTitle}/>*/}
                            <img src={post0} alt={data[0].shortTitle}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogNewsPage);
