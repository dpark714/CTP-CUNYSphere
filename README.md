# CunySphere
### Team Name & Project Name
**Project Name:** CUNYSphere <br />
**Team Name:** CUNYCrafters


### Team Members
**Dahyeon Park, Benjamin Zhang, Omar Abdullah, Amir Hamza**

### Built With

[![Next][Next.js]][Next-url]
[![Node][Node.js]][Node-url]
[![Express][Express.js]][Express-url]
[![Bcrypt.js][Bcrypt.js]][Bcrypt.js-url]
[![JavaScript][Javascript]][Javascript-url]
[![HTML][HTML]][HTML-url]
[![CSS][CSS]][CSS-url]
[![React][React]][React-url]
[![Git][Git]][Git-url]
[![Sequelize][Sequelize]][Sequelize-url]
[![Passport][Passport]][Passport-url]
[![Postgre][PostgreSQL]][PostgreSQL-url]


<p align="right"><a href="#readme-top">Back to top</a></p>

### Executive summary
**A summary of your project** <br />
In today’s vast digital landscape, students often face challenges in sourcing reliable academic resources and engaging with peers who share their educational pursuits. CUNYSphere is designed to address these challenges by serving as a comprehensive platform for students. Here's how it works:

### What does the application do?
CunySphere provides a two-fold service approach for students. Firstly, it offers a selection of vetted academic resources, assisting students in their studies. Secondly, it creates a dedicated space for students to interact, discuss, and collaborate on academic topics.


### What is the motivation for your application?
The driving force behind CUNYSphere is to address the existing gap in the market. Students often find themselves switching between platforms that are either off academic resources or community engagement. CUNYSphere aims to streamline the student experience by seamlessly integrating both aspects into a single platform. 


### Which types of people would want to use this application?
CUNYSphere is tailored specifically to college students, particularly those within the CUNY system. However, it can also benefit high school students who are considering attending CUNY college in the future. 


### Are there similar applications and/or competitors available now? How does your idea differ? or why is there a need for a competitor?
While there are existing platforms like CourseHero and CollegeConfidential that cater to student needs, they tend to address only one aspect of the student experience. CourseHero primarily focuses on providing study materials, while CollegeConfidential emphasizes student discussions. CUNYSphere sets itself apart by integrating academic resources with a vibrant community, offering students a holistic experience. This unique combination makes CUNYSphere a necessary addition to the current market.


## User Types:
### Students
**Description:** <br />
  Primary users seeking academic resources, engaging in discussions, asking questions, collaborating on projects, and interacting with peers.


### Administrators
**Description:** <br />
  Behind-the-scenes managers responsible for ensuring the platform’s smooth operation, which control over all aspects of the platform.


<details>
<summary> Roles: </summary>

#### Students
- Access and download study materials, initiate or participate in discussions, create study groups, rate and review resources, see the latest news about CUNY, upload your resume for review.

#### Administrators
- User management, such as adding or removing users and assigning roles, addressing major technical glitches, managing partnerships or integrations, overseeing the overall functioning of the platform.


</details>

### User Stories:
**As a student, I want to…** <br />
easily register and create a profile so that I can access study resources.
search and download relevant study materials so that I can prepare for my exams.
join or initiate discussions on topics I'm interested in so that I can understand concepts better.
rate and review resources so that others can benefit from my feedback and make informed choices
create or join study groups so that I can collaborate with peers. 


**As an administrator, I want to…** <br />
manage user accounts, assigning roles and permissions so that the platform runs smoothly.
handle technical issues and oversee updates so that the platform remains up-to-date and bug-free.
analyze user activity and platform performance so that necessary improvements can be implemented.
_______________________________________________________________________________________________________________________________
## Project Structure

<pre>
.
├── README.md
├── <strong>api</strong>
│   ├── app.js
│   ├── <strong>config</strong>
│   │   └── config.json
│   ├── <strong>controllers</strong>
│   │   ├── index.js
│   │   └── microPosts.js
│   └── <strong>models</strong>
│       ├── MicroPost.js
│       └── index.js
├── <strong>client</strong>
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── <strong>public</strong>
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── <strong>src</strong>
│       ├── App.css
│       ├── App.js
│       ├── <strong>components</strong>
│       │   ├── ErrorAlert.js
│       │   ├── LoadingSpinner.js
│       │   └── MicroPostCard.js
│       ├── index.js
│       └── <strong>pages</strong>
│           ├── AboutUsPage.js
│           ├── PostFormPage.js
│           ├── PostsListPage.js
│           └── ShowPostPage.js
├── package-lock.json
└── package.json
</pre>
_______________________________________________________________________________________________________________________________
**Current version:** 3.0.0 (Oct 2023)

## Stack

> Node.js v16 LTS is recommended

_Backend API_

- express.js (v4.18.2)
- sequelize.js (v6.33.0)
- PostgreSQL (v14 recommended)

_Frontend React client_

- Based on `create-react-app`
  - pre-configured to work with the api
- Bootstrap (v5)
  - added to `/client/public/index.html` (_optional_ can be removed)
- React Router (v6)

## Development Setup

### Ensure you have PostgreSQL installed

- Check if you have PostgreSQL installed
  - ✅ versions 10-14 should work
  - 🚫 version 15 has not been tested
