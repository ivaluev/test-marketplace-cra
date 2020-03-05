# Nakubop Test App

## Todo
[See initial task](/docs/Task.md)

## Project Startup

```
npm i
npm start
```


## Notes

- I have not done any jest tests due to the time pressure as well - although can submit those at request
- I used CRA to save time, although can make a webpack version
- I also used Semantic UI to save time and give the app decent looks
- My goal was to be as simple and short as possible maintaining reasonable minimum number of files for such a small project as well as keeping size of those component files to no more then 200 lines to bolster maintainability
- no translations no google analytics also - can be added ar req.

## App UI flow

### Rate Updates
- manual change is not possible in the current app setup as any change reloads the app - so it is done automatically - every 15 seconds arrives a new random rate in between 20 and 80 - all UI is updated acccordingly

### User can:
- use category sidebar to filter products by category
- second click on a category removes filter
- search is added to purely make app layout look complete - not working (can be connected though)
- add products to cart
- add same product twice will increase amount of the product
- remove product/decrease amount of a product in the cart
- edit name of a product

## Structure

```
/build - build folder (this folder is in .gitignore, so it is not part of this repository)
/docs - initial docs for the task (readme and criteria)
/public - app template
/server - backend part of app (json-server)
/src - frontend part of app
|_ /api - I like my apis be at the top (using simple fetch here)
|_ /components - common components
|_ /layout - layout (page) common components used to constuct a shell
|_ /pages - app pages, routing logic and sub components
|_ /state - redux state (actions and reducers)
|_ /utils - various services and utils.
...
```

## Technology

- react
- typescript
- styled-components
- ...

## Scripts

- `dev` - will run json-server and the app in parallel
- `start` - will run production version
- `build` - will create production bundle
- `clean` - will remove build folder
- `lint` - will run css and js linters
- `test` - will run all test (broken)

## Production deployment

- not done
