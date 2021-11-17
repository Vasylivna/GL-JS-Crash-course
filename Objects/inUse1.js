const testConfiguration = { 
    module: 'Users',
    version: '1.0.0',
    submit: () => console.log("Submit action"),
    validate: () => console.log("Validate action"),
 };
  
 const testFn = () => {
   if (testConfiguration.module === 'Users') {
     testConfiguration.validate();
     testConfiguration.submit();
   }
 }