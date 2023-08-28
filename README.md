# simple-mobile-app

This is a small sample project that aims to a demo a simple app in React Native using Expo

## How to run the app

### prerequisites
This app has been built with expo - to spin up the project you will need to have simulators or emulators set up on your computer.
Take a look at the following

- https://docs.expo.dev/workflow/ios-simulator/
- https://docs.expo.dev/workflow/android-studio-emulator/

### installation

Once downloaded run..

```
npm i
```

To see the code running on an ios simulator
```
npm run ios
```

To see the code running on an android emulator
```
npm run android
```


## The proposed architecture
- A screen to present all posts
- A screen to present the favourite post
    - The documentation for this test states "Implement a mechanism to remove all posts except from the favorites ones" 
as the api support favourites I've interrupted this to be the presentation of
a view with only the favourite ones - this can be done via the presentation of a new screen rather than deleting all the
other data.
- A screen to present the detailed view of a post
  - This not only present the details of the post, the name of the author and the list of comments
but also provide the mechanism to favourite a post - A star in the top right hand corner. The mechanism 
to delete a post can be found at the bottom of the the detailed post screen


## Third-party libraries
- #### @react-navigation - bottom-tabs & native-stack
  - This is used to provide the navigation between screens and to present the structure of the app.
the native stack provides navigation between the List views and the detail view. The tabs provide navigation
between the two list views and help to provide the view for favourites only.

- #### @tanstack/react-query - 
  - Used to control the fetch of data and provides data caching of the app. Used mainly via hooks. This also presented a simple mechanism 
force a refetch of all the post data.

- #### @react-native-async-storage/async-storage - used in the example to allow the state 
  - Used to store the favourites data on the device. There is no rest api for post favourites so this would allow the favourites to be stored even if the app is shutdown and restarted by the user.
Also if used in conjunction would allow for easy offline app usage (though I never got around to this)

    
### Additional notes
In terms of testing I've only had time to add a few tests, certainly not as many as I would add in production code. I've also not managed to look
at the offline support due to time constraints.
