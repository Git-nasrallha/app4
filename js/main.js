
$(function(){
    $(window).scroll(function(){
       let pageHeigth= $(window).scrollTop();
       if(pageHeigth>=500){
           $("#navbar").css({
               position:"fixed",
               background:"#333",
               width:"100%",
               "z-index":"9999"
           })
       }else{
        $("#navbar").css({
            position:"static",
            background:"none",
        })
       }
    })
});
let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 2000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element. 
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".feature > h4");
  }
});


