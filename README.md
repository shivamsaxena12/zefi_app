# zefi_app - Youtube Data Search API

# Run the app

- clone the project
- npm i
- For Android: npm run android, 
- For iOS: cd ios && pod install && cd .. && npm run ios

# Tasks for scaling the app

- Add Logout functionality

   setUserData to empty object which will remove the access_token and logout the current user

   call logoutWithMagic function inside Auth service

- Add Error handling

  if not authorised, logout the users

  if request is timed out, show users message for internet connectivity issue
   
- Save data in redux so that if internet is not connected, the user has some functionalities on the app

- Add firebase remote config for all the keys, so that if any values need to be changed, ther is no need of update.

- Add firebase analytics or any other analytics service. Add app update popup (force update + recommended UI)

- Add Toast for various cases (success, error), app icon and font family
