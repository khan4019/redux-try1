import React, { Component } from 'react';
import Photo from '../Photo/Photo';

class PhotoGrid extends Component {
    render() {
        const posts = [
            {
               "code":"BAcyDyQwcXX",
               "caption":"Lunch #hamont",
               "likes":56,
               "id":"1161022966406956503",
               "display_src":"https://scontent-dfw5-1.cdninstagram.com/vp/70d5ae0c6a6923e1e160b061c8ed2054/5C509615/t51.2885-15/sh0.08/e35/s640x640/43817692_173226366932496_420989457483790372_n.jpg"
            },
            {
               "code":"BAcJeJrQca9",
               "caption":"Snow! ⛄️🌨❄️ #lifewithsnickers",
               "likes":59,
               "id":"1160844458347054781",
               "display_src":"https://scontent-dfw5-1.cdninstagram.com/vp/6dd7a7d925ba72a68a9c400d6a47991c/5C644B03/t51.2885-15/sh0.08/e35/s640x640/43146217_967162820134217_4348050758239115204_n.jpg"
            },
            {
               "code":"BAF_KY4wcRY",
               "caption":"Cleaned my office and mounted my recording gear overhead. Stoked for 2016!",
               "likes":79,
               "id":"1154606670337393752",
               "display_src":"https://scontent-dfw5-1.cdninstagram.com/vp/24f31c3fcd40f9d3a1713d0c051a1281/5C6413D6/t51.2885-15/sh0.08/e35/s640x640/42679709_2128246887494340_1921322141148564634_n.jpg"
            },
            {
               "code":"BAPIPRjQce9",
               "caption":"Making baby pancakes for one early rising baby. ☕️🍴",
               "likes":47,
               "id":"1157179863266871229",
               "display_src":"https://scontent-dfw5-1.cdninstagram.com/vp/63e502d0e18a6fb9154bb5bb6e3f4c2d/5C65AD7B/t51.2885-15/sh0.08/e35/s640x640/41994236_167878220809769_7009357475074787373_n.jpg"
            },
            {
               "code":"-hZh6IQcfN",
               "caption":"New Stickers just came in. I'll do another mailing in a few weeks if you want some. #javascript",
               "likes":66,
               "id":"1126293663140399053",
               "display_src":"https://scontent-dfw5-1.cdninstagram.com/vp/cc122087a19f381fa94eff3e36f54e98/5C4F6011/t51.2885-15/sh0.08/e35/s640x640/42068569_1051438148384509_7038133472895678947_n.jpg"
            },
            {
               "code":"-B3eiIwcYV",
               "caption":"Tacos for breakfast. I love you Austin. 🇺🇸",
               "likes":33,
               "id":"1117418173361145365",
               "display_src":"https://scontent-dfw5-1.cdninstagram.com/vp/856467018a96117a1400b1aa4b8be9e4/5C63CD11/t51.2885-15/sh0.08/e35/s640x640/42934487_269499933705569_1810526177078141823_n.jpg"
            }
        ]
        return (
            <div className="photo-grid">
            {posts.map((post, i) => <Photo post={post} />)}
          </div>
        );
    }
}

export default PhotoGrid;