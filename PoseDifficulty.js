class YogaSequenceDifficulty {
  constructor(difficulty) {
    this._difficulty = difficulty;
    this._difficultyWeights = DifficultyWeights[difficulty];
    if(!this._difficultyWeights)
        this._difficultyWeights = DifficultyWeights["Default"];
  }
 
    get DifficultyWeights(){
        return this._difficultyWeights;
    }
    
    getNextDifficulty(){
        return getRandomKeyFromWeightedObject(this._difficultyWeights);
    }
}


const DifficultyWeights = {
    "Beginner": {"Beginner": 0.8, "Intermediate": 0.2, "Advanced": 0},
    "Intermediate": {"Beginner": 0.3, "Intermediate": 0.7, "Advanced": 0},
    "Advanced": {"Beginner": 0.1, "Intermediate": 0.3, "Advanced": 0.6},
    "Default": {"Beginner": (1/3), "Intermediate": (1/3), "Advanced": (1/3)}
}