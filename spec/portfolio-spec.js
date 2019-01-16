import { Portfolio } from '../src/portfolio';

describe('Portfolio', function() {
  let params = {};
  params.name = "Primary";
  params.description = "A collection of various coins to be analyzed."
  let portfolio = new Portfolio(params);

  beforeEach(function() {

  });

  afterEach(function() {

  });


  it('should create a new portfolio object and provide a name', function() {
    expect(portfolio.name).toEqual('Primary');
  });

  it('should create a new portfolio object and have a description', function() {
    expect(portfolio.description).toEqual('A collection of various coins to be analyzed.');
  });


});
