const choises =["rock","paper","sicssor"]
const btn = document.querySelectorAll("button")
btn.forEach(item => {
    item.addEventListener("click",function(){
        const random =Math.round(Math.random()*2)
        const computerChoises =choises[random]
        if(item.id === computerChoises){
            console.log(`It's Tie || Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
        }else if(item.id === "rock"){
            if(computerChoises === "sicssor"){
                console.log(`You Win!||Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
            }else{
                console.log(`You Lose!||Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
            }
        }else if(item.id === "paper"){
            if(computerChoises === "rock"){
                console.log(`You Win!||Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
            }else{
                console.log(`You Lose!||Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
            }
        }else if(item.id === "sicssor"){
            if(computerChoises === "paper"){
                console.log(`You Win!||Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
            }else{
                console.log(`You Lose!||Your Choise Is ${item.id} & Computer Choise Is ${computerChoises}`)
            }
        }
    })
})