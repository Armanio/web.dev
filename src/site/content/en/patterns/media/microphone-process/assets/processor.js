// This file is evaluated in the audio rendering thread
// upon context.audioWorklet.addModule() call.

class WorkletProcessor extends AudioWorkletProcessor {
  process([input], [output]) {
    // Copy inputs to outputs.
    input[0].forEach((sample, i) => output[0][i] = sample);
    return true;
  }
}
  
registerProcessor("processor", WorkletProcessor);
