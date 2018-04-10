// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// 
var getElementsByClassName = function(className) {
//  init array to collect elements with className
//	check document for classlist to compare with className
//		push matching element to collection array
//  check if  document.childNodes is greater than 0
//		iterate through document.childNodes
//			check classList of current index to compare with className
//			check if current index .childNodes is greater than 0;
//				iterate through current index.childNodes
//					check classList of current index to compare with className
//					check if current index .childNodes is greater than 0;
//						iterate through current index.childNodes

	var elementsWithClass = [];
	(function helper(item) {
		if (item.childNodes.length > 0) {
			var x = item.childNodes;
			_.forEach(x, function(element) {
				if (_.contains(element.classList, className)) {
					elementsWithClass.push(element);
				}
				helper(element);
			});
		}
	})(document);
	return elementsWithClass;
};