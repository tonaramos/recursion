// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(str) {
// set =utput variable	
//	check if first and last character is a curly brace
//  set output variable as an object
	var output;
	var remainingStr;
	if (str.charAt(0) === "{") {
		output = {};
		remainingStr = str.substring(str.indexOf(":") + 1, str.length)
		output[str.slice(1, str.indexOf(":"))] = parseJSON(remainingStr)
	}
	if (str.charAt(0) === "[") {
		
	  let bracketIndex = bracketFinder(remainingStr);
	  let outputArray = parseJSON(str.slice(bracketIndex[0]+1,bracketIndex[1]))
	    function bracketFinder(string) {
		  let firstIndex;
	      let lastIndex;
	      let tracker = 0;
	      for(i=0;i<string.length;i++){
	        if (string[i]=== '['){
	        	tracker += 1;
	        	if(!firstIndex){
	              firstIndex=i;
	        	};
	        }
	        if (string[i] === ']'){
	        	tracker -= 1;
	        	lastIndex = i;
	        }
	      }
	      return [firstIndex, lastIndex];
		}
      return [outputArray];
	}
	return output;
};

//{"firstKey":["helloword"],"secondKey":[3]}

//{ "firstKey": ['thisisastring',[1,2,3]] , "secondKey": [false,undefined,null] }

//  '{"boolean, true": true, "boolean, false": false, "null": null }'
//   { boolean, true: true, boolean, false: false, null: null }

//have an array for each array and/or obj to tack the {}[] tha have been open or closed 

//01
//check if first and last character is a curly brace      
	//find first pair of quotes and assign that     // end/startcurly=== true         //output  = {}
	//       string as key in output variable
	//braketsTracking add open braket to objBraketArray
	//assign the remaining string as the key value	//{key:remainingStr} call parseJson(ramainingStr)
	//  check for opening [  
	//  braketsTracking add open bracket to arrBraketArray
	//  assign empty array to output
	//  assigin remainder or str as array[0];		//{'firstKey:[remainingStr]'}
	//    return parseJSON(remainingStr)
	//  check for brakets->check for string(quotes)
	//    change index[0] to string "thisisastring" and assign ramainingStr to index[1] 
	//      return parseJSON(remainginStr)
	//    check for {}[]->check for string->check for number and look for closing ]
	//      assign number to index[1]
	//        closing ] found ->close current open array
	//   look for , after closing ] -> if coma found asign the value of the next quot pair as key for next obj element. 


{ "firstKey": ['thisisastring',[1,2,3]] , "secondKey": [false,undefined,null] }


"{ "firstKey": parseJSON(['thisisastring',[1,2,3]] , "secondKey": [false,undefined,null] }")
var1 = parseJSON('thisisastring',[1,2,3])
ver2 = parseJSON(false,undefined,null);
{ "firstKey": [var1] , "secondKey": [var2] }
JSON.parse("4") = 4;



// {"boolean, true": /*'{true, "boolean, false": false, "null": null}'*/};
// {{"boolean, true": true, "boolean, false":/*: false, "null": null }\""*/};}
// {"boolean, true": '\'true\'' , "boolean, false": false, "null":/* null */};
