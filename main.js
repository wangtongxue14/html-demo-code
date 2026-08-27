//按钮点击弹出班级口号
const welcomeBtn = document.getElementById('welcomeBtn');
const tipBox = document.getElementById('tipBox');

welcomeBtn.addEventListener('click',function(){
    tipBox.innerText = "十班十班，奋勇争先；凝心聚力，共创辉煌！";
});

//平滑滚动导航
document.querySelectorAll('nav a').forEach(item=>{
    item.addEventListener('click',function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetDom = document.querySelector(targetId);
        if(targetDom){
            targetDom.scrollIntoView({behavior:'smooth'});
        }
    })
})

//页面加载打印日志
window.addEventListener('load',()=>{
    console.log("10班班级网站加载完成🎉");
})