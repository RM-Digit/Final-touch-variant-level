jQuery(document).ready(function(){ 
    //Carousel for Normal window
    console.log('CUSTOM CAROUSEL');
    var total_prod1=jQuery('.totalprod').val();
    console.log('total_prod1:'+total_prod1);
    var itemWidth1 = $('.ccarousel .mainn ul.inner li').width();
    console.log('itemWidth1:'+itemWidth1);
    var ulwid1= total_prod1*238;
    jQuery('.ccarousel .mainn ul.inner').css({"width":ulwid1+"px"});
    //Next Button Code
    var i=0;
    var s=1;
    jQuery('.btn1').click(function(){
        var nxt = ulwid1-952;
        i=i-238;

        if(i==-nxt){
           i=0;
        }

        jQuery('.ccarousel .inner').animate({'margin-left':i});

    });
    //previous Button Code
    z=1;
    jQuery('.btn2').click(function(){
        var pr = ulwid1-1190;
        i=i+238;
        //console.log(pr);
       // console.log(i);
        if(i==238){
          i=-pr;
        }
        jQuery('.ccarousel .inner').animate({'margin-left':i});
    });

  //Code for Mobile Devices

 
    if (window.matchMedia('(width: 320px)').matches) {

       $('.ccarousel .mainn ul').removeClass('inner').addClass('inner_320');
       $('.ccarousel .btn1').removeClass('btn1').addClass('resbtn')
       var total_prod1=jQuery('.totalprod').val();
       var ulwid1= total_prod1*292;
       jQuery('.ccarousel .inner_320').css({"width":ulwid1+"px"});
       var ml=0;
       
       jQuery('.ccarousel .resbtn').click(function(){  
           var nxt = ulwid1-0;
            ml=ml-292;
          //  console.log(nxt);
         //   console.log(ml);
            if(ml==-nxt){
              ml=0;
            }
            jQuery('.ccarousel .mainn .inner_320').animate({'margin-left':ml});
        });
        var mpr=0; 
        jQuery('.btn2').click(function(){

        var pr = ulwid1-292;
        mpr=mpr+292;
        if(mpr==292){
          mpr=-pr;
        }
        jQuery('.ccarousel .inner_320').animate({'margin-left':mpr});

        });
    }else if(window.matchMedia('(width: 360px)').matches) {

       $('.ccarousel .mainn ul').removeClass('inner').addClass('inner_320');
       $('.ccarousel .btn1').removeClass('btn1').addClass('resbtn')
       var total_prod1=jQuery('.totalprod').val();
       var ulwid1= total_prod1*292;
       jQuery('.ccarousel .inner_320').css({"width":ulwid1+"px"});
       var ml=0;
       
       jQuery('.ccarousel .resbtn').click(function(){  
           var nxt = ulwid1-0;
            ml=ml-292;
           // console.log(nxt);
           // console.log(ml);
            if(ml==-nxt){
              ml=0;
            }
            jQuery('.ccarousel .mainn .inner_320').animate({'margin-left':ml});
        });
        var mpr=0; 
        jQuery('.btn2').click(function(){

        var pr = ulwid1-292;
        mpr=mpr+292;
        if(mpr==292){
          mpr=-pr;
        }
        jQuery('.ccarousel .inner_320').animate({'margin-left':mpr});

        });
    }
    else if(window.matchMedia('(width: 768px)').matches) {

       $('.ccarousel .mainn ul').removeClass('inner').addClass('inner_320');
       $('.ccarousel .btn1').removeClass('btn1').addClass('resbtn')
       var total_prod1=jQuery('.totalprod').val();
       var ulwid1= total_prod1*219;
       jQuery('.ccarousel .inner_320').css({"width":ulwid1+"px"});
       var mll=0;
       
       jQuery('.ccarousel .resbtn').click(function(){  
           var nxt = ulwid1-438;
            mll=mll-219;
            console.log(nxt);
            console.log(mll);
            if(mll==-nxt){
              mll=0;
            }
            jQuery('.ccarousel .mainn .inner_320').animate({'margin-left':mll});
        });
        var mpr=0; 
        jQuery('.btn2').click(function(){

        var pr = ulwid1-657;
        mpr=mpr+219;
        if(mpr==219){
          mpr=-pr;
        }
        jQuery('.ccarousel .inner_320').animate({'margin-left':mpr});

        });
    }
});