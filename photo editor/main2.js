let uploadImgBox = document.querySelector('.upload_img_box');
let selectedImage = document.querySelector('#selectedImage');
let imageHolder = document.querySelector('.image_holder');
let clearAll = document.querySelector('#clearAll');
let slider = document.querySelectorAll('.slider');
let showValue = document.querySelectorAll('.show_value')
let chooseImage = document.querySelector('.choose_image');
let image = document.querySelector('#image');
let listOptions = document.querySelectorAll("ul li");
let options = document.querySelector('.options');
let option = document.querySelectorAll('.option');
let canvas = document.querySelector('#image_canvas');
let ctx = canvas.getContext('2d');
let removeImage = document.querySelector('#remove_img_btn');

let fileName;
let edited = false;

uploadImgBox.addEventListener('click',function(){
    selectedImage.click();
});
selectedImage.addEventListener('change',function(){
    const file = this.files[0];

    if(file){
        const readfile = new FileReader();
        fileName = file.name;
        chooseImage.style.display = "none";
        imageHolder.style.display = "block";
    
        readfile.addEventListener('load',function(){
           image.setAttribute('src',this.result);
        });
        readfile.readAsDataURL(file);
        removeImage.style.display= 'block';
    }
    if (edited == false) {
        edited = true;
      }
})
let editImage = function(){
    let bright = document.querySelector("#brightness");
    let blur = document.querySelector("#blur");
    let grey = document.querySelector("#greyScale");
    let hue = document.querySelector("#hue");
    let saturation = document.querySelector("#saturation");
  
    let brightValShow = document.querySelector("#brightVal");
    let blurValShow = document.querySelector("#blurVal");
    let greyValShow = document.querySelector("#greyVal");
    let hueValShow = document.querySelector("#hueVal");
    let saturationValShow = document.querySelector("#saturationVal");
  
    let brightVal = bright.value;
    let greyVal = grey.value;
    let blurVal = blur.value;
    let hueVal = hue.value;
    let saturationVal = saturation.value;
  
    brightValShow.innerHTML = brightVal;
    blurValShow.innerHTML = blurVal;
    greyValShow.innerHTML = greyVal;
    hueValShow.innerHTML = hueVal;
    saturationValShow.innerHTML = saturationVal;
  
    image.style.filter ="grayscale(" +greyVal +"%) hue-rotate(" +hueVal +"deg) brightness(" +brightVal +"%) blur(" +blurVal +"px) saturate(" +saturationVal +")";
    ctx.filter ="grayscale(" +greyVal +"%) hue-rotate(" +hueVal +"deg) brightness(" +brightVal +"%) blur(" +blurVal +"px) saturate(" +saturationVal +")";
    clearAll.style.transform = "translateY(0px)";
}
for (let i = 0; i <= slider.length - 1; i++) {
    slider[i].addEventListener("input", editImage);
  }
  listOptions.forEach((list_option, index) => {
    list_option.addEventListener("click", function () {
        if (image.getAttribute("src") == "") {
          alert("Select Image !");
        } else {
          options.style.transform = "translateY(0px)";
    
          if (edited == true) {
            canvas.height = image.naturalHeight;
            canvas.width = image.naturalWidth;
            for (let i = 0; i <= 4; i++) {
                if (index != i) {
                  listOptions[i].classList.remove("active_option");
                  option[i].classList.remove("active_controller");
                } else {
                  this.classList.add("active_option");
                  option[i].classList.add("active_controller");
                }
              }
            } else {
              alert("Edit Your Image First");
            }
}
});
});

function Download_btn() {
    if (image.getAttribute("src") != "") {
      if (edited == true) {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        var jpegUrl = canvas.toDataURL("image/jpg");
  
        const link = document.createElement("a");
        document.body.appendChild(link);
  
        link.setAttribute("href", jpegUrl);
        link.setAttribute("download", fileName);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
  clearAll.addEventListener("click", function () {
    clearAllRangeValue();
  });

  function clearAllRangeValue() {
    image.style.filter = "none";
    ctx.filter = "none";
  
    for (let i = 0; i <= slider.length - 1; i++) {
      if (i == 0) {
        slider[i].value = "100";
      } else {
        slider[i].value = "0";
      }
    }
  
    editImage();
    clearAll.style.transform = "translateY(150px)";
  }
  
  removeImage.addEventListener("click", function () {
    image.src = "";
    this.style.display = "none";
    chooseImage.style.display = "block";
    imageHolder.style.display = "none";
    options.style.transform = "translateY(80px)";
    clearAllRangeValue();
  });
  