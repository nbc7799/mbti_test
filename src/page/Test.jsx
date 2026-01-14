import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TESTS } from '../data/TESTS';
import IntroRenderer from '../components/test/IntroRenderer';

export default function Test() {
  const { testParam } = useParams();
  const navigate = useNavigate();
  const [currentTest, setCurrentTest] = useState();

  useEffect(() => {
    const theTest = TESTS?.find((test) => test?.info?.mainUrl === testParam);

    if (!theTest) {
      alert('존재하지 않는 테스트입니다.');
      return navigate('/');
    }
    setCurrentTest(theTest);
  }, [testParam]);

  return (
    <div>
      <IntroRenderer currentTest={currentTest} />
    </div>
  );
}
