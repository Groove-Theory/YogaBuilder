var aPoses = [];

class YogaPose {
    static from(json){
       return Object.assign(new YogaPose(), json);
     }
}


keys = Object.keys(localStorage),
i = keys.length;

while ( i-- ) {
    let data = JSON.parse(localStorage.getItem(keys[i]));
    aPoses.push(YogaPose.from(data))
}

aPoses.forEach(pose => {
    let aVariationNames = pose.Variations;
    let aVariationMap = aPoses.filter(p => aVariationNames.indexOf(p.EnglishName) > -1);
    pose.Variations = aVariationMap;

    let aPreviousPosesNames = pose.PreviousPoses;
    let aPreviousPosesMap = aPoses.filter(p => aPreviousPosesNames.indexOf(p.EnglishName) > -1);
    pose.PreviousPoses = aPreviousPosesMap;

    let aNextPosesNames = pose.NextPoses;
    let aNextPosesMap = aPoses.filter(p => aNextPosesNames.indexOf(p.EnglishName) > -1);
    pose.NextPoses = aNextPosesMap;
})
