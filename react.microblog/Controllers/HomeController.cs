using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Newtonsoft.Json;
using react.microblog.Models;

namespace react.microblog.Controllers
{
   
    public class HomeController : Controller
    {
        private Pager<VMicroBlogItem> _vMicroBlogItems;
        public HomeController()
        {
            var path = System.IO.Path.Combine(System.AppDomain.CurrentDomain.BaseDirectory, "bin");
            string contents = System.IO.File.ReadAllText(path);
            _vMicroBlogItems = JsonConvert.DeserializeObject<Pager<VMicroBlogItem>>(contents);
        }

        public ActionResult Index()
        {
//            return View(new IndexViewModel
//            {
//                Comments = _comments.Take(COMMENTS_PER_PAGE),
//                CommentsPerPage = COMMENTS_PER_PAGE,
//                Page = 1
            
//            });
            return View(_vMicroBlogItems);
        }

    }
}
