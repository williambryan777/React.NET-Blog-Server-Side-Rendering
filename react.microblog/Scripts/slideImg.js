(function ($) {
    $.fn.slideImg = function (options) {
        var defaults = {};
        var option = $.extend(true, defaults, options);
        var $this = $(this);
        var pic_scroll_pos;
        $this.children('li').click(function (index) {
            var $this = $(this);
            var imgList = [];//所有图片集合
            var parent = $(this).parent();//最外层的ul集合
            imgList = parent.children('li');
            var currentImg_index = jQuery.inArray(this, imgList);//点击的图片在当前数组中的位置
            var currentImg = $(this).children('img').attr('src');//当前点击的照片
            currentImg = currentImg.replace('w=80&h=80&centerCut=1', 'w=650&h=400&centerCut=0');//放大当前的照片

            var lookBox = $('<div class="container_img_box"></div>');//最外层div
            var bigImgBox = $('<div content="big_img"><img src="' + currentImg + '" style="max-width:100%;"></div>');//大图片的div
            var thumbUl = $('<ul style="margin-top:13px;"></ul>');//预览列表图片ul
            for (var i = 0; i < imgList.length; i++) {
                var url = $(imgList[i]).children('img').attr('src');
                var thumbLi;
                if (i == 0) {
                    thumbLi = $('<li class="fl thumb_img" style="opacity:0.6;cursor:pointer"><img src="' + url + '" width="65.5" height="66"/></li>');
                } else {
                    thumbLi = $('<li class="fl thumb_img" style="margin-left:1.9px;opacity:0.6;cursor:pointer"><img src="' + url + '" width="65.5" height="66"/></li>');
                }
                thumbUl.append(thumbLi);
            }
            thumbUl.append('<div style="clear:both"></div>');
            var thumbUlList = thumbUl.children('li');
            $(thumbUlList[currentImg_index]).animate({ opacity: 1 });
            lookBox.append(bigImgBox);
            lookBox.append(thumbUl);
            if (parent.next(".container_img_box").length === 0) {
                parent.after(lookBox);
            }
            parent.hide();

            pic_scroll_pos = $(document).scrollTop();

            $(".thumb_img").click(function (e) {
                $(this).animate({ opacity: 1 });
                $(this).siblings().animate({ opacity: 0.6 });
                currentImg = $(this).children('img').attr('src');
                currentImg = currentImg.replace('w=80&h=80&centerCut=1', 'w=650&h=400&centerCut=0');
                $(this).parent().prev().children('img').attr('src', currentImg);
            });

            $("div[content='big_img']").bind('mousemove', function (e) {
                var divleft = this.getBoundingClientRect().left;
                imgList = $(this).parent().prev().children('li');//重新获取点击对象的图片集合
                currentImg = $(this).children('img').attr('src');
                currentImg = currentImg.replace('w=650&h=400&centerCut=0', 'w=80&h=80&centerCut=1');
                for (var i = 0; i < imgList.length; i++) {
                    var url = $(imgList[i]).children('img').attr('src');
                    if (url === currentImg) {
                        currentImg_index = i;
                        break;
                    }
                }
                if (e.pageX - divleft > 0 && e.pageX - divleft < 150) {
                    $(this).attr('class', '');
                    if (currentImg_index === 0) {
                        $(this).addClass('cursor-middle');
                    } else {
                        $(this).addClass('cursor-left');
                    }
                } else if (e.pageX - divleft > 500) {

                    $(this).attr('class', '');
                    if (currentImg_index === imgList.length - 1) {
                        $(this).addClass('cursor-middle');
                    } else {
                        $(this).addClass('cursor-right');
                    }

                } else {
                    $(this).attr('class', '');
                    $(this).addClass('cursor-middle');
                }
            });

            $("div[content='big_img']").unbind('click').click(function (e) {
                e.stopPropagation();
                bigImgBox = $(this).parent();
                parent = $(this).parent().prev();
                var className = $(this).attr('class');
                imgList = $(this).parent().prev().children('li');//重新获取点击对象的图片集合
                currentImg = $(this).children('img').attr('src');
                currentImg = currentImg.replace('w=650&h=400', 'w=80&h=80');
                for (var i = 0; i < imgList.length; i++) {
                    var url = $(imgList[i]).children('img').attr('src');
                    if (url === currentImg) {
                        currentImg_index = i;
                        break;
                    }
                }
                thumbUlList = $(this).next().children('li');
                if (className === 'cursor-middle') {
                    $(document).scrollTop(pic_scroll_pos);
                    bigImgBox.remove();
                    parent.show();
                } else if (className === 'cursor-left') {
                    if (currentImg_index === 0) {
                        return;
                    } else {
                        currentImg_index--;
                        var newImgUrl = $(imgList[currentImg_index]).children('img').attr('src');
                        newImgUrl = newImgUrl.replace('w=80&h=80&centerCut=1', 'w=650&h=400&centerCut=0');
                        $(this).animate({ opacity: 1 });
                        $(this).children('img').attr('src', newImgUrl);
                        $(thumbUlList[currentImg_index]).animate({ opacity: 1 });
                        $(thumbUlList[currentImg_index]).siblings().animate({ opacity: 0.6 });
                    }
                } else {
                    if (currentImg_index === imgList.length - 1) {
                        return;
                    } else {
                        currentImg_index++;
                        var newImgUrl = $(imgList[currentImg_index]).children('img').attr('src');
                        newImgUrl = newImgUrl.replace('w=80&h=80&centerCut=1', 'w=650&h=400&centerCut=0');
                        $(this).children('img').attr('src', newImgUrl);
                        $(thumbUlList[currentImg_index]).animate({ opacity: 1 });
                        $(thumbUlList[currentImg_index]).siblings().animate({ opacity: 0.6 });
                    }
                }
            });
        });
    }
})(jQuery);

