function myFunction() {
    document.getElementById("myDropdown").classList.toggle("s_show");
    document.querySelector('.burger_bg').classList.toggle('active')
    document.querySelector('.button_btn').classList.toggle('active')
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

