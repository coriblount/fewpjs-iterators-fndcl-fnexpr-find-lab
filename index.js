const superbowlWin = (record) => {
// let result = record.find( record => record.result === "W" )
//  return !!result ? result.year : undefined
const result = record.find(superbowl => superbowl.result === "W")
try {
    return result.year
} catch(error) {
    return result
}

}
