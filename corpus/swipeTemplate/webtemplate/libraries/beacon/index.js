import Path from "../path/index.js";

/*
  Dependencies: Axios, observer
  Purpose: Emulates file system for automatic content updates
*/

class Beacon{
  constructor(){
    this.storage={};
    this.mirror={};
    this.daemonRunning=false;
    this.daemonInterval=500;
  }
  watch(filePath,pathNode,updateChannel){
    this._asyncProxy(filePath,pathNode,updateChannel);
    return ''
  }
  async _asyncProxy(filePath,pathNode,updateChannel){
    const fileName=this._nameFile(filePath);
    if(!this.storage[fileName]){
      const url=`${window.location.protocol}//${Path.join(window.location.host,filePath)}`;
      const fileContents = await requests.get(url);
      this.storage[fileName]=fileContents.data;
      this.mirror[fileName]={data:JSON.stringify(fileContents.data),watchPaths:[]};
    }
    this.mirror[fileName].watchPaths.push({
      path:pathNode,
      channel:updateChannel
    });
    updateChannel(_.get(this.storage[fileName],pathNode));
    if(!this.daemonRunning){this.diffDaemon();this.daemonRunning=true};
  }
  _nameFile(file){
    return file.split('').reverse().join('').split('/')[0].split('').reverse().join('');
  }
  diffDaemon(){
    const _this=this;
    this.daemon=setInterval(function(){
      const storageKeys=Object.keys(_this.storage);
      const storageKeysLength=storageKeys.length;
      for(let i=0;i<storageKeysLength;i++){
        const key=storageKeys[i];
        const watchPaths=_this.mirror[key].watchPaths;
        const watchPathsLength=watchPaths.length;
        for(let k=0;k<watchPathsLength;k++){
          const watchPath=watchPaths[k];
          const pathNode=watchPath.path;
          const oldVal=_.get(JSON.parse(_this.mirror[key].data),pathNode);
          const newVal=_.get(_this.storage[key],pathNode);
          if(oldVal!==newVal){
            const channel=watchPath.channel;
            channel(newVal);
            _this.mirror[key].data=JSON.stringify(_this.storage[key]);
          }
        }
      }
    },this.daemonInterval);
  }
}

export default Beacon;
