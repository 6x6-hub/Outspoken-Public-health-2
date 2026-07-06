const { OpenAI } = require('openai');
const logger = require('../utils/logger');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const chat = async (req, res) => {
  const { message, language = 'en' } = req.body;
  logger.info(`AI Chat request: ${message}`);
  
  try {
    const response = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4',
      messages: [{ role: 'user', content: message }],
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE || 0.7)
    });
    
    res.json({
      response: response.choices[0].message.content,
      language
    });
  } catch (error) {
    logger.error('AI Chat error:', error);
    res.status(500).json({ error: 'Failed to process chat' });
  }
};

const analyzeImage = async (req, res) => {
  const { imageUrl, description } = req.body;
  logger.info('Image analysis request');
  
  res.json({
    analysis: 'Image analysis result',
    findings: [],
    recommendations: []
  });
};

const analyzeDocument = async (req, res) => {
  const { documentUrl, type } = req.body;
  logger.info(`Document analysis: ${type}`);
  
  res.json({
    extraction: {},
    summary: 'Document summary',
    insights: []
  });
};

const symptomCheck = async (req, res) => {
  const { symptoms } = req.body;
  logger.info(`Symptom check: ${symptoms.join(', ')}`);
  
  res.json({
    possibleConditions: [],
    severity: 'moderate',
    recommendations: ['Consult a healthcare provider']
  });
};

module.exports = { chat, analyzeImage, analyzeDocument, symptomCheck };
