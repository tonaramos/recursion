// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
//first check if the object is an array
//	iterate thru the array to check for strings
//  if a string exist change form single quotes to doble quotes  
//  return the array with single quotes aroud it
//else if check if the object is an object 
//  iterate thru the keys in the object 
//  change the keys to strings with double quotes 
//  return object with single quotes around it
//else if obj is not undefined 
//  if obj is a string 
//    replace inside quotes with double and add single quotes 
//  add single quotes around obj

//initialize stringified variable to hold result
//if obj typeof string, number, or boolean
// transform obj and store to stringified variable
// return stringified var
//else return undefined

	let output = '';
    if( typeof obj === 'undefined' || typeof obj === 'function' || typeof obj === 'symbol') {
    	return undefined;
    }
    if (obj === null) {
    	output += null;
    	return output;
    } 
	if (typeof obj === 'number' || typeof obj === 'boolean') {
		output += obj;
		return output;
	}
	if (typeof obj === 'string') {
        output += "\"" + obj + "\"";
        return output;
	}
	if (Array.isArray(obj)) {
		let objArr = [];
		for (let i = 0; i < obj.length; i++) {
			objArr[i] = stringifyJSON(obj[i])
		}
		output += `[${objArr}]`;
		return output;
	}
	if (typeof obj === 'object') {
		if (Object.keys(obj).length === 0) {
			return '{}';
		}
		
		for (var key in obj) {
			if (obj[key] !== undefined && typeof obj[key] !== 'function') {
				output += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
			}
		}
		return "{" + output.slice(0,output.length-1) + "}";
	}
};

};
