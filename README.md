#### install Node 16 on Replit : npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
#### install Discord.js : (Node.js 16.6.0 or newer is required.)
##### npm install discord.js
##### yarn add discord.js
##### pnpm add discord.js
#### Create keys, namely : TOKEN(.env), CLIENT_ID(.env), GUILD_ID(.env)
##### deploy by ```javascript
const TOKEN = process.env['TOKEN'];
```