const { idSchema, nameSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };
  
  return { type: null, message: '' };
};

const validateName = (id) => {
  const { error } = nameSchema.validate(id);
  if (error) return { type: 'INVALID_NAME', message: 'Invalid name' };
  
  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateName,
};