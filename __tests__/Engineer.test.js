// DEPENDENCIES
const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
  describe('Initialization', () => {
    it('should make an object with name, id, email, and gitHub properties', () => {
      // Assign/Act
      const engineer = new Engineer('Michael X','1234','michaelx@example.com','https://github.com/michaelx');

      // Assert
      expect(engineer).toEqual({
        name: "Michael X",
        id: "1234",
        email: "michaelx@example.com",
        github: "https://github.com/michaelx"
    });
  });


  describe('getGithub', () => {
    it("should return the url of the engineer's GitHub profile", () => {
      // Assign/Act
      const engineer = new Engineer(
        'Michael X',
        '1234',
        'michaelx@example.com',
        'https://github.com/michaelx'
      );

      // Assert
      expect(engineer.getGithub()).toBe('https://github.com/michaelx');
    });
  });

  describe('getRole', () => {
    it('should return the role "engineer"', () => {
      // Assign/Act
      const engineer = new Engineer(
        'Michael X',
        '1234',
        'mixhael@example.com',
        'https://github.com/michaelx'
      );

      // Assert
      expect(engineer.getRole()).toBe('engineer');
    });
  });
});
});
