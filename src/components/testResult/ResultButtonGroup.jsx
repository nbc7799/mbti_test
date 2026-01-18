import { useNavigate } from 'react-router-dom';
import { linkCopy } from '../../tools/tools';
import { HomeOutlined, LinkOutlined, RedoOutlined } from '@ant-design/icons';
import styles from './resultButtonGroup.module.css';

export default function ResultButtonGroup({ testParam }) {
  const navigate = useNavigate();

  const onClickRedoButton = () => {
    navigate(`/${testParam}`);
  };

  const onClickGoHomeButton = () => {
    navigate('/');
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.upperDiv}>
        <button
          className={styles.upperButton}
          onClick={() => {
            linkCopy();
          }}
        >
          <LinkOutlined />
          링크 복사
        </button>
        <button
          className={styles.upperButton}
          onClick={() => {
            onClickRedoButton();
          }}
        >
          <RedoOutlined />
          다시 하기
        </button>
      </div>
      <button
        className={styles.bottomButton}
        onClick={() => {
          onClickGoHomeButton();
        }}
      >
        <HomeOutlined />
        다른 테스트 하러 가기
      </button>
    </div>
  );
}
