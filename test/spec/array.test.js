// 阵列堆栈
var Stack = require('../../src/array');

var stack;

beforeEach(function () {
    stack = new Stack();
});

afterEach(function () {
    stack = null;
});

describe('array Stack', function () {
    describe('empty', function () {
        it('should be empty', function () {
            expect(stack.empty()).toBe(true);
        });
    });

    describe('push', function () {
        it('should be success', function () {
            stack.push(1);
            expect(stack.empty()).toBe(false);
        });
    });
    describe('pop', function () {
        it('should be success', function () {
            stack.push(2);
            expect(stack.empty()).toBe(false);
            expect(stack.pop()).toEqual(2);
            expect(stack.empty()).toBe(true);
        });
        it('should be fail', function () {
            expect(stack.pop()).toBeUndefined();
        });
    });
});