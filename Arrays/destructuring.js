const config = {
    name: 'MyTests',
    tests: 'unit',
    version: '10.0.3',
    extra: {
      tests: 'e2e',
    }
  }
  
  const { version, extra } = config;
  
  console.log(version, extra);