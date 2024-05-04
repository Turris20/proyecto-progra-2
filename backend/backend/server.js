const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/testsignos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const SignosSchema = new mongoose.Schema({
  Temperatura: { type: Number },
  Presionarterialmedia: { type: Number },
  Frecuenciacardiaca: { type: Number },
  Glucosa: { type: Number }
});

const Signos = mongoose.model('Signos', SignosSchema);

app.get('/api/signos', async (req, res) => {
  try {
    const signos = await Signos.find();
    res.json(signos);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
