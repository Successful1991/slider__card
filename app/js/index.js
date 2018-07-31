window.addEventListener('load', function () {
  let sliderImage = document.querySelectorAll('.slider > div');
  let slider = {
    position:{
      active1: 0,
      active2: sliderImage.length-1,
      active3: sliderImage.length-2
    },
    left:function () {
      for(let key in this.position){
        if(this.position[key] !== sliderImage.length-1){
          this.position[key] +=1;
        }else{
          this.position[key] = 0;
        }
      }
      sliderImage[slider.position.active1].classList.add('active1','firstLeft');
      sliderImage[slider.position.active2].classList.add('active2','twoLeft');
      sliderImage[slider.position.active3].classList.add('active3','threeLeft');
    },
    right:function () {

      for(let key in this.position){
        if(this.position[key] !== 0){
          this.position[key] -=1;
        }else{
          this.position[key] = sliderImage.length-1;
        }
      }

      sliderImage[slider.position.active1].classList.add('active1','twoRight');
      sliderImage[slider.position.active2].classList.add('active2','threeRight');
      sliderImage[slider.position.active3].classList.add('active3','fourRight');

      if(slider.position.active1 === sliderImage.length-1 ){
        sliderImage[0].classList.add('firstRight');
      }else{
        sliderImage[slider.position.active1+1].classList.add('firstRight');
      }
    }

  };



  function sliderClassInit() {
    sliderImage[slider.position.active1].classList.add('active1','firstLeft');
    sliderImage[slider.position.active2].classList.add('active2','twoLeft');
    sliderImage[slider.position.active3].classList.add('active3','threeLeft');
  }

  function swipeLeft() {
    sliderImage.forEach(image=>{
      image.removeAttribute('class');
    });
    slider.left();
  }

  function swipeRight() {
    console.log('swipeRight()');
    sliderImage.forEach(image=>{
      image.removeAttribute('class');
    });
    slider.right();
  }

  sliderClassInit();


document.getElementById('slideLeft').addEventListener('click',swipeLeft);
document.getElementById('slideRight').addEventListener('click',swipeRight);

});