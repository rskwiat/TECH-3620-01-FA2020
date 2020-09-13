# Node Installation Instructions

- [Expo Commands](expo.md)
- [Expo Installation](https://docs.expo.io/get-started/installation/)

## Mac OS Installation Instructions

[Download LTS NodeJS Installer](https://nodejs.org/dist/v12.18.3/node-v12.18.3.pkg)
[Video Instructions](https://youtu.be/g-c3RB5vTOE)

`$` Symbolizes Terminal command line

Open Terminal found in Applications > Utilies > Terminal

### Check version of node:

```
$ node -v
```

### Install Expo Globally

```
$ npm install expo-cli --global
```

---

## Windows Installation Documentation

https://chocolatey.org/docs/installation

`>` Symbolizes Powershell command line
[Video Instructions](https://youtu.be/Qo_6aOBxigg)

Powershell can be found by opening Search > PowerShell. I reccommend adding this application to your Taskbar.

## Open Powershell as Admin (right click and run as Admin)

```
> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

```

```
> Set-ExecutionPolicy -Scope LocalMachine Unrestricted

> choco install nodejs.install
> choco install python2
```

## After installation type (still in Admin mode):

```
> npm install expo-cli --global
```

### Installation Errors - Mac OS

Command Node Installation Error, this means you as a user do not have access to this directory.

```
npm ERR! path /usr/local/lib/node_modules
npm ERR! code EACCES
npm ERR! errno -13
npm ERR! syscall access
npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
npm ERR!  { Error: EACCES: permission denied, access '/usr/local/lib/node_modules'
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'access',
npm ERR!   path: '/usr/local/lib/node_modules' }
npm ERR! 
npm ERR! Please try running this command again as root/Administrator.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/<USERNAME>/.npm/_logs/2018-02-21T16_26_08_421Z-debug.log
```

1. Check your permsissions

```
ls -la /usr/local/lib/node_modules
```

If npm and <USERNAME> do not match run update who owns the folder:

```
sudo chown -R $USER /usr/local/lib/node_modules
````

Enter the password you use to login to your computer.

2. Continue with the installation as before with

```
npm install -g expo-cli`
```
