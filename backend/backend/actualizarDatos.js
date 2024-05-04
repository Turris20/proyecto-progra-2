const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/testsignos';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('********* CONEXIÓN CORRECTA *******');

  const SignosSchema = new mongoose.Schema({
    Temperatura: { type: Number },
    Presionarterialmedia: { type: Number },
    Frecuenciacardiaca: { type: Number },
    Glucosa: { type: Number }
  }, { versionKey: false, timestamps: true });

  const Signos = mongoose.model('Signos', SignosSchema);

  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async function updateData() {
    try {
      const newData = {
        Temperatura: getRandomInRange(35, 37),
        Presionarterialmedia: getRandomInRange(90, 120),
        Frecuenciacardiaca: getRandomInRange(60, 100),
        Glucosa: getRandomInRange(70, 110)
      };

      const updatedData = await Signos.findOneAndUpdate({}, newData, { new: true, upsert: true });
      console.log('Datos actualizados:', updatedData);
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
  }

  // Actualizar los datos cada 10 segundos
  setInterval(updateData, 10000);
})
.catch((err) => {
  console.error('********* ERROR DE CONEXIÓN *******', err);
});
