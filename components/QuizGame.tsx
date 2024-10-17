"use client";
import { quizQuestions } from "@/constants";
import Link from "next/link";
import { useState } from "react";

/**
 * 
 * Theme in this period -> Github Dark Default -> [Nord - atual]
 *  [] - Optional Show up options with images
 *  [] - Change sound error to end up, and download another sound error
 *  [] - Show up the mascot's image when wrong and correct
 *  [] - Distinct color -> correct and wrong
 *  [] - Go back to Home
 *  [] - Score with Congratulations -> low | medium | high
 *  [] - Styling quiz component
 */

const QuizGame = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  // const [correctColor,setCorrectColor] = useState(false)

  const playSound = (isCorrect: boolean) => {
    const sound = new Audio(
      isCorrect ? "/sounds/correct.wav" : "/sounds/wrong-2.wav"
    );
    sound.play();
  };

  const handleAnswerClick = (option: string) => {
    if (!gameOver) {
      const isCorrect = option === quizQuestions[currentQuestionIndex].answer;
      playSound(isCorrect);

      if (isCorrect) {
        setScore(score + 1);
      }

      // Move to next question or end the game
      if (currentQuestionIndex + 1 < quizQuestions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setGameOver(true);
        
      }
    }
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="feef-title text-yellow-400  font-extrabold mx-auto mt-12">
      <h1 className="text-[5rem]">Quiz Game</h1>
      {gameOver ? (
        <div>
          <h2 className="text-white-1 text-[2rem]">Fim do Jogo!</h2>
          <p className="text-white-1 text-[2rem] ">
            Sua pontua&ccedil;&atilde;o: {score}/{quizQuestions.length}

          </p>
          <button onClick={resetGame} className="text-white-1 text-[2rem]">
            Jogar Novamente
          </button>
          <br />
          <Link href={'/'} className="my-auto feef-h1 text-[1rem]">Voltar à Página Inicial</Link>
        </div>
      ) : (
        <div>
          <h2 className="text-white-1 text-[2.5rem]">
            {quizQuestions[currentQuestionIndex].question}
          </h2>
          <div>
            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className="bg-green-2 text-white-1 text-[1.6rem] m-3 p-3 font-bold rounded-lg"
              >
                {option}
              </button>
            ))}
          </div>
          <p className="text-white-1 text-[2rem]">
            Pontua&ccedil;&atilde;o: {score}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
