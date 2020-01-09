//WOW动画初始化
$(function() {
      wow = new WOW(
          {
              boxClass: 'wow',      // 默认属性名
              animateClass: 'animated', // 默认触发的动画类(包含在animate css中)
              offset: 0,          // 为所有添加wow的元素设置 data-wow-delay属性 的默认值
              mobile: true,       // 是否在移动设备中开启动画
              live: true        // 持续监测页面中是否插入新的wow元素
          }
      );

    // wow.init();
    // 阻止冒泡
    function stopBubble(e) { 
        if(e && e.stopPropagation) { 
            e.stopPropagation(); 
        } else {
            window.event.cancelBubble = true; 
        } 
    }
    // 手机端导航
    $(document).ready(function(){
         $(".codehim-dropdown").CodehimDropdown(); //with all default settings
    }); 
    // 模块开启
    layui.use('element', function(){
      var element = layui.element;
    });
      // 首页轮播切换
    $(".index1-container .swiper-bottom .swiper-btn").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });
    $(".jjfa-main .swiper-btn").click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });


    // 右侧客服插件
    $(".kefu-online .greenfixed").mouseover(function(){
      $(this).next(".hover-box").css("display","block")
    })
    $(".kefu-online .online").mouseleave(function(){
      $(".hover-box").css("display","none")
    })


    // 首页地图
    // jQuery(document).ready(function ($) {
    //     $(".map-main .m_map .mp").mouseover(function () {
    //         $(this).find(".map-info").show();
    //     }).mouseout(function () {
    //         $(this).find(".map-info").hide();
    //     });
    // });
    // 导航菜单下拉
      $(".head-nav .layui-nav .layui-nav-item").mouseover(function(){
        $(".menu-list .menucont").removeClass("active").stop().fadeOut(300);
        $(".menu-list .menucont").eq($(this).index()).addClass("active").stop().fadeIn(500).siblings().removeClass("active").stop().fadeOut(300);
      });
      $(".menu-list .menucont").mouseleave(function(){
        $(".menu-list .menucont").removeClass("active").stop().fadeOut(300);
      })
    // 产品聚合页-数字滚动
    productNumber=function (){
      var arr = [];
      $('.ts-number .num-up').each(function(i, dom) {
        var iDom = $(dom).find('span'),
          decimals = 0,
          sum = iDom.data('sum');
        //初始化传参，参数为上面注释中的参数    
        arr.push(new CountUp(iDom.attr('id'), 0, sum, decimals, 4, {
          useEasing: true,//效果
          separator: ''//数字分隔符
        }));
        arr[i].start();
      });
    }();
    // 云场景
    $("#macy-container .grid-item").mouseover(function(){
      $(".place-info .placoff .infocont").eq($(this).index()).addClass("active").stop().fadeIn().siblings().removeClass("active").stop().hide();
    });
    // 行业展开更多
    $(".hy-more").click(function(){
      $(this).parent().find(".morelist").slideToggle(1000);
      $(this).parent().find(".morelist").toggleClass("active")
      if($(this).parent().find(".morelist").hasClass("active")){
      	$(this).find("h2").html("收起")
      }else{
      	$(this).find("h2").html("展开全部")
      }
    })

    // 轮播
    if($(window).width()<=768){
      // 注塑机页面轮播
      var swiper = new Swiper('.zsj_container', {
        navigation: {
          nextEl: '.jjfa-prev',
          prevEl: '.jjfa-next',
        },
        slidesPerView:1,
        spaceBetween:15
      });
    }else{
      // 注塑机页面轮播
      var swiper = new Swiper('.zsj_container', {
        navigation: {
          nextEl: '.jjfa-prev',
          prevEl: '.jjfa-next',
        },
        slidesPerView:2.5,
        spaceBetween:24
      });
    }

  // 核心价值切换
    $(".hxjz .hxjz-main .dian li").mouseover(function(){
      $(".hxjz-main ul li").eq($(this).index()).addClass("active").siblings().removeClass("active");
    });
    $(".hxjz .hxjz-main .dian li").mouseleave(function(){
      $(".hxjz-main ul li").removeClass("active");
    })

    $(".hxjz-main ul li").mouseover(function(){
      $(this).addClass("active").siblings().removeClass("active");
      $(".hxjz .hxjz-main .dian li").eq($(this).index()).addClass("on").siblings().removeClass("on");
    });
    $(".hxjz-main ul li").mouseleave(function(){
      $(this).addClass("active").removeClass("active");
      $(".hxjz .hxjz-main .dian li").removeClass("on");
    });


  // 新闻+搜索tab切换
  $(".ny_menu_list .ny_menu a").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".ny_n_list ul").eq($(this).index()).addClass("active").siblings().removeClass("active");
  });


  // 搜索内容切换
  $(".search_item .search_item a").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".search_result .sea_r_list").eq($(this).index()).addClass("active").siblings().removeClass("active");
  });


  // 云详情锚点
  $("#md ul").on("click","li",function(){
    $(this).addClass("on").siblings().removeClass("on");
  })
  // 锚点菜单跟随
  $(window).on('scroll',function () {
      var hs=5;
      var h=$(this).scrollTop();
      if(h>hs && $(window).width()>=768){
          $('.yun-detail .detbtm-md').css({"position":"fixed","top":"0","z-index":"500","box-shadow":"0 2px 2px rgba(0,0,0,0.2)","background":"#fff"}).addClass("animated fadeIn");
          // $('.yun-detail .detbtm-md ul').css({"width":"1440px","margin":"0 auto","height":"48px"})
          $('.yun-detail .detbtm-md ul li a').css({"color":"#21252E"});
      }else if(h<hs && $(window).width()>=768){
          $('.yun-detail .detbtm-md').css({"position":"absolute","top":"auto","z-index":"500","box-shadow":"none",'background':'none'}).removeClass("animated fadeIn");;
          $('.yun-detail .detbtm-md ul').css({"width":"auto",})
          $('.yun-detail .detbtm-md ul li a').css({"color":"#fff"});
      }
  });
  // 案例详情--标题菜单跟随
      $(window).on('scroll',function () {
      var hs=500;
      var conth=$(".art_infor").outerHeight(true);
      var h=$(this).scrollTop();
      // console.log("内容的高度"+conth);
      // console.log("滚动的高度"+h);
      if(h>hs){
          $('.case_detail1 .c_share').css({"position":"fixed","top":"5%",'background':'#fff'}).addClass("animated fadeIn");
          $('.case_detail1 .case-title').css({"position":"fixed","top":"0%","left":"0"}).addClass("animated fadeIn");
          $('.case_detail1 .case-title .article_title').css({"font-size":"24px","padding-top":"20px"});
          
      }if(h<hs){
          $('.case_detail1 .c_share').css({"position":"static","top":"0",'background':'#none'}).removeClass("animated fadeIn");
          $('.case_detail1 .case-title').css({"position":"static","top":"auto","left":"auto"}).removeClass("animated fadeIn");
          $('.case_detail1 .case-title .article_title').css({"font-size":"32px","padding-top":"auto"});

      }if(h>=conth){
          $('.case_detail1 .c_share').css({"position":"static","top":"0",'background':'#none'});
          $('.case_detail1 .case-title').css({"position":"static","top":"auto","left":"auto"}).removeClass("animated fadeIn");
          $('.case_detail1 .case-title .article_title').css({"font-size":"32px","padding-top":"auto"});

      }
  });

  // 新闻资讯--标题菜单跟随
  if($(window).width()>768){
    $(window).on('scroll',function () {
      var hs=500;
      var conth=$(".n_i_show").outerHeight(true);
      var h=$(this).scrollTop();
      if(h>hs){
          $('.news_showcontent .c_share').css({"position":"fixed","top":"5%",'background':'#fff'}).addClass("animated fadeIn");
          $('.news_showcontent .case-title').css({"position":"fixed","top":"0%","left":"0","text-align":"center","padding-top":"0"}).addClass("animated fadeIn");
        $(".news_showcontent .n_d_title").css({"margin-bottom":"0","line-height":"64px","font-size":"24px"})
      }if(h<hs){
          $('.news_showcontent .c_share').css({"position":"static","top":"0",'background':'#none'}).removeClass("animated fadeIn");
          $('.news_showcontent .case-title').css({"position":"static","top":"auto","left":"auto","text-align":"left","padding-top":"auto"}).removeClass("animated fadeIn");
      $(".news_showcontent .n_d_title").css({"margin-bottom":"60px","line-height":"40px","font-size":"32px"})
      }if(h>=conth){
          $('.news_showcontent .c_share').css({"position":"static","top":"0",'background':'#none'});
          $('.news_showcontent .case-title').css({"position":"static","top":"auto","left":"auto","text-align":"left","padding-top":"auto","font-size":"32px"}).removeClass("animated fadeIn");
      }
    });
  }
  //新闻列表展开更多
  $(".ny_nl_more").click(function(){
    $(".moreul").find("ul").slideToggle();
  });
 // 中英文切换
 function changelang(){
  $(".language-select .lang-bg span").click(function(){
    $(this).addClass("cur").siblings().removeClass("cur");
    $(".language-box span").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
  });
}
  changelang();
  // 顶部全局搜索提示
  function search_suggest (){
    var inp1 = document.getElementById("search-top");
    inp1.onfocus =function(){
      $("#search_suggest_list").stop().fadeIn();
      $(".searchall .close_search").stop().show();
      changeSelect();
    };
    $(".searchall .searh").mouseenter(function(){
      $("#search_suggest_list").stop().fadeIn();
   changeSelect();
    });
    $(".searchall .searh").mouseleave(function(){
      $("#search_suggest_list").stop().hide();
      $(".searchall .close_search").stop().hide();
      $("#search_suggest_list ul").find("li").remove();
    });
    inp1.onblur = function(){
       $("#search_suggest_list").stop().fadeOut();
       $(".searchall .close_search").hide();
     };
  }search_suggest ();

 //---------------- 四大详情视频播放步骤----------
      // 1.收集表单信息-
      layui.use('layer', function(){
        var layer= layui.layer;
        $(".video-hover #xcvideo").click(function(){
          layer.open({
            type: 1,
            title: '联系方式',
            closeBtn:1,
            shadeClose: true,
            shade: 0.6,
            area: ['480px', 'auto'],
            skin: 'youclass',
            content: $('#lxfs')
          });
        });
      });
      // 监听表单提交-----视频信息表单提交
      layui.use('form', function(){
        var form = layui.form;
        form.on('submit(video)', function(data){
        layer.closeAll(); //关闭之前的弹窗
      if($(window).width()<=768){
        // 视频弹窗
         layui.use('layer', function(){
         var layer = layui.layer;
            layer.config({
              extend: 'myskin/style.css', //加载新皮肤
            });
          var video = $("#xcvideo").attr("video_src");
          layer.open({
              type: 2,
              title: '未来工业的造梦工厂，中国工业互联网平台',
              closeBtn:1, //不显示关闭按钮
              shade: 0.7,
              skin: 'layer-ext-myskin',
              area: ['100%', '5.8rem'],
              shadeClose: true, //点击遮罩关闭
              anim: 0,
              content: [video, 'no'] //iframe的url，no代表不显示滚动条
          });
        });
      }else{
        // 视频弹窗
        layui.use('layer', function(){
        var layer = layui.layer;
        layer.config({
          extend: 'myskin/style.css', //加载新皮肤
        });
        var video = $("#xcvideo").attr("video_src");
        layer.open({
            type: 2,
            title: '未来工业的造梦工厂，中国工业互联网平台',
            closeBtn:1, //不显示关闭按钮
            shade: 0.7,
            skin: 'layer-ext-myskin',
            area: ['900px', '5.8rem'],
            shadeClose: true, //点击遮罩关闭
            anim: 0,
            content: [video, 'no'],//iframe的url，no代表不显示滚动条
          //   success:function(){
          //     $(".layui-layer-content").after("<div class='video-share'><a href='javascript:;' class='wechat'></a><a href='javascript:;' class='circle'></a><a href='javascript:;' class='weibo'></a><a href='javascript:;' class='news'></a></div>");
          //  },
          });
        });
      }
      return false;
      });
    });
   /**--------------end--------------------- */   
    
  // ------------------联系方式表单提交--------------------//
		layui.use('layer', function(){
        var layer= layui.layer;
        layer.config({
          extend: 'demoskin/style.css', //加载新皮肤
        });
          $("#Lxway").click(function(){
            layer.open({
            type: 1,
            title: false,
            closeBtn:0,
            shadeClose: true,
            anim: 3,
            shade: 0.6,
            area: ['480px', '100%',],
            offset: 'r',
            skin: 'layer-ext-demoskin',
            content: $('#lxwmBox'),
          });
        });
    });
    //   表单提交成功
    layui.use('form', function(){
    var form = layui.form;
    //监听提交
    form.on('submit(lxfs)', function(data){
      layer.closeAll(); //关闭之前的弹窗
      // layer.msg("表单提交成功！请耐心等待~")
      if($(window).width()<=768){
      // 提交成功
        layui.use('layer', function(){
        var layer = layui.layer;
          layer.open({
            type:1,
            title: false,
            closeBtn:0, //不显示关闭按钮
            shade: 0.7,
            skin: 'yourclass',
            area: ['98%', '5.6rem',],
            shadeClose: true, //点击遮罩关闭
            anim:2,
            time: 3000,
            content: $('#successful'),
          });
        });
      }else{
      // 提交成功
        layui.use('layer', function(){
        var layer = layui.layer;
        layer.open({
            type: 1,
            title: false,
            closeBtn:0, //不显示关闭按钮
            shade: 0.7,
            skin: 'yourclass',
            area: ['480px', '100%',],
            offset: 'r',
            shadeClose: true, //点击遮罩关闭
            anim: 2,
            time: 3000,
            content: $('#successful'),
          });
        });
      }
      return false;
    });
    });
  /**--------------end--------------------- */
  //-------------- 各个查看文档表单弹窗------------------//
  layui.use('layer', function(){
      var layer= layui.layer;
        layer.config({
          extend: 'demoskin/style.css', //加载新皮肤
        });
        $("#LookDemo").click(function(){
          layer.open({
            type: 1,
            title: '联系方式',
            closeBtn:1,
            shadeClose: true,
            shade: 0.6,
            area: ['480px', 'auto'],
            skin: 'layer-ext-demoskin',
            content: $('#demo'),
          });
        });
  });
  /**--------------end-优力视频--------------------- */
       // 1.收集表单信息-
       layui.use('layer', function(){
        var layer= layui.layer;
        layer.config({
          extend: 'demoskin/style.css', //加载新皮肤
        });
        $("#ylvideo img").click(function(){
          layer.open({
          type: 1,
          title: '联系方式',
          closeBtn:1,
          shadeClose: true,
          shade: 0.6,
          area: ['480px', 'auto'],
          skin: 'layer-ext-demoskin',
          content: $('#videoform'),
        });
        });
      });
      // 监听表单提交-----视频信息表单提交
      layui.use('form', function(){
        var form = layui.form;
        form.on('submit(videoInfo)', function(data){
        layer.closeAll(); //关闭之前的弹窗
        if($(window).width()<=768){
        // 视频弹窗
        layui.use('layer', function(){
        var layer = layui.layer;
        layer.config({
          extend: 'myskin/style.css', //加载新皮肤
        });
        var video = $("#ylvideo").attr("video_src");
          layer.open({
            type: 2,
            title: '优力电驱动',
            closeBtn: 0, //不显示关闭按钮
            shade: 0.7,
            skin: 'layer-ext-myskin',
            area: ['100%', '5.8rem'],
            shadeClose: true, //点击遮罩关闭
            anim: 0,
            content: [video, 'no'] //iframe的url，no代表不显示滚动条
          });
        });
      }else{
        // 视频弹窗
        layui.use('layer', function(){
        var layer = layui.layer;
        var video = $("#ylvideo").attr("video_src");
        layer.config({
          extend: 'myskin/style.css', //加载新皮肤
        });
        layer.open({
            type: 2,
            title: '优力电驱动',
            closeBtn:1, //不显示关闭按钮
            shade: 0.7,
            skin: 'layer-ext-myskin',
            area: ['900px', '5.8rem'],
            shadeClose: true, //点击遮罩关闭
            anim: 0,
            content: [video, 'no'] //iframe的url，no代表不显示滚动条
          });
        });
      }
      return false;
      });
    });
});

