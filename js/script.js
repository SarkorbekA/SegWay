function myFunction() {
    document.getElementById("myDropdown").classList.toggle("s_show");
    document.querySelector('.burger_bg').classList.toggle('active')
    document.querySelector('.button_btn').classList.toggle('active')
    document.querySelector("body").classList.toggle('active')
}

  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }



const main = document.querySelectorAll('.ops div');

for(let i = 0; i < main.length; i++){
    main[i].addEventListener('click', function() {
        for(let ix = 0; ix < main.length; ix++){
            main[ix].classList.remove('active');
        }
        tabsNew(this);
    })
}
function tabsNew(main) {
    main.classList.add('active');
} ;

const right = document.querySelector('.right');
const left = document.querySelector('.left');

right.onclick = () => {
    document.querySelector('.ops').scrollLeft += 150;
};
left.onclick = () => {
    document.querySelector('.ops').scrollLeft -= 150;
};


const link = document.querySelectorAll('.box_active');
const img = document.querySelectorAll('.hide_img');
const saw = document.querySelectorAll('.saw_img');
const p = document.querySelectorAll('.box_active p')
const content = document.querySelectorAll('.content')
for(let i = 0; i < link.length; i++){
    link[i].addEventListener('click', function() {
        for(let ix = 0; ix < link.length; ix++){
            link[ix].classList.remove('active');
            saw[ix].classList.remove('active');
            p[ix].classList.remove('active');
            img[ix].classList.remove('active');
            content[ix].classList.remove('active');
        }
        link[i].classList.add('active');
        saw[i].classList.add('active');
        p[i].classList.add('active');
        img[i].classList.add('active');
        content[i].classList.add('active');
    });
}

const wrap_btn = document.querySelector('.author_text_a')
const wrap = document.querySelector('.buy_scene')
const back = document.querySelector('.reg_back')
const body = document.querySelector("body");

wrap_btn.addEventListener('click' , function() {
  wrap.style.display = 'flex'
  body.classList.add('active')
})

back.addEventListener('click' , function(){
  wrap.style.display = 'none'
  body.classList.remove('active')
})


const circle = document.querySelectorAll('.dropdown-content a');

for(let i = 0; i < circle.length; i++){
    circle[i].addEventListener('click', function() {
        body.classList.remove('active')
        document.getElementById("myDropdown").classList.remove("s_show");
        document.querySelector('.burger_bg').classList.remove('active')
        document.querySelector('.button_btn').classList.remove('active')
    })
}




















// const left_btn = document.querySelector('.btn_left')
// const right_btn = document.querySelector('.btn_right')
// const img = document.querySelectorAll('.slider div')
// let i = 0;

// right_btn.addEventListener('click' ,  function() {
//     img[i].classList.remove('active');
//     i++;
//     if(i == img.length){
//         i=0;
//     }
//     img[i].classList.add('active');
// })

// left_btn.addEventListener('click' , function() {
//     img[i].classList.remove('active');
//     i--;
//     if(i < 0){
//         i = img.length - 1;
//     }
//     img[i].classList.add('active');
// })

