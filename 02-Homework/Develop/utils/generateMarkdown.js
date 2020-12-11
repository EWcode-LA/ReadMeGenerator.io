// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  # ${data.Description}

  # ${data.License}

  # ${data.Github}

  # ${data.Email}

`;
}

module.exports = generateMarkdown;
