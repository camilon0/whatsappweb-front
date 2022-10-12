import getData from "./getData.js";

const getConversations = async (url, query) => {
  // const conversaciones= await getData(url)
  const urlConversationRecibida = `${url}?idUser2=${query}&idUser1?`;
  const conversacionesRecibidas = await getData(urlConversationRecibida);

  const urlConversationIniciada = `${url}?idUser1=${query}&idUser2?`;
  const conversacionsIniciadas = await getData(urlConversationIniciada);
  const chats = [...conversacionesRecibidas, ...conversacionsIniciadas];

  return chats;
};
export default getConversations;
