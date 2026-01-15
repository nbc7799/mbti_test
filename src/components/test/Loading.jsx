import Lottie from 'react-lottie';
import * as animationData from '../../assets/loading-animation.json';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Loading({ mbtiScore, currentTest }) {
  const navigate = useNavigate();
  const loadingTime = 3700; //ms
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    renderSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const [finalResultQuery, setFinalResultQuery] = useState('');

  //loading time -> 3.7초(최대치로 이탈률 가장 적음)
  useEffect(() => {
    // 4개의 슬롯 [[E,I], [S,N], [T,F], [J,P]]을 돌면서 mbti점수 비교후 결과 도출
    const mbtiPairs = [
      ['E', 'I'],
      ['S', 'N'],
      ['T', 'F'],
      ['J', 'P'],
    ];

    // 비어있는 문자열
    let resultType = '';

    //각 ARRAY 돌면서 -> 각 슬롯의 WINNNER선정 -> 문자열 변수에 추가
    for (let pair of mbtiPairs) {
      let firstType = pair[0];
      let secondType = pair[1];
      let firstTypeScore = mbtiScore[firstType];
      let secondTypeScore = mbtiScore[secondType];
      firstTypeScore > secondTypeScore
        ? (resultType += firstType)
        : (resultType += secondType);
    }
    console.log('resultType', resultType);

    const resultQuery = currentTest?.results?.find((result) => {
      return result?.type === resultType;
    })?.query;
    setFinalResultQuery(resultQuery);
    console.log('resultQuery', resultQuery);
  }, [mbtiScore, currentTest]);

  // 결과페이지로 이동
  useEffect(() => {
    let timeout = setTimeout(() => {
      //finalResultQuery 활용해서 결과 페이지로 라우팅
      finalResultQuery &&
        navigate(`/${currentTest?.info?.mainUrl}/result/${finalResultQuery}}`);
    }, loadingTime);

    return () => {
      clearTimeout(timeout);
    };
  }, [loadingTime, navigate, finalResultQuery, currentTest?.info?.mainUrl]);

  return (
    <Lottie
      options={defaultOptions}
      height={250}
      width={250}
      style={{ marginTop: '12rem' }}
    />
  );
}

// 로딩 애니메이션
// mbti점수 계산후 mbti결과 도출
// n초후 결과페이지로 이동
// base_url.personalColor/result/:resultParam
