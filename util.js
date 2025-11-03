export function testFunction(output, expected) {
  if (Array.isArray(output) && Array.isArray(expected)) {
    if (output.length !== expected.length) return false;
    for (let i = 0; i < output.length; i++) {
      if (output[i] !== expected[i]) return false;
    }
    return true;
  }

  return output === expected;
}
