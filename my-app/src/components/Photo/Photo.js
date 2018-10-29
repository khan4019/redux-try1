import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Photo extends Component {
    render() {
        const post = {
            "code":"BAcyDyQwcXX",
            "caption":"Lunch #hamont",
            "likes":56,
            "id":"1161022966406956503",
            "display_src":"https://scontent-dfw5-1.cdninstagram.com/vp/70d5ae0c6a6923e1e160b061c8ed2054/5C509615/t51.2885-15/sh0.08/e35/s640x640/43817692_173226366932496_420989457483790372_n.jpg"
         };
         const comments = {
            "BAcyDyQwcXX":[
                {
                  "text":"Wes. WE should have lunch.",
                  "user": "jdaveknox"
                },
                {
                  "text":"#adults",
                  "user": "jdaveknox"
                },
                {
                  "text":"@jdaveknox yes!",
                  "user": "wesbos"
                },
                {
                  "text":"😍 love Hamilton!",
                  "user": "willowtreemegs"
                }
              ]
         }
        return (
            <div>
                <figure className="grid-figure">
                    <div className="grid-photo-wrap">
                    <img src={this.props.post.display_src} alt={post.caption} className="grid-photo" />
                        {/* <Link to={`/view/${post.code}`}>
        
      </Link> */}

                        {/* <CSSTransitionGroup transitionName="like"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        <span key={post.likes} className="likes-heart">{post.likes}</span>
      </CSSTransitionGroup> */}

                    </div>

                    <figcaption>
                        <p>{post.caption}</p>
                        <div className="control-buttons">
                            <button className="likes">&hearts; {post.likes}</button>
                            {/* <Link className="button" to={`/view/${post.code}`}> */}
                                <span className="comment-count">
                                    <span className="speech-bubble"></span>&nbsp;
            {comments[post.code] ? comments[post.code].length : 0}
                                </span>
                            {/* </Link> */}
                        </div>
                    </figcaption>

                </figure>
            </div>
        );
    }
}

export default Photo;