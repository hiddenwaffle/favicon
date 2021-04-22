# favicon-clean

This code reproduces some odd behavior when using both a favicon and the output.clean feature in webpack 5. The favicon is served until the second compile occurs.

Directions:
* Clone the repository
* `npm install`
* `npx webpack serve`
* Confirm that the favicon loads
* Change something in the main.js file
* Hard-reload and you should see that the favicon does not load (a 404 error)
