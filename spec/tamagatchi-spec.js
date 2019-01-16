import { Tamagatchi } from '../src/tamagatchi';

describe('Tamagatchi', function() {
  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should instantiate a new Tamagatchi with name of tommy', function() {
    let game = new Tamagatchi();

    expect(game.name).toEqual('Tommy');
  });

  it('should decrement hunger by 5 after 5 seconds', function() {
    let game = new Tamagatchi();

    jasmine.clock().tick(5001);
    expect(game.hunger).toEqual(45);
  });

  it('should create new functions from .feed() function-factory— small', function() {
    let game = new Tamagatchi();
    game.eatABaby = game.feed(5);
    game.eatAHorse = game.feed(15);
    jasmine.clock().tick(5001);
    game.eatABaby("a baby");
    expect(game.hunger).toEqual(50);
    game.eatAHorse("a horse");
    expect(game.hunger).toEqual(65);
  });

  it('should create new functions from .feed() function-factory— large that decreases energy', function() {
    let game = new Tamagatchi();
    // game.eatABaby = game.feed(5);
    game.eatAHorse = game.feed(15);
    jasmine.clock().tick(5001);
    // game.eatABaby("a baby");
    // expect(game.hunger).toEqual(50);
    game.eatAHorse("a horse");
    expect(game.tired).toEqual(40);
  });

  it('should die after one of its life forces reaches 0', function() {
    let game = new Tamagatchi();
    jasmine.clock().tick(50001);

    expect(game.status()['hunger']).toBe(false);
  })

  it('should add points to tamagatchi\'s boredom meter', function() {
    let game = new Tamagatchi();
    jasmine.clock().tick(5001);
    game.play();
    expect(game.boredom).toBe(65);
  })

  it('should add points to tamagatchi\'s boredom meter, but decrement points from it\s tired meter', function() {
    let game = new Tamagatchi();
    jasmine.clock().tick(5001);
    game.playHard();
    expect(game.boredom).toBe(75);
    expect(game.tired).toBe(35);
  })

  it('should add points to tamagatchi\'s sleep meter', function() {
    let game = new Tamagatchi();
    jasmine.clock().tick(5001);
    game.sleep();
    expect(game.tired).toBe(65);
  })

  it('should add points to tamagatchi\'s sleep meter, but decrement points from it\s hunger meter', function() {
    let game = new Tamagatchi();
    jasmine.clock().tick(5001);
    game.hibernate();
    expect(game.tired).toBe(95);
    expect(game.hunger).toBe(10);
  })

});
