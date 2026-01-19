export default function fixText(input) {
  if (typeof input !== "string") return input;

  // Detect common UTF-8-bytes-as-text mojibake patterns
  const looksBroken =
    /[\u0080-\u009F]/.test(input) || // C1 control chars
    /[Ãâð]/.test(input); // common mojibake lead chars

  if (!looksBroken) return input;

  try {
    // Interpret each code unit 0–255 as a byte
    const bytes = new Uint8Array(input.length);
    for (let i = 0; i < input.length; i++) {
      bytes[i] = input.charCodeAt(i) & 0xff;
    }

    const repaired = new TextDecoder("utf-8", { fatal: false }).decode(bytes);

    // Accept only if it actually improved things
    const stillBroken =
      /[\u0080-\u009F]/.test(repaired) ||
      /[Ãâð]/.test(repaired) ||
      repaired.includes("\uFFFD"); // � replacement char

    return stillBroken ? input : repaired;
  } catch {
    return input;
  }
}
