### Node.js command line tool which returns property objects from the Rightmove API.

---

This is my first experiment with Node.js. After running the `rightmove_scraper.js` file the user is prompted to provide a postcode `e.g. B98` and property type `e.g. house` and the application will send a request to the Rightmove API and return the 10 most recently listed property objects of the specified type from the specified area.

---

##### Approach

I'm using the readymade `rightmove-scraper` package to which I've applied a small hack (in the request URI within the `byOutcode` function). Because I have modified the package itself I'm including the `node_modules` folder to this repo. Please **avoid running `npm install`** as that would overwrite the the `rightmove-scraper` package which we don't want.

---

##### Shortcomings

I've run into troubles making the app accept postcodes like `B98`. Every postcode like `B98` maps to an 'outcode' like `121`. It seems the Rightmove API only accepts outcodes in the request URIs and I couldn't make the `rightmove-scraper` package work with actual postcodes. I couldn't get _postcode-to-outcode_ mappings to work with `mongodb`. For testing purposes `121` outcode maps to `B98`, `555` maps to `CV11` and `111` maps to `B80`.

---

##### Setup Instructions

- You'll need to have [Node.js](https://nodejs.org/en/download/) installed of course to be able to run the js file.
- You should **not** need to use [npm](https://www.npmjs.com/) to run `npm install` (see comments in 'Approach') section.
- After cloning this repo to your local machine you need to make both files (app + test) executable. `chmod u+x rightmove_scraper.js` `chmod u+x rightmove_scraper_test.js`

---

##### Running The App

If you've managed to make the files executable you should be able to run the app with `./rightmove_scraper.js`. As per my above notes please **use outcodes like `121`** when prompted for postcode.

---

##### Running The Test

Because the test relies on running the main functions of the app which has a verbose output in the CLI you might want to comment out the `console.log` lines in `rightmove_scraper.js`before running the test with `./rightmove_scraper_test.js`.
