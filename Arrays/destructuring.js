const config = {
    name: 'MyTests',
    tests: 'unit',
    version: '10.0.3',
    extra: {
      tests: 'e2e',
    }
  }
  
  const { tests, extra } = config;
  
  console.log(tests, extra);