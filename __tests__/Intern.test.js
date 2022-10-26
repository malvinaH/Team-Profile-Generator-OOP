
// DEPENDENCIES
const Intern = require('../lib/Intern');

describe('Intern Class', () => {
  describe('Initialization', () => {
    it('should make an object with name, id, email, and school properties', () => {
      // Assign/Act
      const intern = new Intern('Nidhi M','1234', 'nidhim@example.com', 'Columbia');

      // Assert
      expect(intern).toEqual({
        name: "Nidhi M",
        id: "1234",
        email: "nidhim@example.com",
        github: "https://github.com/nidhim"
    });
  });

  describe('getSchool', () => {
    it("should return the name of the intern's school", () => {
      // Assign/Act
      const intern = new Intern(
        'Nidhi M',
        '1234',
        'nidhim@example.com',
        'Columbia'
      );

      // Assert
      expect(intern.getSchool()).toBe('Columbia');
    });
  });

  describe('getRole', () => {
    it('should return the role "intern"', () => {
      // Assign/Act
      const intern = new Intern(
        'Nidhi M',
        '1234',
        'nidhim@example.com',
        'Columbia'
      );

      // Assert
      expect(intern.getRole()).toBe('intern');
    });
  });
});
});