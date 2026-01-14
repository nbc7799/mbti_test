import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TESTS } from '../data/TESTS';
import IntroRenderer from '../components/test/IntroRenderer';

export default function Test() {
  const { testParam } = useParams();
  const navigate = useNavigate();

  const currentTest = TESTS?.find((test) => test?.info?.mainUrl === testParam);

  useEffect(() => {
    if (!currentTest) {
      alert('존재하지 않는 테스트입니다.');
      navigate('/');
    }
  }, [currentTest, navigate]);

  return (
    <div>
      <IntroRenderer currentTest={currentTest} />
    </div>
  );
}
