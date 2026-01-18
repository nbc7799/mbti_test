export function arrayShuffler(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const linkCopy = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    alert('복사되었습니다!');
  } catch (err) {
    console.error('복사 실패:', err);
  }
};
