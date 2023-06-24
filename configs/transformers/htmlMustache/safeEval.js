function safeEval(code, scopeVariables = {}) {
  let result = '';
  try {
    const args = [...Object.keys(scopeVariables), `return ${code}`];
    const executionFunc = Function.apply({}, args);

    result = executionFunc(...Object.values(scopeVariables));
  } catch (e) {
    console.warn(e);
  }

  return result;
}

module.exports = safeEval;
