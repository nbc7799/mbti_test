import { useState } from 'react';
import Intro from './intro';
import Quiz from './Quiz';
import Loading from './Loading';

export default function IntroRenderer({ currentTest }) {
  const [mode, setMode] = useState('intro');

  if (mode === 'intro') {
    return <Intro info={currentTest?.info} setMode={setMode} />;
  } else if (mode === 'quiz') {
    return <Quiz />;
  } else if (mode === 'loading') {
    return <Loading />;
  } else {
    return <div>잘못된 경로입니다.</div>;
  }
}

//base_url/personalColor
//1. intro
//2. Quiz
//3. Loading
