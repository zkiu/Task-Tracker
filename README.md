<h1 align="center">Task Tracker</h1>
<h2 align="center"><a  href="https://task-tracker-84155.web.app/">Try App</a> </h2>

<br/>

## Description

<p align='center'>Task List shown once logged in.</p>
<p align="center">
<img src="https://live.staticflickr.com/65535/51070234862_baec8a2676_c.jpg" width="80%"></p>
<p align='center'>Detail view of individual tasks.</p>
<p align="center">
<img src="https://live.staticflickr.com/65535/51072443511_91b88f354f_c.jpg" width="80%"></p>

This task tracker is used to monitor more complex tasks than to-do lists, but less complex than longer term 'project'. Tasks will only be displayed if it is related to the user, either as the assignee or the responsible.

Currently, 2 level of editing privileges are implemented: supervisor level and worker level. However, the code can be easily updated based on the reporting structure of the project. Simple validation is implemented, however it would be simple to incorporate a validation library to both the front-end and back-end.

## The tools

<p align="center">
<img src="https://live.staticflickr.com/65535/51072631176_a6f514a148_n.jpg" width="100%"></p>

This App is put together with React and styled with Bootstrap. Firebase services (Authentication, Firestore, and Hosting) provides various services for this development.

### Database

The Firestore data is stored as such:

```
/users/<user doc>/projects/<project doc>
```

Each project document contains the following object:

```
{
	cards: [array of card],
	dateCreated,
	title,
}
```

Each card in the array contains the following object:

```
{
	imageID,
	height,
	width,
	imgSmall,
	imgMed,
	imgLg,
	paragraph
}
```

Pros:

- I found that receiving and writing data to be really easy for the purpose of this app.
- Restricting access is really straight forward to. Project documents can't be accessed without the user ID. The user ID is determined from the auth token sent from the client side.

Cons:

- This makes implementing a sharing feature for your story in Theater Mode with a 3rd party tricky. Firebase's collectionGroup() method might help overcome this.

### Intergration with 3rd Party Image API

Backend -> Queries the https://www.pexels.com/ API and receives a JSON response of image data.

Frontend -> Loads the image urls from the Pexels server.

## Future scope

- Donations to pay for a responsive server and hosting space.
- Implementing the sharing of the Theater Mode output to others without logging-in requirements.
- Add card animations.
- Instead of a server, migrate to using Google Functions. Netlify seems to offer something similar, which also happens to be called Functions.
- Move away from a 3rd party image API -> instead host our own database of images (📢 call out to all the artist who wants to showcase their work. I am thinking of tilting the images/illustrations to be more youth centric.)
- A themes option to select the types of random images received.

## Contributions are Welcome

- Donations for hosting
- UX/UI help to make the interface more appealing
- Unique illustrations from Artists. You can sign your images, for accreditation.

## Contact

[Linked-In](https://www.linkedin.com/in/devkiu/)

😉 I am also looking for work
