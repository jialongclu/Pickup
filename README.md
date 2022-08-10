# Project Summary
Pickup is tinder for pickup basketball. We help local Vancouver basketball players link up and create a community within the basketball scene here in Vancouver. Once users are matched, they can see each other’s contact information and connect!

Here is the repo to our server!
https://github.com/jialongclu/pickup-server

# Project Tasks Requirements

*  Project task requirements:
   * 3-5 minimal requirements (will definitely complete)
      * Signup and create a profile  ✅
      * Login/Signout  ✅
      * See other people’s profile and match with people  ✅
   * 3-7 "standard" requirements (will most likely complete)
      * Filter people based on skill level and age  ✅
      * Edit profile  ✅
      * Upload pictures  ✅
      * Chat with the people you match with  ❌
   * 2-3 stretch requirements (plan to complete at least 1!)
      * Check how busy certain basketball courts are through the map ❌
      * Error Alerts ✅
      * Create teams ❌
      
# Description of how Unit 1-5 technologies were used

* From Unit 1: We used ready to go components provided by Material UI along with css to have beautiful and easy to use components. We used pure css as well as Material UI theme to style our app. Our application is written entirely in javascript which provides async/await for asynchronous actions like making an api call.

* From Unit 2: We used the React framework to reduce code duplication as we can create reusable components that can be used throughout our codebase. We used hooks to control a component's state and Redux to have access to data throughout our application. We store the filters that the user has set in the Redux store.
 
* From Unit 3: We used Node and Express to build our app’s backend. We created endpoints that allowed us to sign in, sign up, make updates to a user’s profile, etc. With Mongoose, an ODM, Node and Express allowed us to retrieve information from the backend and send it to the frontend as a JSON response.

* From Unit 4: We used MongoDB to store information about our users on sign up. This information is used to show the potential matches in your area when you are swiping. We also stored information like who you have already swiped on so that you don’t see the same people twice. MongoDB persists our app’s information even if the user logs out.

* From Unit 5: We used heroku to deploy our server and netlify to deploy our frontend. We used automatic deployment so that we didn’t have to deploy everytime we merged to main. This allows us to focus on coding and not the deployment process.


# Above and Beyond Functionality
# Next Steps

In order to increase interactiveness and provide greater value for our users, we plan to implement the features we did not complete in our stretch goals. It would be valuable to have a built-in chat feature to allow users to communicate directly within our app. We also plan to integrate the Google Maps API in order to allow users to mark locations of popular basketball courts and to check how busy they are throughout the day.

# Team Contributions
* **Tanraj** - 
* **Jialong** - I worked on setting up Node JS, Express, and MongoDB. I created the endpoints for sign up and log in and stored the created users on MongoDB to be used for matching. I also created the edit profile, which allows users to update their information after signing up. I added alerts for the sign up page if information was missing.
* **Sara** - For Pickup, I worked on implementing the front end for the home page, sign up, sign in and matching page. I also implemented the swipeable card feature on the matching screen and the ability to upload profile pictures on user sign up. 
* **Shubh** - 

