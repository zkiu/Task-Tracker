# Description

This project is the centre piece of Kiu's portfolio. This tracker is used to monitor more complex tasks than to-do-lists, but less complex than longer term 'project' like tasks. It will demonstrate Kiu's knowledge of the full web development stack, from the font-end to the back-end. The project uses React on the front-end. Firebase services (Authentication, Firestore, and Hosting) will provide server services to this app.

The code contains a functions folder that starts to explore using Google Cloud Functions. However, it is not yet integrated into the main production code. The reason not to implement at this momoent due because Firebase requires the Blaze plan (pay as you go) instead of the Spark plan (free).

The code for this is available at https://github.com/zkiu/.... The page can be accessed here https://zkiu.github.io/....

--- Current to-do as of 2020-12-27:
Create Basic Email Verification Flow using Google Cloud Functions (instead of the pre built functionallity)

- pretty things with floating labels with bootstrap
- implement more security in code, check validation for the project, HTML - set tabindex attribute for Aria, make validation and sanatize input fields
- add info display when hovering over fields and other important items
- set autocomple to text fields HTML?

Feature - when archiving a task, it gets move to a different collection, so as searching the task collection is faster

Firebase - update security rules

CSS - address responsive page break display issues: dashboard width < 770px
