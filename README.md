# dividend-tracker
Android app to easily track dividend returns making use of Polygon's Stock API

# Running Locally
- You will need to create a config.ts file in the root directory
- This file should have a variable named "apiKey", which you can set
to the value of your polygon API Key.
- You can get your api key at https://polygon.io/docs/stocks/getting-started
- Run npm install

## In Browser

- ionic serve

## On Android phone

- Download Android Studio
- Make sure phone is in developer mode and usb debugging is enabled

- If first time setup, run ionic capacitor add android
- To update build with new changes, run ionic capacitor copy android

- Run "npx cap open android"

- Press Run in Android Studio

- You can also drag and drop the .apk file from your computers storage to your connected phone
and install the app from your phone's file system

  - You can generate the .apk file in Android studio under the build tab

  - The apk file(app-debug.apk) should be generated in the path: ./android/app/build/outputs/apk/debug
