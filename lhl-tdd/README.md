# TDD Lecture + Demo

Today we did a fullstack TDD demo implement two very simple
features. Throughout the process we looked at how to use Mocks to
controller dependencies and transform integration tests into unit
tests. Finally we enabled the system tests to run in a real browser.

## Running the code

To run the demo do:

``` shell
bundle install
./bin/rails db:setup
./bin/rails s
```

To run the test suite:

``` shell
./bin/rake
```

To run an individual test:

``` shell
./bin/rspec spec/<path to file>
```

## Further Reading

* [Effective Testing with RSpec
  3](https://pragprog.com/book/rspec3/effective-testing-with-rspec-3)
* [Rails 5 Test
  Prescriptions](https://pragprog.com/book/nrtest3/rails-5-test-prescriptions)
* [Rspec official site](http://rspec.info/)
* [Test Doubles - Fakes, Mocks and
  Stubs](https://blog.pragmatists.com/test-doubles-fakes-mocks-and-stubs-1a7491dfa3da)
* [Integration Testing is a
  Scam](https://blog.thecodewhisperer.com/permalink/integrated-tests-are-a-scam)
* [Post about bad TDD
  Practices](http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html)
* [Sandi Metz on TDD](https://www.youtube.com/watch?v=URSWYvyc42M)
8 [JS testing](https://jestjs.io/)
* [Capybara DSL](http://teamcapybara.github.io/capybara/)
