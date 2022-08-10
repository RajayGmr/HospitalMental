$(document).ready(function(){
  // Start Header Section

  // Start Banner Section
  $(".carousel").carousel({
    //Interval:1000;
  })
  // End Banner Section

  // End Header Section

  // Start Info Section
  $(window).scroll(function(){
    let getscrollpoint=$(this).scrollTop();
    if(getscrollpoint>=220){
      $(".infotexts").addClass("fromlefts");
      $(".infopics").addClass("fromrights");
    }else{
      $(".infotexts").removeClass("fromlefts");
      $(".infopics").removeClass("fromrights");
    }
  })
  // End Info Section

  //Start ADV Section
  $("#videos").click(function(){
    var getmodal=$(this).data("bs-target");
    var getvideosrc=$(this).data("video");
    var videourlwithauto=getvideosrc+"?autoplay=1";
    $(getmodal + " iframe").attr("src",videourlwithauto);

    $(getmodal + " button.btn-close").click(function(){
      $(getmodal + " iframe").attr("src",getvideosrc);
    });

    $(getmodal).click('hidden.bs.modal',function(){
      $(getmodal+ " iframe").attr("src",gettvideosrc);
    })
  });
  //End ADV Section

  //Start Premises Section
  $("#lightslider").lightSlider({
    auto:true,
    item:4,
    loop:true,
    slideMove:1,
    speed:600
  });
  //End Premises Section

  //Start Pricing Section
  $(window).scroll(function(){
    let getscroll=$(this).scrollTop();
    //alert(getscroll);
    if(getscroll>=1900){
      $(".cardones").addClass("movelefts");
      $(".cardtwos").addClass("movebottoms");
      $(".cardthrees").addClass("moverights");
    }else{
      $(".cardones").removeClass("movelefts");
      $(".cardtwos").removeClass("movebottoms");
      $(".cardthrees").removeClass("moverights");
    }
  });
});
//End Pricing Section

//Start Join Us Section
$('.accordion').accordion();
//End Join Us section


//start Footer Section
$('#getyear').text(new Date().getUTCFullYear());
//End footer Section

//Start Progress
$(window).scroll(function(){
  var getprogrss=$("#progress");
  var getprogrssval=$('#progressvalues');
  var getscrolltop=$(this).scrollTop();
  //console.log(getscrolltop);
  var getscrollheight=$(document).height();
  //console.log(getscrollheight);
  var getclientheight=$(window).height();
  //console.log(getclientheight);
  var calcheight=getscrollheight-getclientheight;
  var getfinalheight=Math.round(getscrolltop*100/calcheight);
  //console.log(getfinalheight);
  getprogrssval.text(`${getfinalheight}%`);
  getprogrss.css({
    "background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
  })
});
//End Progress

//by js
// var getscrollheight=document.documentElement.scrollHeight;
// var getclientheight=document.documentElement.clientHeight;
// var clacheight=getscrollheight-getclientheight;
// var getfinalheight=Math.round(getscrolltop*100/calcheight);
