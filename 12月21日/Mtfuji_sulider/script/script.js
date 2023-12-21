//初期化
const slide = document.querySelector(".slide")
const images = document.querySelectorAll(".slide img")//グローバル変数

console.log(images[images.length - 1]);//４番目の画像がほしい
console.log(images)//初期値

//div="slide"の中の最後の画像[images.length - 1], images[0]の前
// insertBeforeはappendChildの逆、前にいれる
slide.insertBefore(images[images.length - 1], images[0]);


//button 左

const leftBtn = document.querySelector(".leftBtn");


const leftSlider = () => {



    const slideimages = document.querySelectorAll(".slide img");
    slideimages[1].removeAttribute("style");//要素を消す
    slideimages[0].style.marginLeft = "0"
    slide.insertBefore(slideimages[slideimages.length - 1], slideimages[0]);
}



leftBtn.addEventListener("click", leftSlider);

//button 右
const rightBtn = document.querySelector(".rightBtn");

const rightSlider = () => {
    //ローカル変数(このブロックの中でしか使えない)
    const slideimages = document.querySelectorAll(".slide img");
    console.log(slideimages)//クリックした時点でのhtml
    slide.appendChild(slideimages[0]);//左側の余分な画像を最後に移動、入っているstyle属性を削除
    slideimages[1].removeAttribute("style");//要素を消す


}

rightBtn.addEventListener("click", rightSlider);

window.setInterval(rightSlider, 3000);//3000ミリ秒=3秒
