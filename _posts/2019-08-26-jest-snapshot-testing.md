---
layout: post
title:  "Jest snapshot testing"
---

Learning goals: Upon completing this module, a student will be able to:

- State how snapshot tests relate to React components.

- State a hypothetical example of a regression bug that snapshot testing would catch.

- State how snapshot testing relates to using version control.
Know how to find the command line commands required to execute a test suite containing a snapshot test, and compare an old snapshot against a new snapshot that comes from newer code.

- Compare snapshot testing against Selenium automation tests, in terms of flakiness, test execution speed, and any other ways that come to mind.

### Format

Self-driven tutorial, with Q&A.

You should work through the instructions below yourself, and if you get stuck on any instructions, I’m here to help.

Once you’ve done all the instructions, let’s talk through the learning goals listed above and make sure you feel good about them.

I estimate this will take between 30 minutes and 2 hours.

### Getting started

Create a new create-react-app project.

Push it to a new repository on GitHub.

Add the “Link” component from https://github.com/facebook/jest/blob/master/examples/snapshot/Link.react.js to your project somewhere. Commit to git.

Run “yarn add react-test-renderer” to your project. Commit to git.

Visit https://jestjs.io/docs/en/snapshot-testing and copy the example test to your project. Verify that the test runs if you do “yarn run test”. Commit this test file to git.

Run “git status” and notice that a snapshot test file has been created.

Pause and make sure you understand how the snapshot test relates to your React component. If you’re unsure, consider opening the snapshot test file in your editor.

### Practice adjusting a test

Change the test so that the link is to https://instagram.com instead of to Facebook. Run the test again. Make sure the test fails.

Pause and make sure you understand the output of test runner. What does it mean that the test failed?

Use `yarn run jest -u` to re-run the tests. This will “u”pdate the snapshot file.

Look at the `git diff` on your computer. Can you explain why the specific snapshot lines changed that did change?

Pause and consider: Under what circumstances would you push this change?

Use git to either abort this change, or to commit it, including the snapshot test.

### Practice improving the component

Imagine for now that your boss has asked you to make sure your website uses `rel=nofollow` on all links.

Change the Link component so that it has a `rel=nofollow` property.

Pause and consider: If you were to re-run the tests, what would you expect to happen?

Now, re-run the tests.

Use `yarn run jest -u` to update the snapshot tests if needed. Push this to git.

That’s it!

### Wrap-up

Once you’ve done all the instructions, let’s talk through the learning goals listed above and make sure you feel good about them.