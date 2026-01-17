import { Navigate, useParams } from 'react-router-dom';
import ResultButtonGroup from '../components/testResult/ResultButtonGroup';
import ResultThumbnailList from '../components/testResult/ResultThumbnailList';
import ShareButtonGroup from '../components/testResult/ShareButtonGroup';
import TestResultRenderer from '../components/testResult/TestResultRenderer';
import { TESTS } from '../data/TESTS';
import { useMemo } from 'react';

export default function TestResult() {
  const { testParam, resultParam } = useParams();

  const testInfo = useMemo(
    () => TESTS?.find((test) => test?.info?.mainUrl === testParam),
    [testParam],
  );

  const resultInfo = useMemo(
    () => testInfo?.results?.find((result) => result.query === resultParam),
    [testInfo, resultParam],
  );

  if (!testInfo) {
    return <Navigate to="/" replace />;
  }

  if (!resultInfo) {
    return <Navigate to={`/${testInfo?.info?.mainUrl}`} replace />;
  }

  return (
    <div>
      <TestResultRenderer renderResultInfo={resultInfo} />
      <ShareButtonGroup />
      <ResultButtonGroup />
      <ResultThumbnailList />
    </div>
  );
}

// 1. Intro-> quiz -> loading -> result
// 2. Direct Access to result page(공유할경우는 결과페이지가 바로 보이기에
//  아마 이 경우가 더 많을것)
