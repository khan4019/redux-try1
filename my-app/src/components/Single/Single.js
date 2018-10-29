import React, { Component } from 'react';

import Comment from '../Comment/Comment';
import Photo from '../Photo/Photo';

class Single extends Component {
    render() {
        const post = {
            "code": "BAcyDyQwcXX",
            "caption": "Lunch #hamont",
            "likes": 56,
            "id": "1161022966406956503",
            "display_src": "https://scontent-dfw5-1.cdninstagram.com/vp/70d5ae0c6a6923e1e160b061c8ed2054/5C509615/t51.2885-15/sh0.08/e35/s640x640/43817692_173226366932496_420989457483790372_n.jpg"
        };
        const comments = {
            "BAcyDyQwcXX": [
                {
                    "text": "Wes. WE should have lunch.",
                    "user": "jdaveknox"
                },
                {
                    "text": "#adults",
                    "user": "jdaveknox"
                },
                {
                    "text": "@jdaveknox yes!",
                    "user": "wesbos"
                },
                {
                    "text": "😍 love Hamilton!",
                    "user": "willowtreemegs"
                }
            ]
        }

        const postComments = comments['BAcyDyQwcXX'] || [];  // return empty array in case null comments
        return (
            <div className="single-photo">
                <Photo post={post} />
                <Comment postComments={postComments} />
            </div>
        );
    }
}

export default Single;