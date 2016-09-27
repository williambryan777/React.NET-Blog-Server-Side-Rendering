using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace react.microblog.Models
{
    [Serializable]
    public class Pager<T>
    {
        /// <summary>
        /// 初始化PAGE 对象，计算总页数
        /// </summary>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        /// <param name="totalCount"></param>
        public void Init(int pageIndex, int pageSize, int totalCount)
        {
            this.PageIndex = pageIndex;
            this.PageSize = pageSize;
            this.RowCount = totalCount;

            if (pageSize != 0)
            {
                this.TotalPages = totalCount / pageSize;
                if (totalCount % pageSize > 0)
                    TotalPages++;
            }
        }

        public int PageSize { get; set; }
        public int PageIndex { get; set; }
        public int RowCount { get; set; }
        public IList<T> Items { get; set; }
        public int TotalPages { get; set; }
    }
}