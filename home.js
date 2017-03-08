function main() {
 var colours = ["Red", "Yellow", "Blue"]; /* array values */
			var text = ""; /* empty variable  */
			var i; /* variable i */
			for (i = 0; i < colours.length; i++) 
    /* for loop that displays the array from [0] end of the array colors */ {
    			text += colours[i] + " ";
        /* variable text is combined with the colors[i] array loop and adds an empty space */
			}
			document.getElementById("colourList").innerHTML = text; 
    /* in the paragraph named colour list adds the loop */


    
    
var tweetS = "" /* declares a variable with an empty value called tweetS */
var tweet = ["ones","two","three"]; /* creates an array with [0]one, [1]two, [2]three  */

for (var i=0; i<tweet.length; i++) /* which number to start from; runs whole arrays lenght; adds one number to i  */
    { 
        tweetS=tweetS + "<p>" + tweet[i] + "</p>"; /* the empty variable plus the array number inside an paragraph tag  */ 
        }

document.getElementById("tweet").innerHTML=tweetS /* insets the tweetS into the div tag */ 


}


