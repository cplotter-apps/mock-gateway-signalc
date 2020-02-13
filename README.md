# Install

npm install --save-dev mock-gateway-signalc

# Config jest on package.json

"scripts": {
"test": "jest --detectOpenHandles --forceExit",
"start": "nodemon app.js"
},

# jest.test.js example:

require("../src/controllers/signal-c");

const mock = require("mock-gateway-signalc");

console.log = s => {};

async function mockConnect() {
await mock.conect(process.env.SIGNALC_MOCK);
}

test("CheckMockConfig", async () => {
await mockConnect(); // Essa linha só exite no primeiro teste
const resposta = await mock.emit("SIGNAL_NAME", {});
expect(resposta).toStrictEqual({
name: "SignalNotFound",
body: {}
});
});
