document.addEventListener('DOMContentLoaded', () => {
    const radioValues = document.querySelectorAll('input[name="choice"]')
    const generateBtn = document.querySelector('.btn')
    let dropDwnValue = document.getElementById('list')


    const philosophyQuotes = [
        "The unexamined life is not worth living.",
        "Entities should not be multiplied unnecessarily.",
        "I think therefore I am.",
        "We live in the best of all possible worlds.",
        "The owl of Minerva spreads its wings only with the falling of the dusk.",
        "God is dead.",
        "Who is also aware of the tremendous risk involved in faith – when he nevertheless makes the leap of faith – this is subjectivity … at its heigh.",
        "There is but one truly serious philosophical problem, and that is suicide.",
        "One cannot step twice in the same river.",
        "The life of man is solitary, poor, nasty, brutish, and short."
    ]

    const funnyQuotes = [
        "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
        "If I were two-faced, would I be wearing this one?",
        "The best thing about the future is that it comes one day at a time",
        "The only mystery in life is why the kamikaze pilots wore helmets.",
        "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
        "Nobody realizes that some people expend tremendous energy merely to be normal.",
        "The difference between stupidity and genius is that genius has its limits.",
        "Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed.",
        "War is God’s way of teaching Americans geography.",
        "The average dog is a nicer person than the average person."
    ]

    
    /* button onclick events to genarate the quotes */
    generateBtn.addEventListener('click', () => {
       let choice = checkSelectedValue()
    
       if (choice === 'philosophy'){
           console.log('philosphy')
           generatePhilosophyQuotes()
       }
       else if (choice === 'funny'){
           console.log('funny');
           generateFunnyQuotes()
       }
    })


    /* Get value inside the dropdown list */
    function getDropdownvalue(){
        return dropDwnValue.value
    }


    /* Verify wich dropdown list is selected */
    function checkSelectedValue(){
        let selectedChoice
        for(rv of radioValues){
            if (rv.checked){
                selectedChoice = rv.value
                break
            }
        }
        return selectedChoice
    }

    function generatePhilosophyQuotes(){
        let i = 0
        while (i < getDropdownvalue()){
            let randomIndex = Math.floor(Math.random() * philosophyQuotes.length)
            console.log(`${philosophyQuotes[randomIndex]}`)
            i++
            
        }   
    }

    
    function generateFunnyQuotes(){
        let i = 0
        while (i < getDropdownvalue()){
            let randomIndex = Math.floor(Math.random() * funnyQuotes.length)
            console.log(`${funnyQuotes[randomIndex]}`)
            i++
            
        }    
    }
})