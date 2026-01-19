import { useEffect, useState } from 'react';
import styles from './quiz.module.css';
import { Progress } from 'antd';
import { arrayShuffler } from '../../tools/tools';

export default function Quiz({ setMode, questions, setMbtiScore }) {
  const [questionNum, setQuestionNum] = useState(0);
  const totalQuestionsLength = questions?.length;

  const onOptionClick = (type) => {
    setMbtiScore((prevScore) => ({
      ...prevScore,
      [type]: prevScore[type] + 1,
    }));
    console.log('type', type);
    setQuestionNum((prev) => prev + 1);
  };

  useEffect(() => {
    if (questionNum === totalQuestionsLength) {
      setMode('loading');
    }
  }, [questionNum, totalQuestionsLength, setMode]);

  return (
    <div>
      <h3 className={styles.questionText}>
        {questions?.[questionNum]?.question}
      </h3>
      {questions[questionNum]?.answers &&
        arrayShuffler(questions[questionNum]?.answers)?.map((answer) => {
          return (
            <button
              className={styles.optionButton}
              onClick={() => onOptionClick(answer.type)}
              key={answer.content}
            >
              {answer.content}
            </button>
          );
        })}

      <Progress
        percent={(questionNum / totalQuestionsLength) * 100}
        showInfo={false}
      />
      <h5>
        {questionNum} / {questions.length}
      </h5>
    </div>
  );
}

// 16 Results
// 12개의 질문 - options selection
// 각 항목별 3개씩 질문 (ex. e, i인지 3개질문)
// mbti calculation logic
// 결과는 introRenderer로 전달 -> loading -> result

// css적용 나중에 하기
//progress bar도 나중에 하기
// options 섞어주기
