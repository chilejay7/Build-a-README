// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {
  if (!license) {
    return ''
  } else {
  return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


renderLicenseLink = (license) => {
  if (!license) {
    return ''
  } else {
    return `[License: ${license}](https://opensource.org/licenses/${license})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection = (license) => {
  return `This application is covered under the license linked below.  For further information regarding the license and its terms, please consult the official licensing documentation using the provided link.
  
  ${renderLicenseLink(license)}`
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

  ${renderLicenseSection(license)}

  ## Contributions

  ${contributions}

  ## Tests

  ${tests}

  ## Questions for the Developer?

  If you have any questions, please contact me using the information provided below:  
    
  GitHub: ${username}  
  Email: ${email}
  `
    return readMeText;
}

module.exports = generateMarkdown;
