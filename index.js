const signalCGateway = require("gateway-signalc");
/**
 * @param {string} SIGNALC_MOCK - SIGNAL-C URL (http://0.0.0.0/gateway)
 */
async function conect(SIGNALC_MOCK) {
  try {
    await signalCGateway.connector({
      signalcUrl: SIGNALC_MOCK
    });
    console.log("CONECTOU GATEWAY");
  } catch (error) {
    console.log("ERRO NA CONEXÃO COM O GATEWAY:", error);
  }
}
/**
 *
 * @param {string} SIGNAL - Nome do sinal que será emitido
 * @param {Object} DATA - Objeto que será enviado ao Signal-c
 */
async function emit(SIGNAL, DATA) {
  try {
    let response = await signalCGateway.emit({
      name: SIGNAL,
      body: DATA
    });
    return response;
  } catch (error) {
    return error;
  }
}

module.exports = Object.freeze({
  conect,
  emit
});
