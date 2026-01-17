import { useNavigate, useParams } from 'react-router-dom';
import ResultButtonGroup from '../components/testResult/ResultButtonGroup';
import ResultThumbnailList from '../components/testResult/ResultThumbnailList';
import ShareButtonGroup from '../components/testResult/ShareButtonGroup';
import TestResultRenderer from '../components/testResult/TestResultRenderer';
import { useEffect, useState } from 'react';
import { TESTS } from '../data/TESTS';

export default function TestResult() {
  const navigate = useNavigate();
  const { testParam, resultParam } = useParams();
  const [renderResultInfo, setRenderResultInfo] = useState({});

  useEffect(() => {
    const testInfo = TESTS.find((test) => test?.info?.mainUrl === testParam);

    if (!testInfo) {
      alert('Invalid testParam');
      navigate('/');
    }

    const resultInfo = testInfo?.results?.find(
      (result) => result.query === resultParam,
    );

    if (!resultInfo) {
      alert('Invalid resultParam');
      navigate(`/${testInfo?.info?.mainUrl}`);
    }

    setRenderResultInfo(resultInfo);
  }, [testParam, resultParam]);

  return (
    <div>
      <TestResultRenderer renderResultInfo={renderResultInfo} />
      <ShareButtonGroup />
      <ResultButtonGroup />
      <ResultThumbnailList />
    </div>
  );
}

// 1. Intro-> quiz -> loading -> result
// 2. Direct Access to result page(공유할경우 아마 이 경우가 더 많은것)
