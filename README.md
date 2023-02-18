# Waeve - 🌊 

Deployed here: https://waeve.vercel.app/

A vue UI for a social network app, using tailwindcss and daisyui for dropdown menus.
The app uses vue3, vuex, umi-request

No backend as posts are loaded from [dummyapi.io](https://dummyapi.io/)

## Configuration
The timeline posts are loaded from [dummyapi.io](https://dummyapi.io/) so you should make an account, grab your ```app-id``` from [your dummyapi dashboard](https://dummyapi.io/account) then make a .env in the root folder and type
```
VITE_DUMMYAPI_KEY = <replace_this_with_your_key>
```

It will automatically be sent in the headers as configured in ```src/services/api.js```

## Preview
![Preview image](https://i.imgur.com/E9BDRY6.png)


