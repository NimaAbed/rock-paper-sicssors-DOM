const choises =["rock","paper","sicssor"]
const btn = document.querySelectorAll("button")
const ul = document.createElement("ul")
const cont = document.querySelector(".container") 
const myS=document.querySelector(".myS span")
const computerS=document.querySelector(".computerS span")
btn.forEach(function(item) {
    item.addEventListener("click",function(){
        const random =Math.round(Math.random()*2)
        const computerChoises =choises[random]
        const li = document.createElement("li")
        if(item.id === computerChoises){
            console.log(`It's Tie || Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
            li.innerText =`It's Tie || Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`
        }else if(item.id === "rock"){
            if(computerChoises === "sicssor"){
                console.log(`You Win!||Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
                li.innerText =`You Win!|| Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`
                myS.innerText ++
            }else{
                console.log(`You Lose!||Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
                li.innerText=`You Lose!|| Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`
                computerS.innerText ++
            }
        }else if(item.id === "paper"){
            if(computerChoises === "rock"){
                console.log(`You Win!||Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
                li.innerText =`You Win!|| Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`
                myS.innerText ++
            }else{
                console.log(`You Lose!||Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
                li.innerText=`You Lose!|| Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`
                computerS.innerText ++
            }
        }else if(item.id === "sicssor"){
            if(computerChoises === "paper"){
                console.log(`You Win!||Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
                li.innerText=`You Win!|| Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`
                myS.innerText ++
            }else{
                console.log(`You Lose!||Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
                li.innerText =`You Lose!|| Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`
                computerS.innerText ++
            }
        }
        ul.appendChild(li)
        console.log(ul)
        
    })
    
})
cont.appendChild(ul)