- If you need to install PostgreSQL see the [installing PostgreSQL guides](https://github.com/CUNYTechPrep/guides#postgresql)

### Create a PostgreSQL user and database

The project-starter template expects the following for local development:

- PostgreSQL User/Role
  - name: `ctp_user`
  - password: `ctp_pass`
- PostgreSQL Database
  - name: `ctp_appdb_development`

#### For Windows/pgAdmin users

If you are on Windows and installed **pgAdmin** follow our [pgAdmin guide](https://github.com/CUNYTechPrep/guides/blob/master/pgAdmin-create-user-db.md) to create a user in PostgreSQL named `ctp_user` with the password `ctp_pass` and a database named `ctp_appdb_development`.

#### For Mac/Linux users

Create a user in PostgreSQL named `ctp_user` with the password `ctp_pass`:

> This only needs to be done one time on your machine
> You can create additional users if you want to.

```
createuser -P -s -e ctp_user
```

Create a separate db for this project:

```
createdb -h localhost -U ctp_user ctp_appdb_development
```

> You will create a DB for each project you start based on this repo. For other projects change `ctp_appdb_development` to the new apps database name.

________________________________________________________________________________________________________________________________________________________
### Running the app locally

For local development you will need two terminals open, one for the api-backend and another for the react-client.

_Clone_ this app, then:

```bash
# api-backend terminal 1
cp .env.example .env
npm install
npm run dev
```

```bash
# react-client terminal 2
cd client
npm install
npm start
```

- api-backend will launch at: http://localhost:8080
- react-client will launch at: http://localhost:3000

> In production you will only deploy a single app. The react client will build into static files that will be served from the backend.

### Hosting on [Render.com](https://render.com/) 

1. Create an account by clicking the __Get Started__ button
  - It's recommended to Sign up using your __Github__ account for easy linking to project repos.
  - The __Individual__ account type does NOT require a credit card
2. Navigate to the [Dashboard](https://dashboard.render.com/)
3. Create a PostgreSQL Database
  - Click the __New +__ button at the top of the page
  - Select __PostgreSQL__ from the drop down menu
  - Provide a __Name__ for your projects database
  - Choose a __Region__ closest to you or your users.
  - Choose __Instance Type__: Free
  - You can leave the optional settings empty
  - Click on the __Create Database__ button
  - Your database will be ready to use in 1-5 minutes.
  - Once the database is active, make note of where to get the Connection details, such as "__Internal Database URL__" and "__External Database URL__"
4. Create a Web Service
  - Click the __New +__ button at the top of the page
  - Select __Web Service__ from the drop down menu
  - Click on the __"Build and deploy from a Git repository"__ option and click __Next__
  - Connect to your project's repository on Github
  - Provide a __Name__ for your projects web app
  - Choose the same __Region__ as you chose for your database (_important for db connectivity_)
  - Choose the __Branch__ with the code you want to deploy (usually `main`)
  - Leave the __Root Directory__ empty
  - Choose __Runtime__: Node
  - Set __Build Command__: `npm install && npm run build`
  - Set __Start Command__: `npm start`
  - Choose __Instance Type__: `Free`
  - Expand the __Advanced__ options
  - Add __Environment Variables__
    + key: `SESSION_SECRET` = value: click on the __Generate__ button
    + key: `DATABASE_URL` = value: copy the "__Internal Database URL__" from your step 3.
    - Do NOT add the `PORT` variable (Render will set this for you)
  - Click the "__Create Web Service__" button
  - Your application will be live in 1-5 minutes



[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=ffffff
[Next-url]: https://nextjs.org/

[Node.js]: https://img.shields.io/badge/node.js-303030?style=for-the-badge&logo=nodedotjs&logoColor=3c873a
[Node-url]: https://nodejs.org/en

[Express.js]: https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=ffffff
[Express-url]: https://expressjs.com/

[Bcrypt.js]: https://img.shields.io/badge/Bcrypt.js-black?style=for-the-badge&logo=JSON%20web%20tokens
[Bcrypt.js-url]: https://www.npmjs.com/package/bcrypt

[JavaScript]: https://img.shields.io/badge/javascript-323330?style=for-the-badge&logo=javascript&logoColor=f0db4f
[JavaScript-url]: https://www.javascript.com/

[HTML]: https://img.shields.io/badge/html-e34c26?style=for-the-badge&logo=html5&logoColor=ffffff
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/HTML

[CSS]: https://img.shields.io/badge/css-ffffff?style=for-the-badge&logo=css3&logoColor=264de4
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS

[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/

[Git]: https://img.shields.io/badge/git-000000?style=for-the-badge&logo=git&logoColor=orange
[Git-url]: https://git-scm.com/

[Sequelize]: https://img.shields.io/badge/SEQUELIZE-52b0e7?style=for-the-badge&logo=https://svgshare.com/i/15fx.svg&logoColor=blue&labelColor=blue
[Sequelize-url]: https://sequelize.org/

[Passport]: https://img.shields.io/badge/passport.js-000000?style=for-the-badge&logo=passport&logoColor=d4fd02
[Passport-url]: https://www.passportjs.org/

[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-%234169E1?style=for-the-badgelogo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/