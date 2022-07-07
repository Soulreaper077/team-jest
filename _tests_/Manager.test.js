const Manager = require('../lib/Manager'); 
const manager = new Manager('joe', '110044', 'joe@star.com', '123'); 

test('testing the constructor values for manager object', () => {
    expect(manager.name).toBe('joe');
    expect(manager.id).toBe('110044'); 
    expect(manager.email).toBe('joe@star.com');
    expect(manager.officeNumber).toBe('123'); 
});

//test for getName() method 
test(' test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('joe'); 
}); 

// test for the getId() method 
test(' test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('110044'); 
}); 

// test for the getEmail() method 
test(' test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('joe@star.com'); 
}); 

// test for the getOfficeNumber() method 
test(' test if we can get the office number from the geOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('123'); 
}); 

// test for the getRole() method 
test(' test if we can get the role from the geRole() method', () => {
    expect(manager.getRole()).toBe('Manager'); 
}); 