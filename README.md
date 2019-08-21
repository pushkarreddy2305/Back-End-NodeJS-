# employers-holding-api

Employer's Holding Rest API

# Dependencies

- `npm 6.9.0`
- `node 10.16.0`

# Setup

- Clone project

`git clone https://github.com/repo.git`

- Go to the project directory

`cd employers-holding-api`

- Install prerequisite packages

`npm install`

- Start the server

`npm start`

- Make changes

  Edit routing files within `/src/routes` to expose new API endpoints

- Installing Mongo

  Go [here](https://www.mongodb.com/download-center/community?jmp=docs) and download the installer, then run it.

# End Points

## Users

- GET `/user` will return all users
- GET `/user/:name` will return data for user based on username
- POST `/user` send with groups, roles, and username. groups and roles are optional for now.

## Authentication

- POST `/auth` with username and password as body, will create a session for a user and return a bool named success
- GET `/auth` will return the current user.

## Projects

- GET `/project` will return all projects
- GET `/project/:search` will return projects with description or name matching :search
- POST `/project` send with name and description.
- PUT `/project` send with id(the document id, in mongo \_id), name(this is the new name), description(this is the new description)

## Templates
- GET `/template` will return all templates
- GET `/template/:id` will return template identified by :id
- POST `/template/` will create a template with {name,location,type} parameters
- PUT `/template/:id` will update template identified by :id with {name,location,type} parameters
- DELETE `/template/:id` will delete template identified by :id

## Providers/System
- GET `/provider` will return all provider/systems
- GET `/provider/:id` will return provider/system identified by :id
- POST `/proivder/` will create a provider/system with {label,location,credentials(this is provider specific),systemType,type}
- PUT `/provider/:id` will update provider/system identified by :id takes {label,location,credentials(this is provider specific),systemType,type}
- DELETE `provider/:id` will delete provider/system identified by :id

## Jira

- GET `/jira/projects` returns a list of all projects
- GET `/jira/projects/:key` returns the project identified by :key
- POST `/jira/projects/` creates a jira project
- PUT `/jira/projects/:key` updates project identified by :key
- DELETE `jira/projects/:key` deletes project identified by :key

## Confluence

- GET `/confluence/space/:space` get space identified by :space
- GET `/confluence/page/:space/:title` get page identified by :space and :title
- POST `/confluence/space/` create a space
- POST `/confluence/page/` create a page
- DELETE `/confluence/space` delete a confluence space
- DELETE `/confluence/page/:space/:title` delete a confluence space identified by :space and :title

