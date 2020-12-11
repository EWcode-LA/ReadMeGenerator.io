// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  # ${data.Description}

  # ${data.Installation}

  # ${data.Usage}

  # ${data.License}

  # ${data.Contribution}

  # ${data.Tests}

  # ${data.Questions}

  # ${data.Github}

  # ${data.Email}

`;
}

module.exports = generateMarkdown;
