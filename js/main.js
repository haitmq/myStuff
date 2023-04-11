// myArr = [
//   "./img/bird-7897321_960_720.jpg",
//   "./img/butterfly-7767228_960_720.jpg",
//   "./img/doves-7892723_960_720.jpg",
//   "./img/iguana-7833655_960_720.jpg",
//   "./img/spider-7508942_960_720 (4).jpg",
// ];

myArr = [
  "https://cdn.pixabay.com/photo/2023/03/22/20/16/muffin-7870491_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/01/24/17/27/flower-7741687_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/01/23/21/11/apple-7739714_960_720.jpg",
  "https://cdn.pixabay.com/photo/2023/03/31/14/16/spruce-needles-7890105_960_720.jpg",
];

let arrleng = myArr.length;

console.log(arrleng);

var myImg = document.getElementById("slide");

let buttonArr = document.getElementsByTagName("button");
// test
console.log(buttonArr);

let imgIndex = 0;

function nextFunc() {
  imgIndex++;
  if (imgIndex >= arrleng) {
    imgIndex = 0;
  }
  myImg.src = myArr[imgIndex];
}

function prevFunc() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = arrleng - 1;
  }
  myImg.src = myArr[imgIndex];
}
