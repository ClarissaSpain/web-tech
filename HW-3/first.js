// Choose which table to go to
//My recurisve function for table event
// I need to create buttons for the choices, I am also going to connect each button
// to a letter on the keyboard, so that in my voice recognition software, it will register
// that.

// More of Web Dev Simplified's code
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {} //Purposely empty to record state changes later.

//kind of like the case switch I coded in my Cactus Game
function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}


//✧･ﾟ: *✧･ﾟ:* 　Time for me to shine!　 *:･ﾟ✧*:･ﾟ✧
const textNodes = [{
    id: 1,
    text: 'Welcome Adventurer!',
    options: [{
      text: 'Begin',
      nextText: 2
    }]
  },
  {
    id: 2,
    text: 'Before you, stands multiple sturdy wooden tables shaded by thick thatched canopies. You immediately see four tables each with a unique peddler who sell their wares.',
    options: [{
        text: 'Monster Parts',
        setState: {
          elf: true
        },
        nextText: 3
      },
      {
        text: 'Beverages',
        setState: {
          dwarf: true
        },
        nextText: 4
      },
      {
        text: 'Weaponry',
        setState: {
          twins: true
        },
        nextText: 5
      },
      {
        text: 'Food',
        setState: {
          woman: true
        },
        nextText: 6
      },



      // {
      //   text: 'Trade the goo for a sword',
      //   requiredState: (currentState) => currentState.blueGoo,
      //   setState: { blueGoo: false, sword: true },
      //   nextText: 3
      // },
      // {
      //   text: 'Trade the goo for a shield',
      //   requiredState: (currentState) => currentState.blueGoo,
      //   setState: { blueGoo: false, shield: true },
      //   nextText: 3
      // },
      // {
      //   text: 'Ignore the merchant',
      //   nextText: 3
      // }
    ]
  },
  {
    id: 3,
    text: 'The table full of oozing monster giblets catches your eye in an instant, the stench of the raw meat soaks into the market air, and a nose-blind elf stands at the table, using a large cleaver to hack away at the monster meat. Free samples, do you take some?',
    options: [{
        text: 'Yes, please.',
        nextText: 7
      },
      {
        text: 'No, thank you.',
        nextText: 2
      }
    ]
  },
  {
    id: 4,
    text: 'A loud, belch echoes through the market. “That one had some kick!” the dwarf proudly pats a half-empty keg. “Bring yer mugs, and Ol’ Bugman will fill ye up, for some coin of course!” Several travelers happily crowd the table, eager for a taste of the renown Bugman’s Brew. Buy some brew?',
    options: [
      // {
      //   text: 'Restart',
      //   nextText: -1
      // }
      {
        text: 'Yes, please.',
        nextText: 8
      },
      {
        text: 'No, thank you.',
        nextText: 2
      }
    ]
  },
  {
    id: 5,
    text: ' "Swords! Swords for the brave and the bold!” Robert, a balding, burly man with a thick moustache calls to the crowd.',
    options: [{
        text: 'Listen',
        nextText: 9
      },
      {
        text: 'Ignore them.',
        nextText: 2
      },
      // {
      //   text: 'Buy Axe',
      // },
      // {
      //   text: 'Buy Sword',
      // },
      // {
      //   text: 'Ignore',
      //   nextText: 2
      // }
    ]
  },
  {
    id: 6,
    text: '“Meat pies!” the meat pie lady shouts, performing a small, yet energetic jig for the curious crowd. “Meat pies.” She continues to exhaust her expansive vocabulary, presenting the table full of meat pies. “Meat pie.” Her solemn voice brings many to tears as a lone meat pie splatters upon the dusty ground, her dance coming to a rigid halt.',
    options: [{
      text: 'Go Back',
      nextText: 2
    }]
  },
  {
    id: 7,
    text: 'Yes, you take the Monster gut. You shove it in your pocket. Your pants are wet with monster blood.',
    options: [
      {
        text: 'Go back',
        nextText: 2
      }
      // {
      //   text: 'Try to run',
      //   nextText: 8
      // },
      // {
      //   text: 'Attack it with your sword',
      //   requiredState: (currentState) => currentState.sword,
      //   nextText: 9
      // },
      // {
      //   text: 'Hide behind your shield',
      //   requiredState: (currentState) => currentState.shield,
      //   nextText: 10
      // },
      // {
      //   text: 'Throw the blue goo at it',
      //   requiredState: (currentState) => currentState.blueGoo,
      //   nextText: 11
      // }
    ]
  },
  {
    id: 8,
    text: 'You retrieve a bottle of Ale, -2 Gold',
    options: [{
      text: 'Go Back',
      nextText: 2
    }]
  },
  {
    id: 9,
    text: ' “Don’t make me laugh! Those swords are hardly fit to cut cheese!” Bobert, his equally bald, twin brother bellows, his thick, furry unibrow wiggling with glee. “Now an axe is what these fine warriors need.” ',
    options: [{
        text: 'Listen',
        nextText: 10
      },
      {
        text: 'Ignore them.',
        nextText: 2
      },
    ]
  },
  {
    id: 10,
    text: ' “An axe? Are you a simpleton, brother? These are adventurers, not lumberjacks!” Robert shouts, his meaty hands grabbing two greedy handfuls of the squirrel tail that is his brother’s brow. ',
    options: [{
        text: 'Listen',
        nextText: 11
      },
      {
        text: 'Ignore them.',
        nextText: 2
      },
    ]
  },
  {
    id: 11,
    text: ' “At least my axes will cut wood, you nincompoop, those toothpicks you call weapons wouldn’t even cut the hair on a troll’s backside.” Bobert retaliates by pulling harshly on the coarse bristles of his brother’s moustache. ',
    options: [{
        text: 'Buy Axe',
        nextText: 12
      },
      {
        text: 'Buy Sword',
        nextText: 13
      },
      {
        text: 'Ignore them.',
        nextText: 2
      },
      // {
      //   text: 'Congratulations. Play Again.',
      //   nextText: -1
      // }
    ]
  },
  {
    id: 12,
    text: ' You have bought an Axe -5 Gold.',
    options: [
      {
        text: 'Go Back',
        nextText: 2
      }
    ]
  },
  {
    id: 13,
    text: ' You have bought a Sword -4 Gold.',
    options: [
      {
        text: 'Go Back',
        nextText: 2
      }
    ]
  }
]

startGame()
