Project instructions

You need to implement a web application for storing movie information. Alongside with the implementation, it is required to provide a document explaining the architecture of the application and containing application start instructions.

Movie Info:
1. Unique identifier
2. Movie title
3. Year of release
4. Format (VHS, DVD, Blu-Ray)
5. List of actors ("Name and surname of the actor")

Functions that the system must support:

1. Add movie - DONE
2. Delete movie - DONE
3. Show movie information - DONE
4. Show a list of movies sorted by title in alphabetical order - DONE
5. Find a movie by title. - DONE
6. Find a movie by the name of the actor. - DONE
7. Import of movies from a text file (sample file is attached “sample_movies.txt”). - DONE

The file must be uploaded via the web interface.

First of all, it is important that all functionality is implemented from the user's perspective.

The task must be implemented as a single page application and a GraphQL API to it. A SPA needs to be written using ReactJS. The server that will provide the GraphQL API must be written in nodejs, the data must be saved between server restarts, any mechanism can be used to store data, it can be MongoDB, MySQL, or just files. If you want, you can use ES6, Webpack, Flux / Redux, it will even be a plus.

It is advisable to write automated functional tests for the application, it is recommended to use mocha, chai (and additional frameworks if necessary). Tests should be run with the “npm test” command.

You can find a list o sample test movies here.

How to submit
Upload your completed project to your GitHub, and then paste a link to the repository below in the form along with any comments you have about your solution.
