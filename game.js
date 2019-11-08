

let enemies = {
  D$: {
    name: "D$",
    health: 50,
    moves: {
      track: 0,
      hunt: 5,
      shank: 10
    },
    inventory: [],
    timesHit: 0
  },
  Jake: {
    name: "Jake",
    health: 100,
    moves: {
      laughAtCode: 5,
      ultimatePunch: 10,
      whiteHatter: 15
    },
    inventory: [],
    timesHit: 0
  }
}

let player = {
  name: "Mark",
  health: 100,
  moves: {
    blameGame: 5,
    breakCode: 10,
    nat20: 20
  },
  invesntory: [],
  timesHit: 0
}

let items = {
  firstDie: {
    name: "D8",
    modifier: Math.random() * 80
  },
  secondDie: {
    name: "D10",
    modifier: Math.random() * 100
  },
  thirdDie: {
    name: "D20",
    modifier: Math.random() * 200
  },
  nothing: {
    modifier: 0
  }
}