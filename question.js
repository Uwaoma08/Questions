const question1 = document.getElementById('question1')
const question2 = document.getElementById('question2')
const question3 = document.getElementById('question3')
const answer1 = document.getElementById('answer1')
const answer2 = document.getElementById('answer2')
const answer3 = document.getElementById('answer3')


question1.addEventListener('click', ()=> {
    answer1.classList.toggle('hide')
})

question2.addEventListener('click', ()=> {
    answer2.classList.toggle('hide')
})

question3.addEventListener('click', ()=> {
    answer3.classList.toggle('hide')
})
