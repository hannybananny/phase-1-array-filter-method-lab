function findMatching(drivers, string) {
    let results = drivers.filter(name => name.toLowerCase() === string.toLowerCase())
    return results
}

function fuzzyMatch(drivers, string) {
    let results = drivers.filter(name => name.substring(0,2) === string.substring(0,2))
    return results
}

function matchName(drivers, string) {
    let results = drivers.filter(drivers => drivers.name === string)
    return results
}