var g_aPoses = [];

class YogaPose {
    static from(json){
       return Object.assign(new YogaPose(), json);
     }
}



function parseRawJSONData(oRawJson)
{
    keys = Object.keys(oRawJson),
    i = keys.length;

    while ( i-- ) {
        let data = JSON.parse(oRawJson[keys[i]]);
        g_aPoses.push(YogaPose.from(data))
    }

    g_aPoses.forEach(pose => {
        let aVariationNames = pose.Variations ? pose.Variations : [];
        let aVariationMap = g_aPoses.filter(p => aVariationNames.indexOf(p.EnglishName) > -1);
        pose.Variations = aVariationMap;

        let aPreviousPosesNames = pose.PreviousPoses ? pose.PreviousPoses : [];
        let aPreviousPosesMap = g_aPoses.filter(p => aPreviousPosesNames.indexOf(p.EnglishName) > -1);
        pose.PreviousPoses = aPreviousPosesMap;

        let aNextPosesNames = pose.NextPoses ? pose.NextPoses : [];
        let aNextPosesMap = g_aPoses.filter(p => aNextPosesNames.indexOf(p.EnglishName) > -1);
        pose.NextPoses = aNextPosesMap;
    })

    //updateLists();
}

function updateLists(){
    let aDiffs = Array.from(new Set((g_aPoses.map(p => p.Difficulty))));
    aDiffs.sort();
    poseApp.diffItems = aDiffs;
}

/*
window.onload = $.getJSON("raw_data.json", function(json) {
    parseRawJSONData(json);
});;
*/

window.onload = setTimeout(function(){parseRawJSONData(g_JSON)}, 500);
