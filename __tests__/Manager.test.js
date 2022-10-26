
// DEPENDENCIES
const Manager = require('../lib/Manager');

describe('Manager Class', () => {
  describe('Initialization', () => {
    it('should make an object with name, id, email, and officeNum properties', () => {
      // Assign/Act
      const manager = new Manager(
        'Max H',
        '1234',
        'maxh@example.com',
        '1'
      );

      // Assert
      expect(manager).toEqual({
        name: "Max H",
        id: "1234",
        email: "maxh@example.com",
        officeNum: "1"
    });
  });

  describe('getRole', () => {
    it('should return the role of the office manager', () => {
      // Assign/Act
      const manager = new Manager(
        'Max H',
        '1234',
        'maxh@example.com',
        '1'
      );

      // Assert
      expect(manager.getRole()).toBe('manager');
    });
  });
});
});