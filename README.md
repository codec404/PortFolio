
# Portfolio
Personal Portfolio for advertisement.
## Authors

- [@codec404](https://github.com/codec404)


## Tech Stack

**Client:** Handlebars, CSS, JavaScript

**Server:** Node, Express

**Database:** Mongo DB


## Installation

Clone this project with git clone command in the terminal

```bash
git clone https://github.com/codec404/PortFolio
```
Delete the existing `package.json` and `package-lock.json` from the parent directory

In the parent directory initialise with npm by running the following command in the terminal

```bash
npm init -y
```
After successful initialisation, install few modules by writing in the terminal - `npm i <module_name>`

Modules required:
```bash
express
hbs
dotenv
mongodb
mongoose
```
For the module `nodemon` use the command `npm i -D nodemon` as it is a development time dependency.
## Testing

To test the backend api `postman`, `thunderclient`,etc. can be made use of.

## Documentation

[Documentation](https://developer.mozilla.org/en-US/docs/Learn)

The above link leads to the official MDN documentation page. It will be helpful for the users to get knowledge about the several topics on HTML, CSS and JavaScript.
## Features

- Messages from the contact form are fetched and stored in the database 