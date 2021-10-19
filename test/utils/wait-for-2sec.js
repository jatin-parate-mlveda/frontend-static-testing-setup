export const waitFor2Sec = async () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
