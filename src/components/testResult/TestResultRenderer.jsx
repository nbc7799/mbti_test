export default function TestResultRenderer({ renderResultInfo }) {
  return (
    <div>
      <h3>결과는?</h3>
      <img
        style={{ width: '100%' }}
        src={renderResultInfo.img_src}
        alt={renderResultInfo.title}
      />
    </div>
  );
}
