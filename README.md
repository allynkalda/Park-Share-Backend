# ParkShare (Backend)

## Description

The mobile app allows users to share their parking space to other users by posting details of their parking spots in the app. The interested users will then be able to see the posted spaces and the contact details of the renters of the space. They will be able to send messages to the owner of the parking spots.

![image-park-share](https://i.postimg.cc/v8CCDBGV/parkshare.png)

## User Stories

- The users will see the logo of the service and they will be able to select from the sign up and login options.</br>
- When they select the sign up option they will be allowed to sign up with their personal details and add a photo to their profile.</br>
- When the users select the log in option, they will be able to log in to the app using their login details.</br>
- They will see the Google Map showing their location and markers showing the parking spots available in the area.</br>
- The users will then be able to choose whether to look for parking or to rent a parking space.</br>
- When the users click on the option of looking for parking, he will be shown the list of parking spots available parking spots and where they are located.</br>
- They can then choose to get more information of a specific parking spot and contact the owner by messaging him in the app.</br>
- The users who choose to rent out their parking can fill in the form with the data on the parking spot they are intending to rent out.</br>
- They will be shown a success message if they have successfully posted their parking spot.</br>
- The navbar will show a log out button which will allow users to log out, a home button to go back to the rent out parking or rent a parking option, and an inbox button to see if there were any messages from other users.</br>
- The user gets an error 404 when the page does not exist. </br>
- The user gets an error 500 when there is an internal server error. </br>

## Backlog

Calendar API: This will allow users to see the date and time when the parking spot will be available</br>
Sockets.io: This will allow users to have a chat functionality to message other users.

## Data Structure
```
**User** { 

​	First Name: String,

​	Last Name: String,

​	Email: String,

​	Username: String,

​	Password: String,

​	Image: String,

​	Id: user_id

}
```
```

**Parking** {

​	Renter: user_id,

​	Location: Object,

​	District: String,

​	Image: String,

​	Space: enum[car, van, motorbike]

​	Description: String,

​	UsersInterested: [user_id],

​	Date: Date

}
```
```

**Message** {

​	User: user_id,

​	Renter: user_id,

​	Message: String,

​	Date: Date

}
```
## Routes

**Back-end Routes**

| HTTP Method | Route              | Description                                                  |
| ----------- | ------------------ | ------------------------------------------------------------ |
| ****GET****     | `/`                | Main page route. Login and sign up option.                   |
| ****GET****     | `/login`           | Login route. Renders login form view.                        |
| ****POST****    | `/login`           | Login route. Sends login form data to the server.            |
| ****GET****     | `/signup`          | Signup route. Renders signup form view.                      |
| ****POST****    | `/signup`          | Signup route. Sends signup info to server and creates user in the DB. |
| ****GET****     | `/profile/:userId` | Renders profile view.                                        |
| ****GET****     | `/directory`       | Find parking or Rent out parking options.                |
| ****GET****     | `/findparking`          | Renders Google Map markers of available parking spots.                                    |
| ****GET****    | `/findparkingall`          | Shows parking spots in a grid.                                 |
| ****GET****    | `/findparking/:id`       | Show specific parking detail.                                 |
| ****GET****    | `/findparking/:id/success`       | Shows success in getting the parking owner's details.                                 |
| ****GET****     | `/rentparking`  | Renders a form that the user who wants to rent has to fill in.                               |
| ****POST****     | `/rentparking`         | Sends the data on the parking the user wants to rent and saves it in the database.             |
| ****GET****     | `/success` | Renders successfully saved details of the parking spot.    </br>                          |

**Front-end Routes**

Route exact path='/' component={Main}</br>
Route path='/login' component={Login}</br>
Route path='/signup' component={Signup}</br>
Route path='/directory' component={Directory}</br>
Route path='/findparking' component={ParkingList}</br>
Route path='/findparking/:id' component={ParkingDetails}</br>
Route path='/rentparking' component={ParkingForm}</br>

## Technologies

****Back-end:**** Node, Express, Mongoose, Passport.js, zxcvbn, bcrypt</br>
****Front-end:**** React, Axios, Cloudinary

## Getting Started

**Prerequisites**
- Node
- Npm

**Installing**

Clone both the ParkShare front-end and the ParkShare back-end</br>

In the command line, for both repos, enter:
```
npm install
```
**To start**
On the frontend:
```
npm start
```
On the frontend:
```
npm run dev
```

## Links

Backend: https://github.com/allynkalda/Park-Share-Backend</br>
Trello: https://trello.com/b/PVF9NL0F/park-share-app-project</br>
Slides: <a href="https://drive.google.com/open?id=1sWxuFSNB_YxhaRW1ekSc9qbvpFBxCCOs0QhjMow-Et0">Google Presentation</a></br>
Deployed version: https://recipease-ironhack.herokuapp.com/</br>

