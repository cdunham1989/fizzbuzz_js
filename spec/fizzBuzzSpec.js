describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  });

  describe('knows when a number is', function() {

    it('is divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true)
    });

  });

  describe('knows when a number is NOT', function() {

    it('is divisble by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false)
    });

  });

});
