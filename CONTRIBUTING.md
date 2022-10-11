# Contributing to Young N Ambitious

Thank you for your interest in contributing to Young N Ambitious (YNA)! This document is a set of guidelines to help you contribute to this project.

## Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Project Documentation

Please consult the [README](./README.md) at the root of this repository.

## How to Contribute

Before you start writing code, make sure there is an issue open. Pull requests without a link to an existing issue won't be merged.

If you want to get started contributing code to this project but don't know exactly what to work on, we compiled a good list of issues labeled as ['good first issues'](https://github.com/Young-N-Ambitious/yna_frontend/labels/good%20first%20issue) which are small in scope and not so complex to solve. There are also issues labeled as ['help wanted'](https://github.com/Young-N-Ambitious/yna_frontend/labels/help%20wanted) which can be a bit more complex but are good examples of things we are currently accepting help from the community. Lastly if you are participating in Hacktoberfest, look for issues labeled ['hacktoberfest'](https://github.com/Young-N-Ambitious/yna_frontend/labels/hacktoberfest).

# Getting Started

* First you make a fork of the repo so that you can use your fork to update the project. 
* create a YNA directory by running `mkdir YNA`
* cd into the YNA directory by running `cd YNA`
* Clone the project to your local terminal by running `git clone git@github.com:{YOUR_GITHUB_USERNAME}/yna_frontend.git`
* cd into the YNA frontend directory by running `cd yna_frontend`
* Now run `npm install && npm start` to install all of the project dependencies and go to http://localhost:3000 to see the application.

# How To Contribute - Set Up

* Now that you are inside the frontend directory, you need to create a branch based off the development branch.
    * Run: `git checkout dev` 
    * Confirm you are on the dev branch by running `git status`
    * Create a branch based off the dev branch by running - git checkout -b `branch-name`
    * Make your changes - commit often using [commit best practices][best_practices].
    * Make sure to add test to all of your changes, when applicable. 

[best_practices]: https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project#_commit_guidelines


# How To Contribute - Pushing your changes

* After adding your code changes you will need to add and commit your changes.
   * Run `git status` - to see the files you changed and confirm thats what you want.
   * Run `git add .` to add all of the files or `git add <file name>` to add a specific file.
   * Once you know and added what files you want to commit. Commit your changes by running `git commit -m "FD-[#<issue_number>]<commit_type>:description"`
        * **Your final commit should be formatted like this: #FD00.09-(docs)-updatesreadme**
        * The issue number can be found on the title of the issue you were assigned.
        * The commit_types are:
             * (feat): (new feature for the user, not a new feature for build script)
             * (fix: (bug fix for the user, not a fix to a build script)
             * (docs): (changes to the documentation)
             * (style): (formatting, missing semi colons, etc; no production code change)
             * (refactor): (refactoring production code, eg. renaming a variable)
             * (test): (adding missing tests, refactoring tests; no production code change)
             * (chore): (updating grunt tasks etc; no production code change)
        *  The description/name is the name or title descripting the changes you made.
   * Push your changes to your forked repo by running `git push --set-upstream origin <branch name>`
   * On Github create a pull request, all pull requests _must_ target the `dev` branch of the
   repository.

# IMPORTANT BEFORE MAKING PULL REQUEST 
On Github create a pull request, all pull requests _must_ target the `dev` branch of the repository.


## Testing 
Any code modifications will have to be accompanied by the appropriate unit tests. This will be checked and verified during code review. Once the pull request is opened, our CI server will run the unit test suite and run a code linter to verify that the code follows the coding guidelines.

If you want to run the unit tests and linter on your machine, run the following commands:

`npm test` for unit tests

You can also configure your editor of choice with a ESLint plugin so you can get the linter feedback as you write code.


### Bugs and testing

If you find a bug, please open an issue in this repository describing the bug. You can file a bug [here](https://github.com/Young-N-Ambitious/issues/new?template=bug_report.md). You will see a bug report template with the required information you should provide.

### Proposing changes or new features

If you have an idea of a new feature or change to how the Openverse frontend works, please [file an issue](https://github.com/Young-N-Ambitious/issues/new?template=feature_request.md) so we can discuss the possibility of that change or new feature being implemented and released in the future. This lets us come to an agreement about the proposed idea before any work is done.


## Questions or Thoughts?

Feel free to [Join Our Community](https://docs.google.com/forms/d/e/1FAIpQLSfEHpF9H3U9yCzmUPEiac637mECOzXAqrr9AXuxuz48KUd1pQ/viewform) and discuss the project with the engineers and community members on #YNA.