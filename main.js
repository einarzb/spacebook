
//declaring vars//

var posts = []; //storage var

var counter = 1; //counter var to create unique ID

var comments = []; //storage var for comments (objects technicaly)

//********************************************//declaring functions//***********************************************************//

//********************************************//adding post//***********************************************************//

var addPost = function (text, number) {

//make a condition that checks if text was inserted!

	posts.push({text:text, number:number});
	$("#post-name").val(""); //clear the input field
	addToDiv();
}; 

var addToDiv = function() {
	$(".posts").empty();
	
	for (var i = 0; i < posts.length; i++) {
		$(".posts").append("<p class='post' data-id=" + posts[i].number + ">" + " " + posts[i].text + "<br><button class='btn btn-danger'>remove</button>&nbsp;<button id='addCommentBtn' class='btn btn-primary-comment'>comment</button><br><class=comment></p>");
	  }
};

//*************************************************///remove post ////******************************************************//

var removePost = function () {

//remove post 

	$(this).parent().remove(); //<button> is son of paragraph

//remove post from posts array.
  
  var postId = $(this).parent().data().id;

	for (var i = 0; i < posts.length; i++) {
		if (postId === posts[i].number) { //if the deleted id is inside the array- splice it!
			posts.splice(i, 1);
		}
	}	
};

//*************************************************/////add comment///******************************************************//


var addComment = function (username, comment) {
  $(".comment").append("<textarea>" + userName + ":" + comment + "</textarea");
}


$("#addCommentBtn").on("click", function(){ //creating post
  $(".form-comment").css("display", "block");
  
  // var userName = $("#user-name").val();
  // var comment = $("#comment-text").val(); //(posts.length + 1)
  // console.log(userName);
  // console.log(comment);
  alert("lalala");
  addComment(username, comment); 
});


/********************************************************invoking functions/********************************************/


$(".posts").on("click", "button", removePost); //remove post

$("button").on("click", function(){ //creating post
	var text = $("#post-name").val();
	var number = counter++ ; //(posts.length + 1)
  //var comment = ?
	console.log(text);
	console.log(number);
	addPost(text, number); 
});


/*
Add a feature that allows each post to receive a comment.
 The comment should have a username and some text associated with it.*/

//<button class="btn btn-primary add-comment" type="button">comment</button>


//Add a "page" for viewing an individual post and all its comments.*/
