import {connect} from 'react-redux';
import React from "react";
import classnames from 'classnames';

import data from '../../data/blogNewsDada.json';

import openBlogNewsPage from '../../store/actions/openBlogNewsPage';

import post0 from '../../img/post0.png';
import post1 from '../../img/post1.png';
import post2 from '../../img/post2.png';
import post3 from '../../img/post3.png';
import post4 from '../../img/post4.png';
import post5 from '../../img/post5.png';
import post6 from '../../img/post6.png';
import post7 from '../../img/post7.png';

import './Blog.scss';
import BlogNewsPage from "../BlogNewsPage/BlogNewsPage";


const mapStateToProps = (state) => ({
    blogNewsIsOpen: state.blogNewsIsOpen,
    currentNewsId: state.currentNewsId,
});

const mapDispatchToProps = (dispatch) => {
    return {
        openBlogNewsPage: (blogNewsId) => dispatch(openBlogNewsPage(blogNewsId))
    };
};

function Blog(props) {

    const {
        blogNewsIsOpen,
        openBlogNewsPage,
    } = props;

    console.log('blog props', props)

    const handleClick = React.useCallback((e) => {
        let item = e.target;
        let itemId;
        let blogElement;

        for (let i = 0; i < 3; i++) {
            if (!item.hasAttribute('data-id')) {
                item = item.parentNode;
            } else {
                itemId = item.getAttribute('data-id');
                blogElement = item.parentNode.parentNode.parentNode;
                break;
            }
        }

        if (itemId) {
            openBlogNewsPage(itemId);
            // blogElement.classList.add('blog_hide');
        }
    }, [])


    return (
        <div className={classnames('blog', {
            'blog_hide': blogNewsIsOpen === true,
        })}
        >
            <div className={'blog__items'}>
                <div className={'blog__col'}>
                    <div className={'blog__item'}
                         data-id={data[0].id}
                         onClick={handleClick}
                    >
                        <div className={'blog__item-img'}>
                            <img src={post0} alt={data[0].shortTitle}/>
                        </div>

                        <div className={'blog__item-info'}>
                            <div className={'blog__item-date'}>
                                {data[0].date}
                            </div>

                            <div className={'blog__item-title'}>
                                {data[0].shortTitle}
                            </div>
                        </div>
                    </div>

                    <div className={'blog__item'}
                         data-id={data[1].id}
                         onClick={handleClick}
                    >
                        <div className={'blog__item-img'}>
                            <img src={post1} alt={data[1].shortTitle}/>
                        </div>

                        <div className={'blog__item-info'}>
                            <div className={'blog__item-date'}>
                                {data[1].date}
                            </div>

                            <div className={'blog__item-title'}>
                                {data[1].shortTitle}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'blog__col'}>
                    <div className={'blog__item'}
                         data-id={data[2].id}
                         onClick={handleClick}
                    >
                        <div className={'blog__item-img'}>
                            <img src={post2} alt={data[2].shortTitle}/>
                        </div>

                        <div className={'blog__item-info'}>
                            <div className={'blog__item-date'}>
                                {data[2].date}
                            </div>

                            <div className={'blog__item-title'}>
                                {data[2].shortTitle}
                            </div>
                        </div>
                    </div>

                    <div className={'blog__item'}
                         data-id={data[3].id}
                         onClick={handleClick}
                    >
                        <div className={'blog__item-img'}>
                            <img src={post3} alt={data[3].shortTitle}/>
                        </div>

                        <div className={'blog__item-info'}>
                            <div className={'blog__item-date'}>
                                {data[3].date}
                            </div>

                            <div className={'blog__item-title'}>
                                {data[3].shortTitle}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'blog__col'}>
                    <div className={'blog__item'}
                         data-id={data[4].id}
                         onClick={handleClick}
                    >
                        <div className={'blog__item-img'}>
                            <img src={post4} alt={data[4].shortTitle}/>
                        </div>

                        <div className={'blog__item-info'}>
                            <div className={'blog__item-date'}>
                                {data[4].date}
                            </div>

                            <div className={'blog__item-title'}>
                                {data[4].shortTitle}
                            </div>
                        </div>
                    </div>

                    <div className={'blog__item'}
                         data-id={data[5].id}
                         onClick={handleClick}
                    >
                        <div className={'blog__item-img'}>
                            <img src={post5} alt={data[5].shortTitle}/>
                        </div>

                        <div className={'blog__item-info'}>
                            <div className={'blog__item-date'}>
                                {data[5].date}
                            </div>

                            <div className={'blog__item-title'}>
                                {data[5].shortTitle}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'blog__col'}>
                    <div className={'blog__item'}
                         data-id={data[6].id}
                         onClick={handleClick}
                    >
                        <div className={'blog__item-img'}>
                            <img src={post6} alt={data[6].shortTitle}/>
                        </div>

                        <div className={'blog__item-info'}>
                            <div className={'blog__item-date'}>
                                {data[6].date}
                            </div>

                            <div className={'blog__item-title'}>
                                {data[6].shortTitle}
                            </div>
                        </div>
                    </div>

                    <div className={'blog__item'}
                         data-id={data[7].id}
                         onClick={handleClick}
                    >
                        <div className={'blog__item-img'}>
                            <img src={post7} alt={data[7].shortTitle}/>
                        </div>

                        <div className={'blog__item-info'}>
                            <div className={'blog__item-date'}>
                                {data[7].date}
                            </div>

                            <div className={'blog__item-title'}>
                                {data[7].shortTitle}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'blackout'}> </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
