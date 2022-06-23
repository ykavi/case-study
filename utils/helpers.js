export const shortingByVote = (a, b) => {
  if (a.rate < b.rate) return -1;
  if (a.rate > b.rate) return 1;
  return 0;
};
