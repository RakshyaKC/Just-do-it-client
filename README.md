Just Do it Client

* Give user a new work out video based on their self assessed fitness level and time availability.


Server address https://boiling-fjord-48869.herokuapp.com/
Backend repo https://github.com/RakshyaKC/Just-do-it-rails-API
Live site https://rakshyakc.github.io/Just-do-it-client/

Wireframes - https://i.imgur.com/zMaZFEs.jpg
User stories below!

Authorization
* User can sign up.
* User can sign in.
* User can change password.
* User can sign out.


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

Social
* User can create invites using friend's (invitee) email address
* If invitee email is a registered user, an invitation to the specific workout video will be sent**
* If database does not have invitee email, an email with introduction to
  website will be sent**

Process & Techonologies
* HTML, Sass and bootstrap for markup and styling.
* Used a gif for pre authorization background.
* Used an image for post authorization background.
* The website is minimal in look and has a clean feel to encourage serenity.
* JavaScript and jQuery used to event handling.
* AJAX calls are made to make requests to the backend.
* The data from the server is captured in success & failure messages for functionality. For example, video url.
* Randomized video url is used to populate an iframe tag to show an embedded video.


FUTURE FEATURES
* Invitations will generate email to invitee email addresses.
* Non existing users will receive an email with introduction to the website and name of the inviter.
* Friends can schedule workout at a certain time and will be sent reminder an
hour prior to starting time
* Users can enter quotes and sayings to set the 'studio space' mood
* A token will be generated upon sign up so user doesn't have to sign in right
after signing up.
* User will not see the same video twice in a row(if the database is made manually)
* User will be able add their own videos or workout routines.

Commit
* updated the fitness change check on all three time availability.
