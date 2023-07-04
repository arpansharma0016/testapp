/* eslint-disable no-undef */
App.info({
    id: 'com.meteorapp.testapp',
    name: 'Fasalclub',
    description: 'Agricultural Super App made in India',
    author: 'Fasal',
    email: 'partha.roy@wolkus.com',
    website: 'https://fasalclub-dev.meteorapp.com',
  });
  
  App.setPreference('android-targetSdkVersion', '30');
  App.setPreference('StatusBarBackgroundColor', '#f5f5f5');
  App.setPreference('Orientation', 'default');
  App.setPreference('Orientation', 'all', 'ios');
  App.setPreference('AutoHideSplashScreen', true);
  App.accessRule('*');
  App.accessRule('*.google.com/*');
  App.accessRule('*.googleapis.com/*');
  App.accessRule('*.gstatic.com/*');