const Metalsmith=require('metalsmith')
const inquirer=require('inquirer')
const chalk=require('chalk')
const path=require('path')
const ora=require('ora')
const transformIntoAbsolutePath=require('./local-path').transformIntoAbsolutePath
const renderTemplateFiles=require('./render-template-files')




module.exports=(tmpPath)=>{
  const metalsmith=Metalsmith(tmpPath)
  inquirer.prompt([{
    type:'input',
    name:'name',
    message:'项目名称？',
    default:'swy-fe'
  },{
    type:'input',
    name:'destination',
    message:'下载地址？',
    default:process.cwd()
  }]).then(answer=>{
    //项目生成路径
    const destination=path.join(transformIntoAbsolutePath(answer.destination),answer.name)
    const spinner = ora('generating...').start()
    //加入新的全局变量
    Object.assign(metalsmith.metadata(),answer)
    
    spinner.start()

    metalsmith
    .source('.')
    .destination(destination)
    .clean(false)
    .build(function(err) {      
      spinner.stop()
      if (err) throw err
      console.log()
      console.log(chalk.green('Build Successfully'))
      console.log()
      console.log((`${chalk.green('Please cd')} ${destination} ${chalk.green('to start your coding')}`))
      console.log()
    })
  })
}

