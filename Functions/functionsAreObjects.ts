const dev = {
    skills: [ 'js', 'ts', 'go', 'c', 'c++' ],
    jobTitle: 'SDE'
};

function displaySkills () {
    return this.skills;
}

const displayJobTitle = function () {
    return this.jobTitle;
};

// undefined => no this of their own in arrow funcs
// const displayJobTitle = () => {
//     return this.jobTitle;
// };

const skillset = displaySkills.apply(dev);
console.log(skillset);

const job = displayJobTitle.apply(dev);
console.log(job);