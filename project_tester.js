assert = chai.assert;

describe('Testing server and client side functions', function () {
    it('Test 1: generateNumber() returns a number between 1-10.', function () {
        for (var i = 0; i < 500; i++) {
            var result = generateNumber();
            assert(result >= 1 && result <= 10);
        }
    });

    it('Test 2: correctGuess() returns a score increased by one.', function () {
        var result = correctGuess();
        assert(result + 1 == correctGuess());
    });

    it('Test 3: wrongGuess() returns a lives decreased by one.', function () {
        var result = wrongGuess(5, 9);
        assert(result - 1 == wrongGuess());
    });

    it('Test 4: wrongGuess() returns death at >9 wrong guesses.', function () {
        for (var i = 0; i < 20; i++) {
            var result = wrongGuess(5, 9);
        }
        assert(result == 'death');
    });
})
