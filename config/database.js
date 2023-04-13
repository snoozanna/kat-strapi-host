// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'testing'),
//       user: env('DATABASE_USERNAME', 'root'),
//       password: env('DATABASE_PASSWORD', ''),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "91.238.161.176"),
      port: env.int("DATABASE_PORT", 3306),
      // its always this port
      database: env("DATABASE_NAME", "snoozann_kat-strapi-host-db"),
      user: env("DATABASE_USERNAME", "snoozann_user1"),
      password: env("DATABASE_PASSWORD", "Testing9"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
