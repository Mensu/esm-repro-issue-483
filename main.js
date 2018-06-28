let i = 0;
setInterval(() => {
  i += 1;
  originalConsole.log('original console', i);
  console.log('esm console', i);
}, 1000);
