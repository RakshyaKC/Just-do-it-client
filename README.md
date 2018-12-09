Just Do it Client

Server address https://boiling-fjord-48869.herokuapp.com/
Front end address https://rakshyakc.github.io/Just-do-it-client/

Authorization
* User can sign up.
* User can sign in.
* User can change password.
* User can sign out.
*** User shouldn't have to sign in right after signing up. Sign up should generate authorization token.


User account
* User can enter their fitness level.
* User can see their username.
* User can see how old their account is.
* User can update their fitness level.
* User can delete their account.

Video access
* User can enter their time availability.
* User can play the video in the app itself.
* User will get a random video from the manual database.


FUTURE FEATURES
Integration of YouTube api
* videoDuration
The videoDuration parameter filters video search results based on their duration. If you specify a value for this parameter, you must also set the type parameter's value to video. (string)

* videoEmbeddable
The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video. (string)

https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&maxResults=25&q=surfing

*** User will not see the same video twice ....in a row(if the database is made manually)

Commit


To do
*** Figure out how to use the latest data.user.fitness if user changes their fitness level prior to watching video.
*** Remove all console.logs
