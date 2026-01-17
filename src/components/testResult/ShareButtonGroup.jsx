import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { baseURL } from '../../App';

export default function ShareButtonGroup({ testParam, resultParam, testInfo }) {
  return (
    <div>
      <h3>친구에게 공유하기</h3>
      <FacebookShareButton
        url={`${baseURL}/${testParam}/result/${resultParam}`}
        hashtag={`#${testInfo?.info.mainTitle}`}
      >
        <FacebookIcon size={48} round={true} />
      </FacebookShareButton>
      <TwitterShareButton
        title={testInfo?.info.mainTitle}
        url={`${baseURL}/${testParam}/result/${resultParam}`}
        hashtags={[testInfo?.info.mainTitle]}
      >
        <TwitterIcon size={48} round={true} />
      </TwitterShareButton>
    </div>
  );
}
