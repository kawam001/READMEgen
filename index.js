
const inquirer = require('inquirer');
const fs       = require('fs');
const MarkDown = require('./generateMarkdown');

const questions  = [
    {
      type: 'input',
      name: 'title',
      message: 'Project Title:',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Project Description:',
    },

    
    {
      type: 'input',
      name: 'installation',
      message: 'Installation Instructions:',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Project Usage:',
    },


    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing Information:',
    },

    {
        type: 'input',
        name: 'email',
        message: '@email address for questions:',
      },
  
      {
          type: 'input',
          name: 'github',
          message: 'github address for questions:',
      },
  
      
      {
        type: 'list',
        name: 'license',
        message: 'Choose License:',
        choices: ['MIT','ISC','OCLC','SleepyCat','GnuGPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
      }    
    

  ];



    function askQuestions() {
        return inquirer.prompt(questions)
            .then((response) => {
                const outputRecord = MarkDown.generateReadme(response)

                fs.writeFile('README.md', outputRecord, function(err) { 
                  if (err){ 
                    console.log(`Could Not Save File!`)
                  }
                  else
                  {
                    console.log(`Success!!  New File Generated`)


                  }
                })
                console.log(`Response ${response}`)
                console.log(`Output ${outputRecord}`)
                return response
                })
            .catch((error) => {
              console.log(response)
              console.log(`No Response === ${error} ====Error detected`)
        })
  }

  askQuestions();
  




