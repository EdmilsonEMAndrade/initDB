module.exports = {
  up: async queryInterface => {
    queryInterface.createSchema('homework');
  },

  down: async queryInterface => {
    queryInterface.dropSchema('homework');
  },
};