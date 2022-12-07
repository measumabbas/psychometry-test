import React, { useState } from 'react'
import './quiz.css'
const Quiz = () => {
    const questions = [
		{
			questionText: 'Nothing can be done to stop people from making the attempt once they have made up their minds to kill themselves',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: false },
				{ answerText: "Don't know", isCorrect: true }
			],
		},
		{
			questionText: 'Most people who suicide are psychotic',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: false },
				{ answerText: "Don't know", isCorrect: true }
			],
		},
		{
			questionText: 'If assessed by a psychiatrist, everyone who suicides would be diagnosed as depressed',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: false },
				{ answerText: "Don't know", isCorrect: true }
			],
		},
		{
			questionText: 'Seeing a psychiatrist or psychologist can help prevent someone from suicide',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: false },
				{ answerText: "Don't know", isCorrect: true }
			],
		},
		{
			questionText: 'Only experts can help people who want to suicide',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: false },
				{ answerText: "Don't know", isCorrect: true }
			],
		},
		{
			questionText: 'There is a strong relationship between alcoholism and suicide',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: false },
				{ answerText: "Don't know", isCorrect: true }
			],
		},
		{
			questionText: 'People who talk about suicide rarely kill themselves',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: false },
				{ answerText: "Don't know", isCorrect: true }
			],
		},
		{
			questionText: 'People who want to attempt suicide can change their mind quickly',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: false },
				{ answerText: "Don't know", isCorrect: true }
			],
		},
		{
			questionText: 'Seeing a psychiatrist or psychologist can help prevent someone from suicide',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: false },
				{ answerText: "Don't know", isCorrect: true }
			],
		},
		{
			questionText: 'Seeing a psychiatrist or psychologist can help prevent someone from suicide',
			answerOptions: [
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'False', isCorrect: false },
				{ answerText: "Don't know", isCorrect: true }
			],
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Your Response has been submitted 
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz