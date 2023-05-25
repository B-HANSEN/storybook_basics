# Application name

Storybook: some basic concepts

## Overview

When it comes to developing, testing and documenting of components, Storybook is the perfect tool.
It integrates with most frontend libraries.

Use cases:

- It is a tool to develop components in isolation, rather than in an up running application.
- Stories are representations of components. It mocks different visualisations or behaviours of components.
- Useful tool to create a component library.

### Application walkthrough

The code provides some basic standard components.
Main idea is to create stories for these components to demonstrate the general idea of storybook.

### Start Application

To get started with the application, change to root directory and run `npm install` to install the third party dependencies.
Then run `npx storybook@latest init` to download storybook dependencies. Run the initialiser after project setup, e.g. create-react-app.
To render the tool at http://localhost:6006/, run `npm run storybook`.
