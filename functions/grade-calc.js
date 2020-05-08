const grade = function(score, possible) {
    if (typeof score !== 'number' || typeof possible !== 'number') {
        throw Error('arguments must be numbers')
    }
    const percent = score / possible * 100;
    let grade = null;
    if (percent < 60) {
        grade = 'F';
    } else if (percent < 70) {
        grade = 'D';
    } else if (percent < 80) {
        grade = 'C';
    } else if (percent < 90) {
        grade = 'B';
    } else {
        grade = 'A'
    }
    const article = grade == 'A' || grade == 'F' ? 'an' : 'a';
    return `You got ${article} ${grade} (${percent})%!`
}

console.log(grade(75, 100));
try {
    console.log(grade(true, 100))
} catch (error) {
    console.log(error.message)
}