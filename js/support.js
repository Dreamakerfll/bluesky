/**
 * Created by 立力 on 2016/9/27.
 */
/*$(document).ready(
    function() {



        //给每个页签重新计算高度
        //屏幕高度
        var clientHeight = document.documentElement.clientHeight;
        //alert(clientHeight);
        var nowpage = 0;
        //给class为container的容器加上触滑监听事件
        $(".page").swipe(
            {
                swipe:function(event, direction, distance, duration, fingerCount) {//事件，方向，距离（像素为单位），时间，手指数量
                    if(direction == "up")//当向上滑动手指时令当前页面记数器加1
                    {
                        nowpage = nowpage + 1;
                    }
                    else if(direction == "down")//当向下滑动手指时令当前页面记数器减1
                    {
                        nowpage = nowpage - 1;
                    }

                    if(nowpage > 1)//因本实例只有5张图片，所以当记数器大于4时令他返回4（从0开始记），避免溢出出错
                    {
                        nowpage = 1;
                    }

                    if(nowpage < 0)//道理同上
                    {
                        nowpage = 0;
                    }
                    var position = nowpage * -100 + "%";
                    $(".page").css({"transform":"translate(0px, "+position+")"});
                    //$(".container").animate({"top":nowpage * -100 + "%"},400);//根据当前记数器滚动到相应的高度
                }
            }
        );
    }


);*/
$(function(){

    $('.support_now').click(function(){

        console.log(new Date());
        console.log(new Date('2016-10-20 00:00:00'));

        if(new Date().getTime() < new Date('2016-10-20 00:00:00').getTime()){
            alert("还未开始");
            return;
        }
        alert("开始");
    });
});
