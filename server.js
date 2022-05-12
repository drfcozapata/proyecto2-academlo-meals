const { app } = require('./app');

// Models
const { initModels } = require('./models/initModels');

// Utils
const { db } = require('./utils/database');

// DB Authentication
db.authenticate()
  .then(() => console.log('Database conected and authenticated'))
  .catch(err =>
    console.log('Error ocurr during database authentication:', err)
  );

// Models Relations
initModels();

// Sync sequelize models
db.sync()
  .then(() => console.log('Database successfully synced'))
  .catch(err => console.log('Error ocurr during database sync:', err));

// Start server
const PORT = process.env.PORT || 4010;
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
