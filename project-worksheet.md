# Project Overview

## API

host:realtor.p.rapidapi.com
key:e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808

test: https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=New%20York%20City&limit=200&offset=0&state_code=NY&rapidapi-key=e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808

## Project Links

- [https://git.generalassemb.ly/theletterq/project-2-react/commit/63224d07e946b783f6d30d38137d054f0ae372f2]()
- [add your deployment link]()

## Project Description

My plan is to create an app for a real estate. Some of the features of the app will be the ability to search for homes in a specific location and rendering data from (possibly more than one) 3rd party api, and router links....

ex:https://www.realtor.com/


Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

My API is of realtor .com and includes listings of homes for sale on the MLS
```
"price": 
"baths_half":
"baths_full": 
"baths": 
"beds": 
"building_size": {
"size": 
"units": 
},
"agents": [
{
"primary": 
"advertiser_id": 
"id": "
"photo": {
"href":
},

}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [https://res.cloudinary.com/du2kodoow/image/upload/v1601669538/20201002_125549_hkqzql.jpg]()
- [add link to your react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Creating filters for search
- a handleClick function to highlight selected address
- input fields to allow users to select location
- 
#### PostMVP EXAMPLE

- Add extra filters 

## Components
App- home w/ main functions
List-rendering list of homes from api
Listing- when clicked a single  home pops up
About-about me
Search-creating filters for searching homes
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| List| This will render the listings  | 
| Listing| This will render a specific listing once clicked|
|About| This will be my about.me page| stateless
|Search| Listings with filters available 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App| 1 | 3hrs|  | |
| List | 3 | 1.5hrs|  |  |
|Listing|2|1hr|
|About|4|1hr|
|Search|N|2.5
| Total | H | 7.5hrs| 5hrs | 5hrs |

## Additional Libraries
 SCSS, React

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
