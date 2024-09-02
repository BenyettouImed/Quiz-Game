const q1 = {
    question : 'Which is the largest animal in the world',
    options :['shark', 'Blue Whale', 'Elephant', 'Giraffe'],
    correct : 'Blue Whale',
    
}
const q2 = {
    question : 'Who won the first football world cup',
    options: ['Brazil', 'Germany', 'Uruguay', 'Argentina'],
    correct : 'Uruguay'
}
const q3 = {
    question : 'What year was C language released',
    options: ['1969', '1972', '1975', '1980'],
    correct : '1972'
}
const q4 = {
    question : 'When was steave jobs born',
    options: ['1955', '1950', '1960', '1965'],
    correct : '1955'
}
const q5 = {
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'],
    correct: 'Canberra'
};
const q6 = {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correct: 'Mars'
};
const q7 = {
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Mark Twain', 'F. Scott Fitzgerald', 'Ernest Hemingway'],
    correct: 'Harper Lee'
};
const q8 = {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correct: 'Pacific Ocean'
};
const q9 = {
    question: 'Which element has the chemical symbol "O"?',
    options: ['Oxygen', 'Gold', 'Osmium', 'Oxalate'],
    correct: 'Oxygen'
};
const q10 = {
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
    correct: 'Leonardo da Vinci'
};
const qArr = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
const que =document.querySelector('#question');
const answerA = document.querySelector('#a');
const answerB = document.querySelector('#b');
const answerC = document.querySelector('#c');
const answerD = document.querySelector('#d');
const nextQuestion = document.querySelector('#next');
const allAnswers = document.querySelectorAll('.ans');
const buttonDiv  = document.querySelector('#buttonDiv');
let option;
let answerField;
let id = 0;
let score = 0;

const disableButtons = (btns) =>{
    btns.forEach(element => {
        element.disabled = true;
        element.classList.add('cursor-not-allowed')
    });
}
const enableButtonsAndRemoveBg = (btns) =>{
    btns.forEach(element => {
        element.disabled = false;
        element.classList.remove('bg-green-300');
        element.classList.remove('bg-red-300');
        element.classList.remove('cursor-not-allowed')
    });
}

const checkAnswer = (selectedOption, answerField, index)=>{
    if (selectedOption === qArr[index].correct){
        answerField.classList.add('bg-green-300');
        score++;
    }
    else{
        answerField.classList.add('bg-red-300');
    }  
    disableButtons(allAnswers); 
}


    
answerA.addEventListener('click', (event) =>{
    option = event.target.textContent;
    checkAnswer(option, answerA, id);
    Array.from(buttonDiv.children).forEach(element =>{
        if (element.textContent === qArr[id].correct){
            element.classList.add('bg-green-300');
        }
    })
     
})


answerB.addEventListener('click', (event) =>{
    option = event.target.textContent;
    checkAnswer(option, answerB, id);  
    Array.from(buttonDiv.children).forEach(element =>{
        if (element.textContent === qArr[id].correct){
            element.classList.add('bg-green-300');
        }
    })
})
answerC.addEventListener('click', (event) =>{
    option = event.target.textContent;
    checkAnswer(option, answerC, id);  
    Array.from(buttonDiv.children).forEach(element =>{
        if (element.textContent === qArr[id].correct){
            element.classList.add('bg-green-300');
        }
    })
})
answerD.addEventListener('click', (event) =>{
    option = event.target.textContent;
    checkAnswer(option, answerD, id);  
    Array.from(buttonDiv.children).forEach(element =>{
        if (element.textContent === qArr[id].correct){
            element.classList.add('bg-green-300');
        }
    })
})
 
nextQuestion.addEventListener('click', (event) =>{
    id++;
    if (id < qArr.length){
        answerA.textContent = qArr[id].options[0];
        answerB.textContent = qArr[id].options[1];
        answerC.textContent = qArr[id].options[2];
        answerD.textContent = qArr[id].options[3];
        que.textContent = qArr[id].question;
        enableButtonsAndRemoveBg(allAnswers);
    }
    else{
        alert(`your score is ${score}`);
    }

})
        
    //don't foget createElement and appendChild, firstChild,lastChild, removeChild, children
    
    

// Array.from() is a static method in JavaScript that creates a new, shallow-copied array instance from an array-like or iterable object. This method is particularly useful when you need to convert objects like NodeLists, which are returned by methods like document.querySelectorAll, into a proper array so that you can use array methods such as forEach, map, filter, etc. exp array.from(document.querySelectorAll(.'fffd')).foreach(.......)