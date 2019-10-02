let storage={}

function difference(object, base) {
   function changes(object, base) {
        let arrayIndexCounter = 0;
        return _.transform(object, function (result, value, key) {
            if (!_.isEqual(value, base[key])) {
                let resultKey = _.isArray(base) ? arrayIndexCounter++ : key;
                result[resultKey] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
            }
        });
    }
    return changes(object, base);
}

function getDiffPath(old,news){
  return difference(news,old);
}

window.Observe=function(object,pathNode,dispatcher){
  console.log('observing:',object,'pathnode:',pathNode);
  const dispatcherName=JSON.stringify(dispatcher);
  storage[dispatcherName]={
    'string':JSON.stringify(object)
  };
  setInterval(function(){
    let old=storage[dispatcherName].string;
    const news=JSON.stringify(object);
    console.log('old:',old,'news:',news)
    if(old!==news){
      const changedValue=getDiffPath(JSON.parse(old),object);
      if(changedValue){dispatcher(changedValue)}
      storage[dispatcherName]={'string':news}
    }
  },500)
}
