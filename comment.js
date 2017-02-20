


var addComment = function (username, comment) {
  $(".comment").append("<textarea>" + userName + ":" + comment + "</textarea");
}


$("#addComment").on("click", function(){ //creating post

  $(".form-comment").css("display", "block");
  var userName = $("#user-name").val();
  var comment = $("#comment-text").val(); //(posts.length + 1)
  console.log(userName);
  console.log(comment);
  addComment(username, comment); 
});




