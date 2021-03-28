export const formatTime = (time: number): string => {
  const min = Math.floor(time / 60).toLocaleString('fr-FR', { minimumIntegerDigits: 2 });
  const seconds = (time % 60).toLocaleString('fr-FR', { minimumIntegerDigits: 2 });
  return `${min}:${seconds}`;
};
