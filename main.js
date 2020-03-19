function isMappable(s1, s2) {

    if (s1.length !== s2.length) {
        return console.log('false')
    }

    const charMap = {}

    for (let i = 0; i < s1.length; i++) {
        if (charMap[s1[i]]) {
            if (charMap[s1[i]] !== s2[i]) {
                return console.log('false')
            }
        } else {
            charMap[s1[i]] = s2[i]
        }
    }

    return console.log('true')
}


isMappable(s1, s2)