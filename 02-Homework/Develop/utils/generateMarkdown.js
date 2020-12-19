// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.Title}

#### Description
${data.Description}

#### Installation
${data.Installation}

#### Usage
${data.Usage}

### License
${data.License}

#### Contribution
${data.Contribution}

#### Test
${data.Tests}

#### Questions
${data.Questions}

### Github
${data.Github}

### Email
${data.Email}

`;
}

module.exports = generateMarkdown;
