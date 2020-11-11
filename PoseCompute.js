

function getNextPose(currentPose, difficulty)
{
    let aNextPoses = currentPose.NextPoses;
    let aDifficultyPoses = aNextPoses.filter(p => p.Difficulty == difficulty);
    aDifficultyPoses = aDifficultyPoses.length > 0 ? aDifficultyPoses : aNextPoses;
    let nextPose = getRandomElement(aDifficultyPoses);
    return nextPose;
}

function generateSequence(difficulty, iNumPoses)
{
    var aSequencePoses = [];
    var oCurrentPose = getRandomElement(g_aPoses.filter(p => p.Difficulty == "Beginner"));
    aSequencePoses.push(oCurrentPose);
    let oYogaSequenceDifficulty = new YogaSequenceDifficulty(difficulty);
    
    for(let i = 0; i < iNumPoses; i++)
    {
        let cNextDifficulty = oYogaSequenceDifficulty.getNextDifficulty();
        let nextPose = getNextPose(oCurrentPose, cNextDifficulty)
      aSequencePoses.push(nextPose);
      oCurrentPose = nextPose;
    }
    return aSequencePoses;
}
