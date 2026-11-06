/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var  promiseAll =  function (functions){
    return new Promise((resolve,reject)=>{
        let results =  [];
        let completed = 0;

        if(functions.length ===0){
            resolve(results);
            return;
        }

        functions.forEach((fn,index)=>{
            fn()
             .then((val)=>{
                results[index]  = val;
                completed++;

                if(completed === functions.length){
                    resolve(results);
                }
             })
             .catch((reason)=>{
                reject(reason);
             });
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */