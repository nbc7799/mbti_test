import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import TestResult from './page/TestResult';
import Test from './page/Test';
import NotFound from './page/NotFound';

export const baseURL = 'http://localhost:5173';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 썸네일 리스트 페이지 */}
        <Route path="/" element={<Main />} />
        {/* 테스트 intro-quiz-loading page */}
        <Route path="/:testParam" element={<Test />} />
        {/* 테스트 결과 페이지 */}
        <Route
          path="/:testParam/result/:resultParam"
          element={<TestResult />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//주소 체계
//1. main 섬네일 리스트 페이지 : root/
//2. 테스트 페이지 - Intro / Quiz / Loading : root/testName
//3. 결과 페이지 - root/testName/result/resultName
