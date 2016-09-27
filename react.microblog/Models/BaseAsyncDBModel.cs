using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace react.microblog.Models
{
    /// <summary>
    /// 异步数据传输基类
    /// </summary>
    [Serializable]
    public class BaseAsyncDBModel
    {
        /// <summary>
        /// Model的状态
        /// </summary>
        public ModelStatusType ModelStatus { get; set; }

    }

    /// <summary>
    /// Model的状态类型
    /// </summary>
    public enum ModelStatusType
    {
        /// <summary>
        /// 正常状态
        /// </summary>
        NORMAL = 0,

        /// <summary>
        /// 被修改的
        /// </summary>
        MODIFIED = 1,

        /// <summary>
        /// 新增加的
        /// </summary>
        NEW = 2,

        /// <summary>
        /// 被删除的
        /// </summary>
        DELETED = 3,

        /// <summary>
        /// 被屏蔽的
        /// </summary>
        SHIELD = 4,

        /// <summary>
        /// 物理删除
        /// </summary>
        REMOVE = 5
    }
}