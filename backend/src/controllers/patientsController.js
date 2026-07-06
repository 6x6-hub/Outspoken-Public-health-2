const logger = require('../utils/logger');

const getPatient = async (req, res) => {
  const { id } = req.params;
  logger.info(`Fetching patient ${id}`);
  
  res.json({
    patientId: id,
    name: 'Patient Name',
    age: 35,
    vaccinations: [],
    nutrition: [],
    medicalHistory: []
  });
};

const addVaccination = async (req, res) => {
  const { id } = req.params;
  const { vaccine, date } = req.body;
  logger.info(`Adding vaccination for patient ${id}`);
  
  res.json({
    message: 'Vaccination recorded',
    patientId: id,
    vaccine,
    date
  });
};

const addNutrition = async (req, res) => {
  const { id } = req.params;
  const { type, observations } = req.body;
  logger.info(`Adding nutrition record for patient ${id}`);
  
  res.json({
    message: 'Nutrition record added',
    patientId: id,
    type,
    observations
  });
};

module.exports = { getPatient, addVaccination, addNutrition };
