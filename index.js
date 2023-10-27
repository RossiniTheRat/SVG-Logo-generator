import inquirer from 'inquirer';

function init(callback) {
    callback();
}

init(() => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'brandInitials',
            message: 'What initials would you like to use for your brand?',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the letters to be?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like to use?',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the shape to be?',
        },
    ])
}).then((response) => {
    console.log(response);
});
