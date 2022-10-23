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
