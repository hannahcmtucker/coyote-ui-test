const fakeSubmit = (value) =>
  new Promise((resolve, reject) => {
    const n = Math.random();
    // timeout to simulate network latency
    const id = setTimeout(() => {
      clearTimeout(id);
      if (n < 0.5) {
        resolve();
        console.info('Value accepted:', value);
      } else {
        reject(new Error('Oops, something went wrong'));
      }
    }, 2000);
  });

export default fakeSubmit;
