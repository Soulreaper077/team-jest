const Engineer = require('../lib/Engineer');
const engineer = new Engineer('joe', '110044', 'joe@mama.com', 'Github'); 
// test if we can get the values from the employee object 
test('test if we can get the values from the employee object', () => {
    expect(engineer.name).toBe('joe');
    expect(engineer.id).toBe('110044');
    expect(engineer.email).toBe('joe@mama.com');
    expect(engineer.github).toBe('Github')
})

// test getName() method 
test('test if we can get tue name from the getName() method ', () => {
    expect(engineer.getName()).toBe('joe'); 
}); 

// test getId() method 
test('test if we can get the id from the getId() method ', () => {
    expect(engineer.getId()).toBe('110044'); 
}); 

//test getEmail() method 
test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('joe@mama.com'); 
}); 

// test the getGithub() method 
test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getGithub()).toBe('Github');
}); 

// test getRole() method 
test('test if we can get the role from the getRole() method ', () => {
    expect(engineer.getRole()).toBe('Engineer'); 
}); 