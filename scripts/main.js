document.addEventListener('DOMContentLoaded', function(){
    /* 小塚ゴシック */
    (function(d) {
        var config = {
        kitId: 'vmm1jiv',
        scriptTimeout: 3000,
        async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);

    /* scrollin */
    $(function(){
        $(window).scroll(function (){
            $('.fadein').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 50){
                    $(this).addClass('scrollin');
                }
            });
        });
    });
    
    /* ページ内リンク */
    $(function(){
        $('a[href^="#"]').click(function(){
            var adjust = 0;
            var speed = 500;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top + adjust;
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
    });

    new Hamburger();
    new HeroSlider('.swiper-container');
});