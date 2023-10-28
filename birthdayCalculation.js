function getAge (year, month, day) {
    const birth = new Date(year, month -1, day)
    console.log("Date of birth: " + birth) 
    const now = new Date()
    console.log('Date of Today: ' +  now)
    const diff = new Date(now.valueOf() - birth.valueOf())
    return Math.abs(diff.getFullYear() - 1970)
}

console.log('You are ' + getAge(1995, 6, 20)+ ' years old.')