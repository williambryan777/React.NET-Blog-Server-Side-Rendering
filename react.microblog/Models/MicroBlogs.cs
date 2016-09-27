using System;
using Newtonsoft.Json;
using react.microblog.Models;

namespace react.microblog.Models
{
    public class MicroBlogs : BaseAsyncDBModel
    {
        private DateTime _createDate;
        public MicroBlogs()
        {
            _createDate = DateTime.Now;
        }

        /// <summary>
        /// Id
        /// </summary>	
        public int Id { get; set; }

        /// <summary>
        /// 用户ID
        /// </summary>	
        public int UserId { get; set; }

        /// <summary>
        /// 用户昵称
        /// </summary>	
        public string UserDisplayName { get; set; }

        /// <summary>
        /// 原文ID，如果是原创，则为0
        /// </summary>	
        public int OriginalId { get; set; }

        /// <summary>
        /// 微博正文
        /// </summary>	
        public string BlogBody { get; set; }

        /// <summary>
        /// 回复数
        /// </summary>	
        public int ReplyCount { get; set; }

        /// <summary>
        /// 转发数
        /// </summary>	
        public int ForwardedCount { get; set; }

        /// <summary>
        /// 点赞数
        /// </summary>	
        public int PraiseCount { get; set; }

        /// <summary>
        /// 是否有图片
        /// </summary>	
        public bool HasPhoto { get; set; }

        /// <summary>
        /// 是否有视频
        /// </summary>	
        public bool HasVideo { get; set; }

        /// <summary>
        /// 是否有音乐
        /// </summary>	
        public bool HasMusic { get; set; }

        /// <summary>
        /// 微博来源，如“Web”,"IOS APP","Android App"
        /// </summary>	
        public string PlatformId { get; set; }

        /// <summary>
        /// 微博来源的版本信息,如 1.0,2.0
        /// </summary>	
        public string SourceVersion { get; set; }

        /// <summary>
        /// 如果是从APP发出则显示设备型号，如 iPhone 6 PLUS
        /// </summary>
        public string DeviceName { get; set; }

        /// <summary>
        /// 微博发送的IP
        /// </summary>	
        [JsonIgnore]
        public string PostIP { get; set; }

        /// <summary>
        /// 审核状态,0: 未审核， 1：审核通过 ，2：审核不通过
        /// </summary>	
        public int AuditStatus { get; set; }

        /// <summary>
        /// 微博类型，0:用户微博 1：推广 2：认证用户微博
        /// </summary>	
        public int PostType { get; set; }

        /// <summary>
        /// 微博Tag关键字
        /// </summary>	
        public string BlogTag { get; set; }

        /// <summary>
        /// 发送时间
        /// </summary>	
        public DateTime CreateDate
        {
            get { return _createDate; }
            set { _createDate = value; }
        }

        /// <summary>
        /// 备注
        /// </summary>	
        public string Remark { get; set; }

        /// <summary>
        /// 长微博Id（大于0为长微博，否则为普通微博）
        /// </summary>
        public int longBlogId { get; set; }

        /// <summary>
        /// 浏览次数
        /// </summary>
        public int ViewCount { get; set; }

        #region  Extend

        /// <summary>
        /// 长微博标题
        /// </summary>
        public string LongBlogTitle { get; set; }

        /// <summary>
        /// 长微博导语
        /// </summary>
        public string LongBlogIntro { get; set; }

        /// <summary>
        /// 长微博图片Url
        /// </summary>
        public string LongBlogImg { get; set; }

        /// <summary>
        /// 长微博正文
        /// </summary>
        public string LongBlogBody { get; set; }

        #endregion
    }
}