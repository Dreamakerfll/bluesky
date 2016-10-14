var from1_2 = false;
var from3_2 = false;

var currentSection = undefined;

$(function(){



    $('.contain').fullpage({
        scrollOverflow: true,
        verticalCentered: false,
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using index
            //if(index == 1){
            //    //alert("第1屏");
            //
            //    $.fn.fullpage.moveSectionUp();
            //    $.fn.fullpage.moveSectionUp();
            //        $.fn.fullpage.moveSectionDown();
            //
            //    //$.fn.fullpage.moveTo(2);
            //}
            //if(index == 2){
            //    //alert("第2屏");
            //    //$.fn.fullpage.moveSectionUp();
            //}
            if(index == 3){
                //alert("第3屏");
                $.fn.fullpage.moveSectionUp();
                currentSection = 3;
            }
            if(index == 2){
                if(from1_2){
                    $.fn.fullpage.moveSectionDown();
                }
                if(from3_2){
                    //$.fn.fullpage.moveSectionUp();
                }
                currentSection = 2;
            }
            if(index == 1){
                currentSection = 1;
            }
        },
        onLeave: function(index, nextIndex, direction){

            if(index == 1 && nextIndex == 2 && direction =='down'){
                from1_2 = true;
                from3_2 = false;
            }
            if(index == 3 && nextIndex == 2 && direction =='up'){
                from3_2 = true;
                from1_2 = false;
            }

        }
    });


    //section2冒头的高度
    var section2Height = $('.fp-height-auto2').height();
    var clientHeight = document.body.clientHeight;
    var cha = clientHeight - section2Height;
    $('.fp-height-auto').css({'height':cha});


    $('.untouch_contain').on('touchstart touchmove',function (e) {
        if(currentSection == 1){
            $.fn.fullpage.moveSectionDown();
            return false;
        }
        if(currentSection == 2){
            $.fn.fullpage.moveSectionUp();
            return false;
        }

    });



    function swepToNumber(max_number,ele){

        var padding_zeros = '';
        for(var i = 0, l = max_number.toString().length; i < l; i++) {
            padding_zeros += '0';
        }

        var padded_now, numberStep = function(now, tween) {
            var target = $(tween.elem),
                rounded_now = Math.round(now);

            var rounded_now_string = rounded_now.toString()
            padded_now = padding_zeros + rounded_now_string;
            padded_now = padded_now.substring(rounded_now_string.length);

            target.prop('number', rounded_now).text(pad(padded_now,max_number.toString().length<2?2:max_number.toString().length));
        };

        ele.animateNumber({
            number: max_number,
            numberStep: numberStep
        }, 2000);
    };

    function swepToPercent(pointLenth,toNumber,ele){
        var decimal_places = pointLenth;
        var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
        ele.animateNumber(
            {
                number: toNumber * decimal_factor,

                numberStep: function(now, tween) {
                    var floored_number = Math.floor(now) / decimal_factor,
                        target = $(tween.elem);

                    if (decimal_places > 0) {
                        // force decimal places even if they are 0
                        floored_number = floored_number.toFixed(decimal_places);

                        // replace '.' separator with ','
                        floored_number = floored_number.toString().replace('.', '.');
                    }

                    target.text( floored_number);
                }
            },
            2000
        );
    }

    var myTree = 25;
    var paper = myTree*4;
    var oxygen = accMul(myTree,4.7);
    var tailGas = myTree*16;

    //如果我的树的长度为3位，则更改样式
    if(myTree.toString().length == 3){
        $('.text_contain').css({    'position': 'absolute',
            'margin': '-64% auto 0 30%',
            'width': '27%',
            'text-align': 'center',
            'font-size': '24vw'});
        $('.big_blue_text').css({'font-size': '15vw',
            'color': '#51A9DB'});
    }else if(myTree.toString().length == 4){
        //如果我的树的长度为4位，则更改样式
        $('.text_contain').css({    'position': 'absolute',
            'margin': '-64% auto 0 30%',
            'width': '27%',
            'text-align': 'center',
            'font-size': '24vw'});
        $('.big_blue_text').css({'font-size': '10vw',
            'color': '#51A9DB'});
    }

    if(paper.toString().length == 7 || oxygen.toString().length == 7 || tailGas.toString().length == 7){
        //如果达成成就的长度为7，则更改样式
        $(".paper_contain").css({'position': 'absolute',
            'margin': '-20% auto 0 6%',
            'width': '26%',
            'text-align': 'center'});

        $(".oxygen_contain").css({'position': 'absolute',
            'margin': '-20% auto 0 38%',
            'width': '26%',
            'text-align': 'center'});

        $(".tail_gas_contain").css({'position': 'absolute',
            'margin': '-20% auto 0 65%',
            'width': '26%',
            'text-align': 'center'});
        $(".middle_text").css({'font-size': '6vw',
            'color': '#727171',
            'display': 'inline'});

    }
    //如果达成成就的长度为6，则更改样式
    else if(paper.toString().length == 6 || oxygen.toString().length == 6 || tailGas.toString().length == 6){
        $(".paper_contain").css({'position': 'absolute',
            'margin': '-20% auto 0 6%',
            'width': '26%',
            'text-align': 'center'});

        $(".oxygen_contain").css({'position': 'absolute',
            'margin': '-20% auto 0 38%',
            'width': '26%',
            'text-align': 'center'});

        $(".tail_gas_contain").css({'position': 'absolute',
            'margin': '-20% auto 0 65%',
            'width': '26%',
            'text-align': 'center'});
        $(".middle_text").css({'font-size': '6.5vw',
            'color': '#727171',
            'display': 'inline'});

    }
    //如果达成成就的长度为5，则更改样式
    else if(paper.toString().length == 5 || oxygen.toString().length == 5 || tailGas.toString().length == 5){
        $(".paper_contain").css({'position': 'absolute',
            'margin': '-20% auto 0 6%',
            'width': '26%',
            'text-align': 'center'});

        $(".oxygen_contain").css({'position': 'absolute',
            'margin': '-20% auto 0 38%',
            'width': '26%',
            'text-align': 'center'});

        $(".tail_gas_contain").css({'position': 'absolute',
            'margin': '-20% auto 0 65%',
            'width': '26%',
            'text-align': 'center'});
        $(".middle_text").css({'font-size': '6.5vw',
            'color': '#727171',
            'display': 'inline'});

    }

    swepToNumber(myTree,$(".text_contain .big_blue_text"));
    swepToNumber(paper,$(".paper_contain .middle_text"));
    if(oxygen.toString().indexOf(".") != -1){
        swepToPercent(1,oxygen,$(".oxygen_contain .middle_text"));
    }else{
        swepToPercent(0,oxygen,$(".oxygen_contain .middle_text"));
    }
    swepToNumber(tailGas,$(".tail_gas_contain .middle_text"));

    $('.support').click(function(){
        $(".wapper").css({"-webkit-filter":"blur(10px)","filter":"blur(10px)"});
        $(".bottom_button").css({"-webkit-filter":"blur(10px)","filter":"blur(10px)"});
        $(".wapper2").css({"-webkit-filter":"blur(10px)","filter":"blur(10px)"});
        $(".getAward_bottom_button").css({"-webkit-filter":"blur(10px)","filter":"blur(10px)"});
        $('.mask').show();
    });

    $('.mask').click(function(){
        $('.mask').hide();
        $(".wapper").css({"-webkit-filter":"","filter":""});
        $(".bottom_button").css({"-webkit-filter":"","filter":""});
        $(".wapper2").css({"-webkit-filter":"","filter":""});
        $(".getAward_bottom_button").css({"-webkit-filter":"","filter":""});
    });

    $('.scribe').click(function(){
        $(".wapper").css({"-webkit-filter":"blur(10px)","filter":"blur(10px)"});
        $(".bottom_button").css({"-webkit-filter":"blur(10px)","filter":"blur(10px)"});
        $(".wapper2").css({"-webkit-filter":"blur(10px)","filter":"blur(10px)"});
        $(".getAward_bottom_button").css({"-webkit-filter":"blur(10px)","filter":"blur(10px)"});
        $('.mask2').show();
    });

    $('.mask2').click(function(){
        $('.mask2').hide();
        $(".wapper").css({"-webkit-filter":"","filter":""});
        $(".bottom_button").css({"-webkit-filter":"","filter":""});
        $(".wapper2").css({"-webkit-filter":"","filter":""});
        $(".getAward_bottom_button").css({"-webkit-filter":"","filter":""});
    });
});

function pad(num, n) {
    var len = num.toString().length;
    while(len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}


