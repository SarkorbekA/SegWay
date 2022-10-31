const body = document.querySelector("body");

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

const wrap_btn = document.querySelector('.phone_icon')
const wrap = document.querySelector('.buy_scene')
const back = document.querySelector('.reg_back')

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




const product = {
  scooterOne:{
      name:'NINEBOT ENGINE SPEAKER',
      price: 149,
      amount:0,
      get summ(){
          return this.price * this.amount;
      }
  },
  scooterTwo:{
      name:'EXTENSION ROD',
      price: 29,
      amount: 0,
      get summ(){
          return this.price * this.amount;
      }
  },   
  scooterThree:{
      name:'SEGWAY PROTECTIVE GEAR SET',
      price: 29,
      amount: 0,
      get summ(){
          return this.price * this.amount;
      }
  },
  scooterFour:{
    name:'NINEBOT LEISURE BACKPACK',
    price: 69,
    amount: 0,
    get summ(){
        return this.price * this.amount;
    }
  },
  scooterFive:{
    name:'SEGWAY EXTERNAL BATTERY',
    price: 249,
    amount: 0,
    get summ(){
        return this.price * this.amount;
    }
  },
  scooterSix:{
    name:'SEGWAY CHARGER',
    price: 79,
    amount: 0,
    get summ(){
        return this.price * this.amount;
    }
  },
  scooterSeven:{
    name:'SEGWAY SCOOTER BAG',
    price: 49,
    amount: 0,
    get summ(){
        return this.price * this.amount;
    }
  },
  scooterEight:{
    name:'SEGWAY PHONE HOLDER',
    price: 29,
    amount: 0,
    get summ(){
        return this.price * this.amount;
    }
  },
  scooterNine:{
    name:'SEGWAY SEAT',
    price: 119,
    amount: 0,
    basket: 0,
    get summ(){
        return this.price * this.amount;
    }
  },
}

const btnPluseOrMinus = document.querySelectorAll('.main__product-btn');
const checkExtraProduct = document.querySelectorAll('.main__product-checkbox');
const addCart = document.querySelector('.addCart');

for (let i = 0; i < btnPluseOrMinus.length; i++){
    btnPluseOrMinus[i].addEventListener('click', function() {
        PluseOrMinus(this)
    })
}
function PluseOrMinus(element) {
    let parentID = element.closest('.main__product').getAttribute('id');
    let out = element.closest('.main__product').querySelector('.main__product-num');
    let price = element.closest('.main__product').querySelector('.main__product-price span');
if (element.getAttribute('data-symbol') == '+' && product[parentID].amount < 3) {
    product[parentID].amount++;
}
else if(element.getAttribute('data-symbol') == '-' && product[parentID].amount > 0) {
    product[parentID].amount--;
}
out.innerHTML = product[parentID].amount;
price.innerHTML = product[parentID].summ;
}





const receipt = document.querySelector('.receipt');
const receiptWindow = document.querySelector('.receipt__window');
const receiptWindowOut = document.querySelector('.receipt__window-out');
let arrProduct = [];
let totalName = '';
let totalPrice = 0;
let totalAmount = 0;
addCart.addEventListener('click', function() {
    for(const key in product){ 
        const productObj = product[key];
        if(productObj.amount > 0){
            arrProduct.push(productObj);
            for(const newKey in productObj){
                if(productObj[newKey] === true){
                    productObj.name += '\n' +  extraProduct[newKey].name;
                }
            }
        }
        productObj.price = productObj.summ;
        productObj.amount = productObj.amount;
    }
    
    for (let i = 0; i < arrProduct.length; i++) {
        const el = arrProduct[i];
        totalPrice += el.price;
        totalName += '\n' + el.name + '\n';
        totalAmount += el.amount;
    }

    receiptWindowOut.innerHTML = `<p class="color_js_two">You bought:</p> \n  ${totalName} \n \n <p class="color_js">Buying cost:</p> ${totalPrice}$ \n \n <p class="color_js"> Amount:</p> ${totalAmount}pcs`;

    receipt.style.display = 'flex';

    body.classList.add('active')

    setTimeout(function() {
        receiptWindow.style.top = '10%';
    }, 500);
})

const backto = document.querySelector('.receipt_back')

backto.addEventListener('click' , function() {
  body.classList.remove('active')
  receipt.style.display = 'none';
})

function refreshPage(){
  window.location.reload();
} 
// const backt = document.querySelector('.receipt')
// backt.addEventListener('click' , function() {
//   body.classList.remove('active')
//   receipt.style.display = 'none';
// })




















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

