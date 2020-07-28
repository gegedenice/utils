/*---- obtenir les valeurs uniques d'une propriétés dans un array d'objets---*/
function uniqueBy(arr,prop){
    var unique = {};
    var distinct = [];
    for( var i in arr ){
       if( typeof(unique[arr[i][prop]]) == "undefined"){
		  distinct.push(arr[i][prop]);
          //or for example for with a json object distinct.push({"api":arr[i][prop]});
       }
       unique[arr[i][prop]] = 0;
    }
    return distinct;
  }
/*---- passer d'un flat array à un nested array regroupé par valeurs uniques d'une propriété---*/
  function nestedJson(arr,prop){
      var result = arr.reduce(function (r, a) {
        r[a.prop] = r[a.prop] || [];
        r[a.prop].push(a);
        return r;
    }, Object.create(null));
    return result;
  }