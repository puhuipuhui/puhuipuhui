//测试 是否引入
//  alert('')
// 头部大背景元素
// 获取每个页面共同元素 body_wrap
var body_wrap = document.querySelector('#body-wrap')
// 记录是否创建元素
// 是否首页
// 原生 jS 没有链式编程，因此分别存储
var navNode = body_wrap.firstElementChild
var navClassName = navNode.className
// console.log(navClassName)
var flag = false;
// 内容块

// console.log(layoutPage.offsetTop)
// var topsize = bgUp.scrollTop
var ceilingLamp
// console.log(window.clientHeight)
if (window.pageYOffset >= 0) {
  // flag = true
  // var node = document.createElement("div");
  // var contentnode = document.createElement("img")
  // node.className = "ceilingLamp"
  // bgUp.appendChild(node)
  // node.appendChild(contentnode)
  ceilingLampF()
  clacHeight(ceilingLamp, flyNode)
}
document.addEventListener('scroll', function () {
  console.log(window.pageYOffset)
  if (window.pageYOffset >= 0 && flag == false) {
    ceilingLampF()
  } else if (window.pageYOffset >= 0) {
    clacHeight(ceilingLamp, flyNode)
  } else {
    console.log('隐藏吊灯')
  }
})




//  吊灯动态高度
function clacHeight(postNode, flyNode) {

  // window.pageYOffset : 是窗口被卷曲的长度
  var extent = window.pageYOffset
  if (navClassName == "full_page") {
    postNode.style.height = extent - 500 + "px"
    flyNode.style.top = postNode.style.height
  } else {
    postNode.style.height = extent + "px"
    flyNode.style.top = postNode.style.height

  }

}

// // 飞行高度
// function flyHeight(node){

// }

//创建元素
function ceilingLampF() {
  flag = true
  var NewNode = document.createElement("div");
  var contentnode = document.createElement("div")

  NewNode.className = "ceilingLamp"
  navNode.appendChild(NewNode)

  contentnode.className = "fly"
  NewNode.appendChild(contentnode)

  ceilingLamp = document.querySelector(".ceilingLamp")
  flyNode = document.querySelector(".fly")
}
