# Node Installation Instructions

[Expo Commands](expo.md)

## Mac OS Installation Instructions

[Download LTS NodeJS Installer](https://nodejs.org/dist/v12.18.3/node-v12.18.3.pkg)

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




## Windows Installation Documentation

https://chocolatey.org/docs/installation

`>` Symbolizes Powershell command line

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
