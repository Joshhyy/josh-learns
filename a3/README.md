# Assignment 3 - Server Side Filtering 

This assignment starts to get a bit more in depth with the server code and JavaScript. This one will likely take a little longer than the others but that's OK. You'll come out of this with a better understanding of how the client talks to the server and how you can use this communication to your benefit.

## Assignment details

Do the following to complete this assignment:

1. Merge this code into your repository. I should have made a Pull Request for you to review and merge already. Confirm that merge and then pull down your new code to your local machine.
2. You will be building a webpage that takes in some user input and filters data based on it. We're going to build the HTML a little different this time. You no longer have an `index.html` file. Instead, you're going to dynamically build the HTML string in your server code and simply send the string back to the client. Previously, you had sent a file back. These two actions are essentially the same, since an HTML file is just a string of HTML markup. We're choosing to build a string because it simplifies the process of filtering a little bit. Read through the starting code in `server.js` to see how we're building this HTML string.
3. You're going to have to edit `sendIndex` and `handleSearch` so when someone searches, the UI shows the data that matches those results. Read the comments in `server.js` for some hints on how to do that.
4. Feel free to do something extra like cool styling or adding more data to spice up the project a bit more.
6. Test your project to make sure that when someone goes to your main page, it displays correctly. Make sure you can search and your results show up as expected.
7. Deploy your project to Heroku.

