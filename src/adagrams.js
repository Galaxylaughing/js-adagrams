const Adagrams = {
  buildLetterPool() {
    const letterWeights = {
      "A": 9, "B": 2, "C": 2, "D": 4,
      "E": 12, "F": 2, "G": 3, "H": 2, 
      "I": 9, "J": 1, "K": 1, "L": 4,
      "M": 2, "N": 6, "O": 8, "P": 2,
      "Q": 1, "R": 6, "S": 4, "T": 6,
      "U": 4, "V": 2, "W": 2, "X": 1,
      "Y": 2, "Z": 1,
    }

    const letterPool = [];
    // for each key in letterWeights,
    // add that key's string to letterPool value number of times
    for (const letter in letterWeights) {
      let count = letterWeights[letter];
      while (count > 0) {
        letterPool.push(letter);
        count -= 1;
      }
    }

    return letterPool;
  },
  drawLetters() {
    // Implement this method for wave 1

    // create letter pool
    let letterPool = this.buildLetterPool();
    const countIndices = (letterPool.length - 1);

    // choose ten random letters from pool
    let hand = [];
    while (hand.length < 10) {
      // ensure max decreases as items are added to the hand 
      // (and thus deleted from the pool)
      const maxIndex = countIndices - hand.length;
      // find a random pool index
      const randIndex = Math.floor(Math.random() * maxIndex);
      // add it to the hand
      hand.push(letterPool[randIndex]);
      // delete the chosen letter from the pool
      letterPool.splice(randIndex, 1);
    }

    return hand;
  },
  usesAvailableLetters(input, lettersInHand) {
    // make a hash from lettersInHand for quick lookup
    let lettersInHandObj = {};
    for (const letter of lettersInHand) {
      if (!lettersInHandObj[letter]) {
        lettersInHandObj[letter] = 1;
      } else {
        lettersInHandObj[letter] += 1;
      }
    }

    let usesLetters = true;
    // loop through input characters
    for (const char of input) {
      // for every letter that matches a letter in hand
      // remove that letter from hand
      // (you don't need to actually delete the letter key,
      // as it will eventually reach 0 and then be deemed falsey
      // causing the code to go into the else)
      if (lettersInHandObj[char]) {
        lettersInHandObj[char] -= 1;
      } else {
        usesLetters = false
      }
    }
    return usesLetters
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;
