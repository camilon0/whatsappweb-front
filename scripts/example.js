import getConversations from "./getConver.js";
import getData from "./getData.js";

const URLusers = "https://whatsapweb-production.up.railway.app/users";
const URLconvers = "https://whatsapweb-production.up.railway.app/messages";
const containerUsers = document.getElementById("container");
const userLogged = await getData(URLusers);

//urls
const formid = document.getElementById("form_id");
//evento form
formid.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = formid[0].value;
  console.log(query);
  const URLuser = `${URLusers}?id=${query}`;
  console.log(URLuser);

  console.log(userLogged);
  const conversaciones = await getConversations(URLconvers, query);
  console.log(conversaciones);
  //   const urlConversationRecibida=`${URLconvers}?idUser2=${query}&idUser1?`
  //   const conversacionesRecibidas= await getConversations(urlConversationRecibida);
  //   console.log(conversacionesRecibidas);
  //   const urlConversationIniciada=`${URLconvers}?idUser1=${query}&idUser2?`
  //   const conversacionsIniciadas = await getConversations(urlConversationIniciada);
  //   console.log(conversacionsIniciadas);
});
