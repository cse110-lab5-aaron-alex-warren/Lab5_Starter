# Lab 5

- Aaron Shi
- Alex Turco
- Warren

## [Webpage of Expose](https://cse110-lab5-aaron-alex-warren.github.io/Lab5_Starter/expose.html)
## [Webpage of Explore](https://cse110-lab5-aaron-alex-warren.github.io/Lab5_Starter/explore.html)


## Check Your Understanding Questions
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.\
    No I will not. THe `message` feature is vague and hard to define in unit tests. This feature also sounds like a part which users will interact, bringing in unpredictability.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.\
    Yes I will. This is an easy task for unit test. If The test is able to input 81 characters, the test fails.