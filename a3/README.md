# Assignment 2 - Server Side Filtering 

This assignment starts to get a bit more in depth with the server code and JavaScript. This one will likely take a little longer than the others but that's OK. You'll come out of this with a better understanding of how the client talks to the server and how you can use this communication to your benefit.

## Assignment details

Do the following to complete this assignment:

1. Merge this repository into your fork. In order to do this, you'll have to make a pull request on your fork. A pull request is simply saying "I want to merge this code into this repository. I'm going to request that I can do that so we can review it and decide if it's a good idea".
    * Go to your repo on Github and click `New Pull Request`
    * Click `compare across forks`.
    * Choose your repo and your master branch as the base fork and choose this repo and master as the head fork.
    * Click `Create pull request`. Usually at this point we would look at the pull request and decide if it's a good idea to merge it or not. Feel free to do that and them click `Merge pull request`.
    * Pull down your new code to your local machine.
2. You will be building a webpage that takes in some user input and filters data based on it. We're going to build the HTML a little different this time. You no longer have an `index.html` file. Instead, you're going to dynamically build the HTML string in your server code and simply send the string back to the client. Previously, you had sent a file back. These two actions are essentially the same, since an HTML file is just a string of HTML markup. We're choosing to build a string because it simplifies the process of filtering a little bit. Read through the starting code in `server.js` to see how we're building this HTML string.
3. You're going to have to edit `sendIndex` and `handleSearch` so when someone searches, the UI shows the data that matches those results. Read the comments in `server.js` for some hints on how to do that.
4. Feel free to do something extra like cool styling or adding more data to spice up the project a bit more.
6. Test your project to make sure that when someone goes to your main page, it displays correctly. Make sure you can search and your results show up as expected.
7. Deploy your project to Heroku.

