'use strict';

class Middleware{
  constructor(url){
    this.url=url;
  }
  get(url,data,headers){
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }
  post(url,data,headers){
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }
  update(data,manifest){

  }
}

export default Middleware;
