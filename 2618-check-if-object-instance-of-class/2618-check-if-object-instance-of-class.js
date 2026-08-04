var checkIfInstanceOf = function (obj, classFunction) {
  if (obj == null || typeof classFunction !== "function") {
    return false;
  }

  let current = Object.getPrototypeOf(obj);


  while(current !==null ){
    if(current === classFunction.prototype){
        return true;
    }

    current = Object.getPrototypeOf(current);
  }

  return obj instanceof classFunction;
};