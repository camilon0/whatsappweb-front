const getData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
export default getData;
//traer la data
