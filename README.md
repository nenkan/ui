# Nenkan UI

This project contains React components that use the styles from [Nenkan CSS](https://github.com/nenkan/css).

You can use it as building blocks for a user interface.

You can see the production storybook at https://www.nen-kan.com/ui

## Contributing

Contributions to this project are welcome.

If you want to help, only start working on an issue after having been assigned to it. That way we can ensure no more than one person is working on the same issue at the same time. 

We ask that you test the code in your local environment to make sure it actually works. We encourage you take the time to understand the codebase. If not sure about it, just ask and someone will gladly help you.

## Development

You need to have [Node.js](https://nodejs.org/) and NPM installed.

Then, open a terminal window and run the following commands.

Install the dependencies:

```
npm install
```

Run the storybook:

```
npm run storybook
```

## Production

Pushes to the default branch automatically trigger an action to build and deploy the storybook to the production website.

## Building

Run the following to build:

```
npm run build
```

It will create the directory `dist` with the transpiled and copied files.

To facilitate development, use the following to have your code changes automatically rebuilt:

```
npm run build:watch
```

## Publication to NPM

Only the directory `dist` should be published to NPM.

## NPM Linking

You can make changes to this library while consuming it from a broader project.

Build this library, then change to the `dist` directory and run `npm link`.

Then, in the directory of the project that consumes this library, run `npm link @nenkan/ui`.
