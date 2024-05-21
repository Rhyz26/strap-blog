module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  config: {
    // ... other configurations
    // Add the app keys here
    appKeys: ['72edd23107f434afb065043219b7d136eddc33ebe2dbccc9355100bfa9446fa1', '465d9a86f768b11b83b9927e376a12fc8358a5f981b986e7e2a825a9c6adc053'],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
