// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {
  [![`License: ${license}`](`https://img.shields.io/badge/License-${license}-yellow.svg`)](`https://opensource.org/licenses/MIT`)
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
generateMarkdown = ({ title, tableOfContents, installation, use, license, contributions, tests, questions, email, username}) => {
let readMeText =
`# ${title}

## Table of Contents 

${tableOfContents} 
  
## Installation

${installation}

## Use 

${use}

## License

${license}

## Contributions

${contributions}

## Tests

${tests}

## Questions for the Developer? 

${questions}

## Contact Information 

GitHub: ${username}<br>
Email: ${email}
`
return readMeText;
;
}

module.exports = generateMarkdown;
