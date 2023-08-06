class MarkDown {

  static licenseBadge(license) {
    const badges ={
        mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licences/MIT)',
        isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licences/ISC)',
        oclc: '[![License: OCLC](https://img.shields.io/badge/License-OCLC-red.svg)](https://opensource.org/licences/OCLC)',
        sleepycat: '[![License: SLEEPYCAT](https://img.shields.io/badge/License-SLEEPYCAT-green.svg)](https://opensource.org/licences/sleepycat-php)',
        gnugplv3: '[![License: GNUGPLV3](https://img.shields.io/badge/License-GNUGPLV3-cyan.svg)](https://www.gnu.org/licenses/gpl-3.0.html#license-text)'
        }

    return badges[license]
    }

  static licenseLink(license) {
    const link ={
        mit: '[MIT](https://opensource.org/licences/MIT)',
        isc: '[ISC](https://opensource.org/licences/ISC)',
        oclc: '[OCLC](https://opensource.org/licences/OCLC)',
        sleepycat: '[SLEEPYCAT](https://opensource.org/licences/sleepycat-php)',
        gnugpLv3: '[![GNUGPLV3](https://www.gnu.org/licenses/gpl-3.0.html#license-text)'
        }

    return link[license]
      }


    static displayLicense(license) {
      if (license) {
          return `Under the Licence of ${this.licenseLink(license)}`
      } else
      {
        return `No License Found`
      }
    }






      static generateReadme(response) {
        
        return `# ${response.title}
${this.licenseBadge(response.license)}
## Table of Contents
- [Description](#description)
- [Installation Instructions](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)
## Description
${response.description}
## Installation 
${response.installation}
## Usage
${response.usage}
## Contributing
${response.contributing}
## Questions
${response.email}
${response.github}
## License
${this.displayLicense(response.license)}

     
`;          


}
}

module.exports = MarkDown;