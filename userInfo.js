var profiles=[]
function UserProfiles(namesArr,modifiedNamesArr){
  if(namesArr.length !==modifiedNamesArr.length ){
    throw new Error( "Arrays must contain same number of length")
  }
  for(let i =0;i< namesArr.length;i++){
    profiles.push({
        namesArr:namesArr[i],
        modifiedNamesArr: modifiedNamesArr[i],
        id:i+1

    })
    return profiles;
  }
}