import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { baseURL } from '../../App';
import styles from './shareButtonGroup.module.css';
import { linkCopy } from '../../tools/tools';

export default function ShareButtonGroup({ testParam, resultParam, testInfo }) {
  return (
    <div className={styles.shareContainer}>
      <h3>친구에게 공유하기</h3>
      <section className={styles.snsBtns}>
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
        <button
          className={styles.urlShareButton}
          onClick={() => {
            linkCopy();
          }}
        >
          URL
        </button>
      </section>
    </div>
  );
}
