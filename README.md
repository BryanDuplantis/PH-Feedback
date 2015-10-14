# ph-feedback
### A Node app that inserts Employee names into a relational database, retrieves the data and displays results as JSON

This app simply accepts submissions for exit interviews and sends them to a relational database.

# Usage

## Set up

Clone the repo:
```
$ git clone https://github.com/BryanDuplantis/PH-Feedback
$ cd PH-Feedback
```

Install the dependencies:
```
$ npm install
```

Run the app with:
```
$ nodemon app
```
The app's landing page will be served on `http://localhost:2000`. Linked here: [Landing Page](http://localhost:2000)
You will find the clients data displayed as JSON on `http://localhost:2000/clients`. Linked here: [Clients](http://localhost:2000/clients)

To view the newly-created tables in Postgres, install Postgres.app if you don't already have it. Linked here: [Postgres.app](http://postgresapp.com/)

Check to ensure the clients, product_details, products and stakeholders tables were created in the customers database by opening
```
$ psql customers
```
That's all folks!

# LICENSE
The MIT License (MIT)

Copyright (c) 2015 Bryan Duplantis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
