// complex-code-worker.js
// Web Worker script for executing complex code

// Message event listener to receive the start signal from the main thread
onmessage = function (event) {
  const startTime = performance.now();

  // Simulate a complex computation
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += Math.sqrt(i);
    result -= Math.sqrt(i);
  }

  const endTime = performance.now();

  // Send the result back to the main thread
  postMessage(result);

  console.log(`Complex code execution completed in the worker`);
  console.log(`Time taken in the worker: ${endTime - startTime} milliseconds`);
};
