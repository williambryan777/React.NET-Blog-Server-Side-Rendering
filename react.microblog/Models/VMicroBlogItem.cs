using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using react.microblog.Models;

namespace react.microblog.Models
{
    /// <summary>
    /// 首页微博显示模型
    /// </summary>
    [Serializable]
    public class VMicroBlogItem
    {
        public VMicroBlogItem()
        {
            MicroBlog = new MicroBlogs();
        }

        /// <summary>
        /// MicroBlogs表模型
        /// </summary>
        public MicroBlogs MicroBlog { get; set; }

        /// <summary>
        /// 点赞数量
        /// </summary>
        //public int PraiseCount { get; set; }

        /// <summary>
        /// 是否点赞
        /// </summary>
        public bool IsPraise { get; set; }

        /// <summary>
        /// 是否收藏
        /// </summary>
        public bool IsFavorites { get; set; }

        /// <summary>
        /// 是否是自己的微博
        /// </summary>
        public bool IsOwnerBlog { get; set; }

        /// <summary>
        /// 是否已关注
        /// </summary>
        public bool IsAttention { get; set; }

        /// <summary>
        /// 发布时间，如42分钟前或5月25日 15：10
        /// </summary>
        public string ReportTimeStr { get; set; }

        /// <summary>
        /// 微博图片列表
        /// </summary>
        public List<string> ImgUrlList { get; set; }

        /// <summary>
        /// 账户角色类型 1：Followme官方认证账号 2:老板帐号
        /// </summary>	
        public int AccountRole { get; set; }

        /// <summary>
        /// 用户类型 0：普通用户 1：交易员 2：投资人 3：认证用户
        /// </summary>
        public int UserType { get; set; }

        /// <summary>
        /// 用户类型 0：普通用户 1：交易员 2：投资人 3：认证用户
        /// </summary>
        public string UserTypeValue { get; set; }

        /// <summary>
        /// 经纪商ID 1：PICO 2:RH
        /// </summary>	
        public int BrokerId { get; set; }

        public bool IsTop { get; set; }

        //public User UserObject { get; set; }

        /// <summary>
        /// 原创微博（在本微博不是原创的情况下才有）
        /// </summary>
        public VMicroBlogItem OriginalBlog { get; set; }
    }
}