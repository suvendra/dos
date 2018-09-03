/**
 * Function for string template literal
 */
String.prototype.format = function() {
    var formatted = this;
    // for ({key, value} in values) {
    //     var regexp = new RegExp('\\{'+key+'\\}', 'gi');
    //     formatted = formatted.replace(regexp, value);
    // }
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

/**
 * Function for string template literal from key value pair
 * e.g: templateFormat('This is {name}', {'name': 'your name'});
 */
export function stringFormat(text, values) {
    var formatted = text;
    if (typeof values === "object") {
        Object.entries(values).map(([key,value])=>{
            var regexp = new RegExp('\\{'+key+'\\}', 'gi');
            formatted = formatted.replace(regexp, value);
        });
    }
    return formatted;
};