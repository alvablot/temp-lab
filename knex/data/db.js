const config = require("./knexfile");
const knex = require("knex");
// För att skapa en ny instans av Knex:
const db = knex(knexConfig["development"])
// Vi ger den får knexfile, konfigurationen vi skapat
// och hårdkodar "development" som miljö. 
// Här brukar man använda env-variabler (process.env.NODE_ENV)
// för att bestämma miljön - men vi hårdkodar för att göra det
// lätt för oss.