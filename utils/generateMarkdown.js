// function to generate markdown for README
function generateMarkdown(data) {
  return `
#  ${data.Title}
${data.badge}
<br/>
${data.Description}
<br/>
<br/>
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
<br/>
<br/>
## Installation
${data.Install}
<br/>
<br/>
## Usage
${data.Usage}
<br/>
<br/>
## License
[${data.License}](${data.licenseurl})
<br/>
<br/>
## Contributing
${data.Contribute}
<br/>
<br/>
## Tests
${data.Test}
<br/>
<br/>
## Questions  
If you have questions you can send me a message in GitHub or to my email address.  
My GitHub profile is [${data.github}](https://github.com/${data.github})  
  
Email: ${data.email}.  
`;
}

module.exports = generateMarkdown;
