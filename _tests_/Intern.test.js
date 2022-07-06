const Intern = require('../lib/Intern'); 
const intern = new Intern('joe', '110044', 'joe@mama.com', 'UTSA')

// test for the Intern object 
test(' test if we can get the values for the intern object', () => {
    expect(intern.name).toBe('joe');
    expect(intern.id).toBe('110044');
    expect(intern.email).toBe('joe@mama.com');
    expect(intern.school).toBe('UTSA');
}); 

// test for the getName() method 
test('test if we can get the objects from the getName() mathod', () => {
    expect(intern.getName()).toBe('joe'); 
})

// test for the getId() methpd 
test('test if we can get the objects from the getId() mathod', () => {
    expect(intern.getId()).toBe('110044'); 
})

// test for the getEmail() method 
test('test if we can get the objects from the getEmail() mathod', () => {
    expect(intern.getEmail()).toBe('joe@mama.com'); 
})

//test for the getSchool() method 
test('test if we can get the objects from the getSchool() mathod', () => {
    expect(intern.getSchool()).toBe('UTSA'); 
})

//test for the getRole() method 
test('test if we can get the objects from the getRole() mathod', () => {
    expect(intern.getRole()).toBe('Intern'); 
})