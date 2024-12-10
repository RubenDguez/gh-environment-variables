const envJson = JSON.parse(process.env.SANDBOX_SECRETS);
const sandbox = process.env.SANDBOX

console.log(envJson[sandbox]);
