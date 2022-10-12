// import "../styles/style.js";
const URL_API = "https://whatsapweb-production.up.railway.app/";

class UI {
  constructor(targetID) {
    this.target = document.getElementById(targetID);
  }

  getValue() {
    return this.target.value;
  }
}

const name = new UI("name");
const phone = new UI("phone");
const password = new UI("password");

const form = document.getElementById("form__login");

const handleSubmit = async (e) => {
  e.preventDefault();
  //new object from values
  const newUser = {
    name: name.getValue(),
    phone: phone.getValue(),
    password: password.getValue(),
  };
  //validations
  for (const key in newUser) {
    const element = newUser[key];
    if (element === "") {
      alert(`Falta llenar el campo ${key}`);
      return;
    }
  }
  //send to back
  try {
    let response = await axios.post(`${URL_API}users`, newUser);
    if (response.status === 201) {
      Swal.fire("Excelente!", "Usuario creado con éxito!", "success");
    }
  } catch (error) {
    Swal.fire("Oops!", "Se ha presentado un error!", "error");
  }
};

form.addEventListener("submit", (e) => {
  handleSubmit(e);
});
