const path=require('path')
//相对路径改成绝对路径
module.exports={
  transformIntoAbsolutePath:function(localPath){
    if(typeof localPath === 'string'){
      return path.isAbsolute(localPath)?localPath:path.join(process.cwd(),localPath)
    }
    return localPath;
  }
}