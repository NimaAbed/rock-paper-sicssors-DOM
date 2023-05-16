const choises =["rock","paper","sicssor"]
const random =Math.round(Math.random()*2)
const btn = document.querySelectorAll("button")
btn.forEach(item => {
    item.addEventListener("click",function(){
        console.log(item)
    })
})