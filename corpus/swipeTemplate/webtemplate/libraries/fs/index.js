import "../observe/index.js";
import Path from "../path/index.js";

/*
  Dependencies: Axios, observer
  Purpose: Emulates file system for automatic content updates
*/

class FileSystemEmulator{
  constructor(){
    this.storage={};
  }
  watchFile(filePath,pathNode,updateChannel){
    this.asyncProxy(filePath,pathNode,updateChannel);
    return 'temp'
  }
  async asyncProxy(filePath,pathNode,updateChannel){
    const fileName=this._nameFile(filePath);
    const url=`${window.location.protocol}//${Path.join(window.location.host,filePath)}`;
    const fileContents = await requests.get(url);
    this.storage[fileName]=fileContents.data;
    updateChannel(Object.keys(_.set(this.storage[fileName],pathNode))[0]);
    Observe(this.storage[fileName],pathNode,function(change){
      updateChannel(change[Object.keys(change)[0]]);
    })
  }
  _nameFile(file){
    return file.split('').reverse().join('').split('/')[0].split('').reverse().join('');
  }
}

export default FileSystemEmulator;
