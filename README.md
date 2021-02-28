# Description

This is a web app that tracks tasks. This tracker is used to monitor more complex tasks than to-do lists, but less complex than longer term 'project' like tasks. This project has sign-in security. Tasks will only be displayed if it is related to the user. The user and task information is persisted using a NoSQL database. The displayed task list can be ordered and filtered. Each task can have user created or automated comments.

To demo this project, can using in with the following credentials:
Login: 1@1.com or 2@2.com or 3@3.com or 4@4.com
Pass: 123123
The first 2 log-ins has higher editing privileges (supervisor level), while the last 2 log-ins have lower privileges (worker level). The worker levels have less privileges to edit existing tasks. You can also register and create your own account. Although email verification is not currently implemented, it can be easily added.

The project demonstrates Kiu's ability to use popular web development tools. The project uses React for the front-end with Bootstrap v4.5 for styling. Firebase services (Authentication, Firestore, and Hosting) provides the back-end services for this development. The repository contains a functions folder that starts to explore using Google Cloud Functions. However, it is not yet integrated into the main production code. The reason not to implement Cloud Function in this project is because Firebase requires the Blaze plan (pay as you go) instead of the Spark plan (free) in order to use Cloud Functions.

The code for this is available at https://github.com/zkiu/.... The page can be accessed here https://zkiu.github.io/....

--- Current to-do as of 2020-12-27:

- pretty things with floating labels with bootstrap
- implement more security in code, check validation for the project, HTML - set tabindex attribute for Aria, make validation and sanatize input fields
- add info display when hovering over fields and other important items
- set autocomple to text fields HTML?

Feature - when archiving a task, it gets move to a different collection, so as searching the task collection is faster

Firebase - update security rules

CSS - address responsive page break display issues: dashboard width < 770px
