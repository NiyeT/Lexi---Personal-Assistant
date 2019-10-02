const core={
  object:{
    traverse:function(needle, haystack, found = []){
      Object.keys(haystack).forEach((key) => {
        if(key === needle){
          found.push(haystack[key]);
          return found;
        }
        if(typeof haystack[key] === 'object' && !Array.isArray(haystack[key])){
          search(needle, haystack[key], found);
        }
      });
      return found;
    },
    find:function(object,path){

    }
  }
}

export default core;
