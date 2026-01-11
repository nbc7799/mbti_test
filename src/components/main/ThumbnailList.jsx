import { useState } from "react";
import { TESTS } from "../../data/TESTS";
import { Link } from "react-router-dom";
import { baseURL } from "../../App";

export default function ThumbnailList() {
  const [testList] = useState(TESTS);
  return (
    <div>
      {/* 해당 이미지 클릭시 해당 테스트 intro 페이지로 넘어가야함 */}
      {testList.map((test) => (
        <Link to={`${baseURL}/${test.info.mainUrl}`} key={test?.info?.mainUrl}>
          <img src={test?.info?.thumbImage} alt={test?.info?.mainUrl} />
        </Link>
      ))}
    </div>
  );
}
