Just Do it Client

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
*** User will not see the same video twice ....in a row(if the database is made manually)


FUTURE FEATURES
Integration of YouTube api
* videoDuration
The videoDuration parameter filters video search results based on their duration. If you specify a value for this parameter, you must also set the type parameter's value to video. (string)

* videoEmbeddable
The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video. (string)

https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&maxResults=25&q=surfing

11/29
* Feedback for change password, unsuccessful sign in, unsuccessful sign out, update fitness
* Add 2-3 resources for the 6 video types. Total (12-18)
* Start workout div shows only when api calls have been made
* Parsed json files sent from the backend to populate iframe with a random YouTube embed link that is the correct time length.
* Added ui success and failure for all video events. Total - 12 functions

To do
*** Figure out how to use the latest data.user.fitness if user changes their fitness level prior to watching video.
*** Remove all console.logs
*** Maybe use bootstrap notify for authedMessage