// 页面锚点跳转
$(document).ready(function() {  
      var $root = $('html, body');  //选择器缓存起来。这样每次点击时就不需要再重新查找了
      $('.detbtm-md ul li a').click(function() {
          $(this).parent().addClass("on").siblings().removeClass("on");
          var href = $.attr(this, 'href');
          $root.animate({
              scrollTop: $(href).offset().top
          }, 500, function () {
              window.location.hash = href;
          });
          return false;
      });
  });  



  //应用场景 按个数呈现方式  

      $(function(){
        var item= $(".yycjlist .yycjitem");
        var lengths =item.length;
        //console.log(lengths);
        if(lengths==2){
          item.parent().addClass('con_two')
          // item.css("width","48%");
        }
        if(lengths==4){
          item.parent().addClass('con_four')
          // item.css("width","48%");
        }
        if(lengths==3){
          item.parent().addClass('con_three')
          // item.css("width","48%");
        }
        if(lengths==1){
          item.parent().addClass('con_one')
          // item.css("width","48%");
        }
        if(lengths==5){
          item.parent().addClass('con_five')
          // item.css("width","48%");
        }
        if(lengths==6){
          item.parent().addClass('con_six')
          // item.css("width","48%");
        }
        if(lengths==7){
          item.parent().addClass('con_sev')
          // item.css("width","48%");
        }
        if(lengths==8){
          item.parent().addClass('con_ent')
          // item.css("width","48%");
        }
  
      });

  // 场景2

      $(function(){
        var item= $(".yycjlist .cj-item");
        var lengths =item.length;
        //console.log(lengths);
      if(lengths==2){
        item.parent().addClass('con_two')
        // item.css("width","48%");
      }
      if(lengths==4){
        item.parent().addClass('con_four')
        // item.css("width","48%");
      }
      if(lengths==3){
        item.parent().addClass('con_three')
        // item.css("width","48%");
      }
      if(lengths==1){
        item.parent().addClass('con_one')
        // item.css("width","48%");
      }
      if(lengths==5){
        item.parent().addClass('con_five')
        // item.css("width","48%");
      }
      if(lengths==6){
        item.parent().addClass('con_six')
        // item.css("width","48%");
      }
      if(lengths==7){
        item.parent().addClass('con_sev')
        // item.css("width","48%");
      }
      if(lengths==8){
        item.parent().addClass('con_ent')
        // item.css("width","48%");
      }
  
      });

