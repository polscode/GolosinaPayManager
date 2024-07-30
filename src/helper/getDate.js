const getDate = () => {

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  let monthString = month < 10 ? '0' + month : month;
  let dayString = day < 10 ? '0' + day : day;

  return `${year}-${monthString}-${dayString}`;
};

export default getDate;
