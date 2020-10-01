# Electron RSS Reader

[![CI](https://github.com/peteoshea/electron-rss/workflows/CI/badge.svg)](https://github.com/peteoshea/electron-rss/actions)

A simple RSS reader project to test out Electron.

This includes scripts to get a development system setup on Windows, Linux or hopefully MacOS, although I don't own a Mac so I cannot be sure.

The version of Node.js can be specified in [.nvmrc](.nvmrc) but be aware that due to restrictions with [nvm-windows][nvm-windows] this needs to be the full version number e.g. 14.5.0 or v12.8.2.

## The Scripts

The following is a list of scripts and their primary responsibilities.
There are bash and PowerShell versions of these scripts and you can call the PowerShell versions with or with the `.ps1` suffix.

### [script/setup][setup] / [script/setup.ps1][setup.ps1]

Used to set up a project in an initial state.
This is typically run after an initial clone, or, to reset the project back to its initial state.

### [script/update][update] / [script/update.ps1][update.ps1]

Used to update the project after a fresh pull.
This should include any database migrations or any other things required to get the state of the app into shape for the current version that is checked out.

### [script/test][test] / [script/test.ps1][test.ps1]

Used to run the test suite of the project.
To allow this script to be run from CI setup should be done outside of this script.
A manual call to [update][update]/[update.ps1][update.ps1] before running the tests is usually a good idea.

A good pattern to support is having optional arguments that allow you to run specific tests.

Linting is also be considered a form of testing.
These tend to run faster than tests, so put them towards the beginning so it fails faster if there's a linting problem.

## Installing Dependencies

The [bootstrap][bootstrap]/[bootstrap.ps1][bootstrap.ps1] script, called from both [setup][setup]/[setup.ps1][setup.ps1] and [update][update]/[update.ps1][update.ps1] scripts,
is used solely for fulfilling dependencies of the project.
This can mean installing packages, updating git submodules, etc.
The goal is to make sure all required dependencies are installed.

As this is a Node.js template then [nvm][nvm] or [nvm-windows][nvm-windows] is automatically installed along with any npm packages.

### PowerShell Package Managers

The PowerShell scripts currently allow for following package managers:

#### [Chocolatey](https://chocolatey.org/)

If you have some [Chocolatey](https://chocolatey.org/) packages required then you can simply add a
`chocolatey-packages` file at the top level of the project with a list of the packages and they
will be installed and updated as required.
Simply having the `chocolatey-packages` file means Chocolatey will be installed and updated.

#### [winget](https://github.com/microsoft/winget-cli)

Microsoft has recently released it's own package manager
[winget](https://github.com/microsoft/winget-cli).
This is currently only a preview so some functionality may not be available yet but it sounds
promising so if you want to use this to install some packages then you can simply add a
`winget-packages` file at the top level of the project with a list of the packages and they will be
installed and updated as required.

### Bash Package Managers

The bash scripts currently allow for following package managers:

#### [APT](https://en.wikipedia.org/wiki/APT_(software))

If you are on a Debian based Linux system, like Ubuntu, then you can create an `apt-packages` file with a list of the required packages.
You must ensure that this file has Linux line-endings (LF) otherwise it may not work as expected.

#### [yum](https://en.wikipedia.org/wiki/Yum_(software))

If you are on a RedHat based Linux system, like CentOS or Fedora, then you can create an `yum-packages` file with a list of the required packages.
You must ensure that this file has Linux line-endings (LF) otherwise it may not work as expected.

#### [Homebrew](https://brew.sh/)

You can use [Homebrew](https://brew.sh/) by creating a `Brewfile` at the top level of the project with a list of the packages to be installed.
Simply having the `Brewfile` means Homebrew will be installed and updated.

[bootstrap]: script/bin/bootstrap
[bootstrap.ps1]: script/bin/bootstrap.ps1
[nvm]: https://github.com/nvm-sh/nvm
[nvm-windows]: https://github.com/coreybutler/nvm-windows
[setup]: script/setup
[setup.ps1]: script/setup.ps1
[test]: script/test
[test.ps1]: script/test.ps1
[update]: script/update
[update.ps1]: script/update.ps1