//  客户价值

    $(function(){
      var item= $(".customer-value .value-item");
      var lengths =item.length;
      //console.log(lengths);
      if(lengths==2){
        item.parent().addClass('con_two')
        // item.css("width","48%");
      }
      if(lengths==4){
        item.parent().addClass('con_four')
        // item.css("width","48%");
      }
      if(lengths==3){
        item.parent().addClass('con_three')
        // item.css("width","48%");
      }
      if(lengths==1){
        item.parent().addClass('con_one')
        // item.css("width","48%");
      }
      if(lengths==5){
        item.parent().addClass('con_five')
        // item.css("width","48%");
      }
      if(lengths==6){
        item.parent().addClass('con_six')
        // item.css("width","48%");
      }
      if(lengths==7){
        item.parent().addClass('con_sev')
        // item.css("width","48%");
      }
      if(lengths==8){
        item.parent().addClass('con_ent')
        // item.css("width","48%");
      }

    });


// 产品亮点


    $(function(){
      var item= $(".customerlist .cstmitem");
      var lengths =item.length;
      //console.log(lengths);
      if(lengths==2){
        item.parent().addClass('con_two')
        // item.css("width","48%");
      }
      if(lengths==4){
        item.parent().addClass('con_four')
        // item.css("width","48%");
      }
      if(lengths==3){
        item.parent().addClass('con_three')
        // item.css("width","48%");
      }
      if(lengths==1){
        item.parent().addClass('con_one')
        // item.css("width","48%");
      }
      if(lengths==5){
        item.parent().addClass('con_five')
        // item.css("width","48%");
      }
      if(lengths==6){
        item.parent().addClass('con_six')
        // item.css("width","48%");
      }
      if(lengths==7){
        item.parent().addClass('con_sev')
        // item.css("width","48%");
      }
      if(lengths==8){
        item.parent().addClass('con_ent')
        // item.css("width","48%");
      }

    });


