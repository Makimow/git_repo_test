module.exports = {
  apps: [
    {
      name: 'app-dev',
      script: './server/src/index.js',
      cwd: '/var/www/app-dev',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      error_file: '/var/www/app-dev/logs/error.log',
      out_file: '/var/www/app-dev/logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
    },
    {
      name: 'app-staging',
      script: './server/src/index.js',
      cwd: '/var/www/app-staging',
      instances: 2,
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'staging',
        PORT: 3001,
      },
      error_file: '/var/www/app-staging/logs/error.log',
      out_file: '/var/www/app-staging/logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
    },
  ],
};
