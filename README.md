# Artists for Humanity Open Studios

This is the codebase for [Artists for Humanity](https://afhboston.org/)'s virtual open studios tour, built with Next.js and Sanity.

#### Project Structure

- [studio](./studio): Sanity Studio repository. This manages the CMS editor experience for the web application.
- [web](./web): The Next.js web application.

# Getting Started

We're using [Lerna](https://lerna.js.org/) to manage both `studio` and `web`.

1. Clone the repository

```sh
git clone git@github.com:gvjacob/afh-open-studios.git
```

2. Install dependencies

```sh
npm install
```

3. Start the application. Access the web application at [http://localhost:8080](http://localhost:8080), and Sanity studio at [http://localhost:3333](http://localhost:3333).

```sh
npm start
```
