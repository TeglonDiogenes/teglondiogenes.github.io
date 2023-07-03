---
layout: layout/main.njk
tags: node.js, mocha, chai, expect
---
# Setting Up Mocha and Chai/Expect in a New npm Project

Mocha is a popular JavaScript testing framework that runs on Node.js and in the browser. It provides a simple and flexible way to write test cases for your JavaScript code. Chai is an assertion library that works well with Mocha and provides a wide range of assertion styles to choose from. Expect is a part of the Chai library and provides a BDD-style assertion syntax.

In this article, we will guide you through the process of setting up Mocha and Chai/Expect in a new npm project.

## Prerequisites

Before we begin, make sure you have Node.js and npm installed on your system. You can download and install them from the official Node.js website (https://nodejs.org).

## Step 1: Create a New npm Project

First, let's create a new directory for our project and navigate into it:

```bash
mkdir my-project
cd my-project
```

Next, initialize a new npm project by running the following command:

```bash
npm init -y
```

This will create a new `package.json` file in your project directory.

## Step 2: Install Mocha and Chai/Expect

To install Mocha and Chai/Expect as development dependencies, run the following command:

```bash
npm install mocha chai --save-dev
```

This will install Mocha and Chai/Expect and save them as dev dependencies in your `package.json` file.

## Step 3: Create a Test Directory

Next, let's create a directory to store our test files. Conventionally, this directory is named `test`. Run the following command to create the directory:

```bash
mkdir test
```

## Step 4: Write Your First Test

Now, let's write a simple test case to get started. Create a new file named `test.js` inside the `test` directory and add the following code:

```javascript
const expect = require('chai').expect;

describe('Math', () => {
  it('should add two numbers correctly', () => {
    const result = 1 + 1;
    expect(result).to.equal(2);
  });
});
```

This test case describes a basic addition operation and expects the result to be equal to 2.

## Step 5: Configure Mocha

To configure Mocha, create a new file named `.mocharc.js` in the root of your project directory and add the following content:

```js
module.exports = {
  spec:["test/**/*.test.js"], 
  require: ["chai/register-expect.js" ]
}
```

This configuration tells Mocha to look for test files in the `test` directory and its subdirectories, and let you use `expect` assertions in your tests without redundand requires. The path to register function need to include the `.js` file extension.

## Step 6: Run Your Tests

Finally, let's run our tests. Open your terminal and run the following command:

```bash
npx mocha
```

Mocha will automatically discover and run your test files. If everything is set up correctly, you should see the test result in your terminal.

## Conclusion

Congratulations! You have successfully set up Mocha and Chai/Expect in your new npm project. You can now write and run test cases to ensure the quality and correctness of your JavaScript code. Happy testing!
