<h1 align="center">Task Tracker</h1>
<h2 align="center"><a  href="https://kiu-task-tracker.netlify.app/">Try App</a> </h2>

## Updates

2021-05-19:

1. Move hosting to Netlify from Firebase Hosting
2. Migrate to Bootstrap v5 from v4
3. Migrate to React Router from Reach Router
4. On-going update of codes

---

## Description

<p align='center'>Task List shown once logged in.</p>
<p align="center">
<img src="https://live.staticflickr.com/65535/51070234862_3b8595761c_n.jpg" width="80%"></p>
<p align='center'>Detail view of individual tasks.</p>
<p align="center">
<img src="https://live.staticflickr.com/65535/51072443511_91b88f354f_c.jpg" width="80%"></p>

This task tracker is used to monitor more complex tasks than to-do lists, but less complex than longer term 'project'. Tasks will only be displayed if it is related to the user, either as the assignee or the responsible.

Currently, 2 level of editing privileges are implemented: supervisor level and worker level. However, the code can be easily updated based on the reporting structure of the project. Simple validation is implemented, however it would be simple to incorporate a validation library to both the front-end and back-end.

## The tools

<p align="center">
<img src="https://live.staticflickr.com/65535/51072631176_a6f514a148_n.jpg" width="50%"></p>

This App is put together with React and styled with Bootstrap. Firebase services (Authentication, Firestore, and Hosting) provides various services for this development.

### Database

The Firestore data is stored in 2 root collections: users and tasks.

--> users collection:

```
/users/<user doc>
```

Each user document contains the following object:

```
{
	id,
	email,
	jobLevel,
	name
}
```

--> tasks collection:

```
/tasks/<task doc>/comments/<comment doc>
```

Each task document contains the following object:

```
{
	id,
	dateCreated,
	dateDue,
	nameResponsible,
	nameResponsibleID,
	nameTaskCreator,
	nameTaskCreatorId,
	priority,
	status,
	taskName,
	taskDescription
	}
```

Each task document as an associated comments collection. The comment document has the following structure:

```
{
	id,
	comment,
	email,
	name,
	timestamp,
	userId
	}
```

## Contact

[Linked-In](https://www.linkedin.com/in/devkiu/)

😉 I am also looking for work
