export const getProducts = (index) => {
  return `${process.env.VUE_APP_API_URL}${index}`;
};
