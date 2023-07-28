function startQuiz(category) {
    if (category === 'General Knowledge') {
      const quizContainer = document.getElementById('quiz-container');
      quizContainer.innerHTML = '';
  
      const questions = [
        {
          question: 'What is the capital of France?',
          choices: ['London', 'Paris', 'Berlin', 'Rome'],
          correctAnswer: 'Paris'
        },
        {
          question: 'Which planet is known as the "Red Planet"?',
          choices: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
          correctAnswer: 'Mars'
        },
        {
          question: 'What is the largest mammal on Earth?',
          choices: ['Elephant', 'Blue Whale', 'Giraffe', 'Lion'],
          correctAnswer: 'Blue Whale'
        },
        {
          question: 'What is the chemical symbol for water?',
          choices: ['O2', 'H2O', 'CO2', 'N2'],
          correctAnswer: 'H2O'
        },
        {
          question: 'Who wrote the play "Romeo and Juliet"?',
          choices: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Leo Tolstoy'],
          correctAnswer: 'William Shakespeare'
        }
      ];
  
      let quizContent = '<h2>General Knowledge Quiz</h2>';
      for (let i = 0; i < questions.length; i++) {
        const questionObj = questions[i];
        quizContent += `<p>${i + 1}. ${questionObj.question}</p>`;
        questionObj.choices.forEach((choice, index) => {
          quizContent += `<input type="radio" name="question${i}" value="${choice}" id="q${i}c${index}">
                         <label for="q${i}c${index}">${choice}</label><br>`;
        });
      }
  
      quizContent += '<button onclick="submitQuiz()">Submit Quiz</button>';
      quizContainer.innerHTML = quizContent;
    }
  }
  
  function submitQuiz() {
    const questions = [
      {
        question: 'What is the capital of France?',
        choices: ['London', 'Paris', 'Berlin', 'Rome'],
        correctAnswer: 'Paris'
      },
      {
        question: 'Which planet is known as the "Red Planet"?',
        choices: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
      },
      {
        question: 'What is the largest mammal on Earth?',
        choices: ['Elephant', 'Blue Whale', 'Giraffe', 'Lion'],
        correctAnswer: 'Blue Whale'
      },
      {
        question: 'What is the chemical symbol for water?',
        choices: ['O2', 'H2O', 'CO2', 'N2'],
        correctAnswer: 'H2O'
      },
      {
        question: 'Who wrote the play "Romeo and Juliet"?',
        choices: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Leo Tolstoy'],
        correctAnswer: 'William Shakespeare'
      }
    ];
  
    let correctAnswers = 0;
  
    for (let i = 0; i < questions.length; i++) {
      const questionObj = questions[i];
      const selectedChoice = document.querySelector(`input[name="question${i}"]:checked`);
  
      if (selectedChoice) {
        const userAnswer = selectedChoice.value;
        if (userAnswer === questionObj.correctAnswer) {
          correctAnswers++;
        }
      }
    }
  
    if (correctAnswers === questions.length) {
      alert("Congratulations! You answered all questions correctly!");
    } else {
      alert(`You answered ${correctAnswers} out of ${questions.length} questions correctly.`);
    }
  }
  