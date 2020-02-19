## Test Task (Feb 2019)

### Tech Stack

* React (this repository)
* .NET Core (https://github.com/mcm3c/2019-feb-test-task-dotnetcore)

### Task requirements

*Scenario:*

A Company is revamping their Careers page to attract new employees and allow prospectiv eemployees to find the roles which they wish to apply for. The designer in your team has provided a design for the Careers page with variations at mobile, tablet and desktop resolutions. As the team’s developer you are required to implement the page. (Feel free to use any frameworks or tools you’re comfortable with).

*Challenge constraints:*

* The jobs must be filtered and sorted on the server (imagine it’s a large database of jobs, but inreality, it’s a small JSON file. You can define the format of the JSON file).
* The jobs must be fetched via AJAX on the client.
* Location identifiers are provided in the JSON file and must be joined to data retrieved from the following locations API https://private-8dbaa-nibdevchallenge.apiary-mock.com/location. Documentation for the API can be found here: https://swaggerhub.com/apis/nib-dev-challenge/Locations/1.0.0.
* Location data must be retrieved on the server
* The JSON file must not be changed on disk.
* Display only the first 130 chars of the job description.
* A user will filter the results by selecting a location, e.g. Sydney.
* Then a user will select a job and be taken to a full job description page.
* When a user clicks back in their browser, they will return to the previous screen. The previous screen will have the same filter option selected eg. Sydney.
* You will be required to commit to a GitHub git repository (This will be your personal GitHub repository) periodically throughout the challenge.
* Usage of boilerplate templates is not allowed
* The server must be written in .NET or .NET Core
* Write at least one automated test either for the server or the client


## Decisions taken

* NO BOILERPLATE CODE - This is quite a challenge and required a lot of additional work to be done. But this repository doesn't use any kind of boilerplate code, even Create React App, so the setup is quite robust and potentially fragile.
* Redux, Webpack - As must-have components of pretty much any React app.
* Material UI - To avoid reimplementing a UI kit on my own.
* "Back button and filters" - There are two ways to implement it: first one is just a side effect of using react-dom-router which uses History API underneath and Redux, so when a use clicks the back button, the page is not reloaded and the state is taken from Redux, meaning that the filters remain the same. And sure the second option is explicitly storing the state in the local storage, although it's a bit an overkill from my perspective.
* Filter on the server side - Using OData is quite a trick here because I don't have to implement specific filters on the backend side (and I wouldn't want to implement them in real production myself because it's fragile, insecure, and not that well tested as ready solutions) so I just enable OData there and manipulate the filters from the frontend.
* Responsive - The heavy lifting is mostly done by flexbox and although all the sizes set in pixels the pages correspond the mockup (except for the job page which I didn't have a mockup for).


## Useful commands
```
$ npm run watch
$ npm run build
```
