require('dotenv').config();

const {FIREBASE_CONFIG, FIREBASE_SDK} = process.env;

const parsedConfig = JSON.parse(FIREBASE_CONFIG);
const serviceAccount = JSON.parse(FIREBASE_SDK);
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const registerUser = () => { async (req, res) => {
  const { email, password } = req.body;
  email = document.getElementById('formBasicEmail').value;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password
    });
    res.status(201).json({ message: 'Usuario registrado correctamente', userRecord });
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error regsitrando la peetición', error });
  }
}};

const loginUser = () => { async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().getUserByEmail(email);
      //VALIDAR
    res.status(200).json({ message: 'Login successful', userRecord });
  } catch (error) {
      res.status(500).json({ message: 'Something went wrong', error });
  }
}};

module.exports = { registerUser, loginUser };