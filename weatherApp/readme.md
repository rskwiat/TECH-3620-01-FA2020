# Setting up the Weather Application

On your local device in either terminal or PowerShell run:

`expo init weatherApp`

Select `Managed Workflow`, after the installation is complete go into the directory by typing:

`cd weatherApp`

No other packages will be needed for the app!

`npm start` or `expo start`

## Testing the API

Using Open WeatherMap or other APIs before proper development is key for testing. There are two applications in this space, both do the same exact thing.

[Postman](https://www.postman.com/)

[Insomnia Rest](https://insomnia.rest/)

It is personal preference, Postman is more widely used, but Insomnia has a better UI.

## Our Weather API

Sign up for an account at https://openweathermap.org/

Our basic call will match the docs with

`https://api.openweathermap.org/data/2.5/weather?q={cityname}&units=imperial&appid={API key}`


| Params | | |
|---|---|---|
| `q` | `required` | City name, state code and country code divided by comma, use ISO 3166 country codes.
| `appid` |	`required`	| Your unique API key
| `units` | `optional` | Units of measurement. standard, metric and imperial units

#### Unit Params

- For temperature in [Fahrenheit](https://en.wikipedia.org/wiki/Fahrenheit) use `units=imperial`
- For temperature in [Celsius](https://en.wikipedia.org/wiki/Celsius) use `units=metric`
- Temperature in [Kelvin](https://en.wikipedia.org/wiki/Kelvin) is used by `default`, no need to use units parameter in API call

### [Icons and Splash Screens](https://docs.expo.io/tutorial/configuration/)

[Splash Screen](https://docs.expo.io/guides/splash-screens/
) located in the `assets/splash.png`, replace loading png `1242px` width by `2436px` tall.

App Icon located in the `assets/icon.png`, replace the icon and favicon `1024px` width x `1024px` tall


### Resources

- [Text Input API](https://reactnative.dev/docs/textinput)
- [Keyboard API](https://reactnative.dev/docs/keyboard)
- [Touchable Opacity](https://reactnative.dev/docs/touchableopacity#docsNav)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)

- [Fetch Request](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) or the reason why we put backticks ```(`)``` around our Fetch request and I couldn't remember the name.





