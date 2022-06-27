const Employee = require('../lib/Employee');
const employee = new Employee('joe', '110044', 'joe@mama.com'); 
// test if we can get the values from the employee object 
test('test if we can get the values from the employee object', () => {
    expect(employee.name).toBe('joe');
    expect(employee.id).toBe('110044');
    expect(employee.email).toBe('joe@mama.com');
})

// test getName() method 
test('test if we can get tue name from the getName() method ', () => {
    expect(employee.getName()).toBe('joe'); 
}); 

// test getId() method 
test('test if we can get the id from the getId() method ', () => {
    expect(employee.getId()).toBe('110044'); 
}); 

//test getEmail() method 
test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('joe@mama.com'); 
}); 

// test getRole() method 
test('test if we can get the role from the getRole() method ', () => {
    expect(employee.getRole()).toBe('Employee'); 
}); 