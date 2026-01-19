import { useMemo } from 'react';
import { TESTS } from '../../data/TESTS';
import { Link } from 'react-router-dom';

export default function ResultThumbnailList({ testParam }) {
  const otherTests = useMemo(() => {
    return TESTS.filter((test) => test?.info?.mainUrl !== testParam);
  }, [testParam]);

  return (
    <div>
      {otherTests.map((item) => (
        <Link to={`/${item?.info?.mainUrl}`} key={item?.info?.mainUrl}>
          <img
            style={{ width: '100%' }}
            src={item?.info?.thumbImage}
            alt={item?.info?.mainTitle}
          />
        </Link>
      ))}
    </div>
  );
}
