const choises =["rock","paper","sicssor"]
const btn = document.querySelectorAll("button")
btn.forEach(item => {
    item.addEventListener("click",function(){
        const random =Math.round(Math.random()*2)
        const computerChoises =choises[random]
    })
})