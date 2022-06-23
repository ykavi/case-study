export const shortingByVote = (a, b) => {
  if (a.rate < b.rate) return -1;
  if (a.rate > b.rate) return 1;
  return 0;
};

export const getIndexById = (id, data) => data?.findIndex((item) => item.id === id);
