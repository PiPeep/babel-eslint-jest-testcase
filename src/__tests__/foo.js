jest.autoMockOff();

describe('foo', function() {
    it("doesn't die", function() {
        require('babel-eslint').parse('foo');
        // dies before it gets here
        expect(true).toBe(true);
    });
});
