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
*** User can see a youtube video link.
*** Maybe user can play the video in the app itself.
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

To do
*** Add 2-3 resources for the 6 video types. Total (12-18)
*** embed json files
*** Start workout only when api calls have been made
*** Add ui success and failure for all video events. Total - 12 functions
*** Remove all console.logs
*** Sign out success should reset the whole website i.e. Should go back to showing unauth view.
*** Maybe use bootstrap notify for authedMessage