// 行业痛点


    $(function(){
      var item= $(".DMLlist .gnitem");
      var lengths =item.length;
      //console.log(lengths);
      if(lengths==2){
        item.parent().addClass('con_two')
        // item.css("width","48%");
      }
      if(lengths==4){
        item.parent().addClass('con_four')
        // item.css("width","48%");
      }
      if(lengths==3){
        item.parent().addClass('con_three')
        // item.css("width","48%");
      }
      if(lengths==1){
        item.parent().addClass('con_one')
        // item.css("width","48%");
      }
      if(lengths==5){
        item.parent().addClass('con_five')
        // item.css("width","48%");
      }
      if(lengths==6){
        item.parent().addClass('con_six')
        // item.css("width","48%");
      }
      if(lengths==7){
        item.parent().addClass('con_sev')
        // item.css("width","48%");
      }
      if(lengths==8){
        item.parent().addClass('con_ent')
        // item.css("width","48%");
      }

    });
    $(function(){
      var item= $(".porlist-pro .itemshow");
      var lengths =item.length;
      //console.log(lengths);
      if(lengths==2){
        item.parent().addClass('con_two')
        // item.css("width","48%");
      }
      if(lengths==4){
        item.parent().addClass('con_four')
        // item.css("width","48%");
      }
      if(lengths==3){
        item.parent().addClass('con_three')
        // item.css("width","48%");
      }
      if(lengths==1){
        item.parent().addClass('con_one')
        // item.css("width","48%");
      }
      if(lengths==5){
        item.parent().addClass('con_five')
        // item.css("width","48%");
      }
      if(lengths==6){
        item.parent().addClass('con_six')
        // item.css("width","48%");
      }
      if(lengths==7){
        item.parent().addClass('con_sev')
        // item.css("width","48%");
      }
      if(lengths==8){
        item.parent().addClass('con_ent')
        // item.css("width","48%");
      }

    });


// 菜单按钮1个隐藏 ，大于1个显示
$(function(){
  var menulenth = $(".yun-detail .detbtm-md ul li").length;
  if(menulenth != 1){
    // console.log(menulenth);
    $(".yun-detail .detbtm-md").css("display","block");
  }else{
    $(".yun-detail .detbtm-md").css("display","none");
  }
});

// 修改TAB二级导航--个数显示隐藏
$(function(){
  var lengths = $(".yun_moremenu .detbtm-md ul li").length;
  if(lengths >= 2){
    // console.log(lengths);
    $(".yun_moremenu").css("display","block");
  }else{
    $(".yun_moremenu").css("display","none");
  }
})

// 修改轮播文字高度
$(function(){
  if($(window).width()>768){
    setTimeout(function(){
      maxHeight($('.zsj_container .slide-main .slidepd'))
    },10)
      
  }
  function maxHeight(DomH){
      DomH.attr("style", "");
      var narray = new Array();
      DomH.each(function () {
        narray.push($(this).innerHeight());
      })
      DomH.css({ "height": Math.max.apply(null, narray)})
    }
})
