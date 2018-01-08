# Assignment 4 - Persistence

Now that you've been able to get into some server side searching/filtering, you may want to add some more ways for users to interact with your data. The next step would be allowing users to add new data and have that data persist. Note that you are not required to achieve long term persistence in this assignment. Every time you restart your server, any added data can be deleted. In order to get long term persistence, we will work with databases in the future.

I'm purposely leaving this assignment a little more open-ended and vague. As always, ask questions!

## Assignment details

Do the following to complete this assignment:

1. Merge this code into your repository. I should have made a Pull Request for you to review and merge already. Confirm that merge and then pull down your new code to your local machine. You will start with roughly the same code as a3.
2. This time, you will have to build your own form for taking in user input. You should create an HTML form similar to the one from a3. Your form method should be `post`. You should assign ids and names to your inputs in your form so you can access the values of these inputs on the server side. Experiment with how you can access this data when you submit the form from the server side. Once you get that data, update your data structure that's holding the data and make sure this new input shows up.
3. Test your project to make sure that when someone goes to your main page, it displays correctly. Make sure you can add new data and search over all data.
4. Deploy your project to Heroku.
