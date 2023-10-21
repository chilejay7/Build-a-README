// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {
  if (!license) {
    return ''
  } else {
  let badge = `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`

  return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = (license) => {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection = (license) => {

}

// TODO: Create a function to generate markdown for README
generateMarkdown = ({ title, description, tableOfContents, installation, use, license, contributions, tests, questions, email, username }) => {

  // console.log(tableOfContents);
  // console.log(tableOfContents.length);

  let table = [tableOfContents];
  console.log(table.length);

  generateTable = () => {
    if (table !== null || table !== undefined) {
      for (let i = 0; i < table.length; i++) {
        `[${table[i]}](##${table[i]})`
        console.log(table[i]);
      }
    }
  }

  let readMeText =

  `# ${title}

  ${renderLicenseBadge(license)}

  ## Description

  ${description}

  ## Table of Contents 

  ${tableOfContents} 
    
  ## Installation

  ${installation}

  ## Usage

  ${use}

  ## License

  ${license}

  ## Contributions

  ${contributions}

  ## Tests

  ${tests}

  ## Questions for the Developer?

  Please contact me at:  
  GitHub: ${username}  
  Email: ${email}
  `
    return readMeText;
}

module.exports = generateMarkdown;
