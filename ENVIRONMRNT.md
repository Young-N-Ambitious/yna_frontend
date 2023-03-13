# Setting up a React Environment on a Mac

## Introduction

This is a step-by-step guide for how to set up your local environment
**on a Mac**. Please note that these instructions will not work for non-Mac
users. If you're on a Windows 10 machine, see the
[Windows Subsystem for Linux setup instructions][wsl]. If you're on an older
Windows machine, refer to the [Setting up Linux Virtual Box][linux]
instructions.

The following instructions are for macOS Catalina. If you are not on Catalina
but can upgrade, we recommend doing so _after_ following the instructions below.
Additional instructions are included in the steps below for non-Catalina users.

You can check your OS version by clicking the apple menu in the top left and
clicking 'About This Mac'.

## Step By Step Instructions for Manual Installation

**ALERT** - For New M1 Mac Laptops ONLY

If you are using a Mac laptop with the new M1 chip (released in late 2020), there is
an additional step required for some tools to install correctly. This step involves
creating a copy of your laptop's Terminal application and enabling it to work with
tools that aren't yet compatible with the M1 chip. Check out [this link][m1]
and follow the steps provided **before continuing**.

[m1]: https://www.notion.so/Run-x86-Apps-including-homebrew-in-the-Terminal-on-Apple-Silicon-8350b43d97de4ce690f283277e958602

## Install Xcode Command Line Tools

Open up your terminal. You can do this by going to Applications > Utilities >
Terminal, or by using the quick launch (`cmd` + `space`) and just start typing
“Terminal”.

The first tools we're going to install are the Xcode command-line tools.
[Xcode][] is a suite of development tools from Apple, including tools for
building Mac and iPhone applications. For this project, we only need the Xcode
command-line tools, as many other tools rely on them. Run the following to
install them:

```sh
xcode-select --install
```

You will be prompted to install Xcode Command-Line Tools. Agree and allow the
install to continue. You may need to provide your computer's password.

> **Important:** If the Xcode Command-Line Tools aren't installed, you may encounter
> errors later on when working with gems like `sqlite3`. To double check that everything is installed,
> rerun the `xcode-select --install` command. If everything is installed, you should see this error:
>
> ```sh
> xcode-select: error: command line tools are already installed, use "Software Update" to install updates
> ```
>
> If you receive this error, you are good to continue!
If you have recently updated your OS to Catalina 10.15.2 or are on BigSur, you may encounter some errors
related to XCode while installing Ruby and/or running Node. While working through this set up, follow any
debugging instructions provided, but if those do not work, check out the
[instructions here to make sure the Xcode Command-Line Tools are configured correctly on the new system][xcode fix]

## Install Homebrew

[Homebrew][] is a package manager for the Mac. It allows us to install a number
of things we will need. To install Homebrew, run the following:

```
/bin/bash -c $(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)
```

> **Note:** this is all one line in the terminal (even if it is broken up into
> two lines here in your browser).
You can verify that Homebrew is successfully installed by running `brew help`. If
your terminal outputs a list of `brew` commands, you're all set.

## Install Zsh

[Zsh][] is the new standard [shell][] for the macOS. To see if you're already
using Zsh, run the following:

```sh
echo $SHELL
```

If the terminal outputs `/bin/zsh`, Zsh is already installed. If something else
was output (like `/bin/bash`), run the following commands:

```sh
brew install zsh
chsh -s /bin/zsh
```

This will install Zsh and set it as the default shell.

Close your terminal and reopen. If you rerun `echo $SHELL`, the terminal should
output `/bin/zsh`.


1. Install Homebrew by opening a terminal window and running the following command:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" 
```

2. Install Node.js and npm by running the following command in the terminal window:

```
brew install node 
 ```

3. Verify that Node.js and npm are installed correctly by running the following commands in the terminal window:

```
node -v 
npm -v
```

4. Create a new project directory on your computer using the following command:

``` 
mkdir my-react-app
cd my-react-app
```

5. Initialize the project with npm using the following command:

```
npm init -y
```

6. Install React and React DOM as dependencies:

```
npm install react react-dom
```

7.  Create a src directory and create a new file index.js inside it:
 You can create a new react app inside your file directory or clone a repository into your directory

```
mkdir src
touch src/index.js
```




9. Run the development server with the following command:

```
npm start
```


<br>



## Application

This is the Frontend React application

## Getting Started

To install this project:

- clone the project to your local terminal by running `git clone **ssh_key*` copy the ssh_key from above
- run `npm install` to install react dependencies
- run `npm run db:migrate` to migrate the database
- run `npm run db:seed` to load seed data if present (optional)
- run `npm start` to start server

## License

- [MIT LICENSE](https://opensource.org/licenses/MIT)

## Join The YNA Community To Contribute:

- [Contributing Doc](https://github.com/Young-N-Ambitious/yna_backend/blob/main/CONTRIBUTING.md)
- [Member Application](https://docs.google.com/forms/d/e/1FAIpQLSfEHpF9H3U9yCzmUPEiac637mECOzXAqrr9AXuxuz48KUd1pQ/viewform)

