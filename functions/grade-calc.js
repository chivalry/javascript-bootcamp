const grade = function(score, possible) {
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