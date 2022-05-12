module.exports = {
  apps: [
    {
      name: 'test',
      exec_mode: 'cluster',
      instances: 'max', // Ou un certain nombre d'instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start --port 3069'
    }
  ]
}
