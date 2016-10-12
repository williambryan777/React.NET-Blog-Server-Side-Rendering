/**
 * 微博图片列表
 */
var React = require('react');
var ImageList = React.createClass({
    propTypes: {
        imgUrlList: React.PropTypes.array,
        longBlogId: React.PropTypes.number.isRequired,
    },
    render() {


        let imgList = this.props.imgUrlList;
        let longBlogId=this.props.longBlogId;
        if(!imgList){
            return null;
        }
        let liNodes = imgList.map(imgUrl => {
           return(
               <li className='f1 mr5'>
                   <img src={imgUrl} width="80" height="80" />
               </li>
           )
        });
        const isShow = imgList && imgList.length > 0 && longBlogId <= 0;
        if(isShow){
            return (
                <div className="clearfix">
                    <ul className="line-content-pic mt10 imgList">{liNodes}
                    </ul>
                </div>
            )
        }else{
            return null;
        }
    }
})

module.exports = ImageList;