---
title: Install .NET SDK and the template
sidebar_position: 2
---


Installing the .NET SDK and the example mod template is the third step in the
[Overall Goals](/#overall-goals).


## Install .NET SDK

Microsoft distributes the .NET SDK. You can find the download page [here](https://dotnet.microsoft.com/download/dotnet/6.0).
If you are on Windows, just download the installer. On Linux, use your package manager (duh).

![dotnet download](/img/netsdk-download.png)

## Test your .NET SDK install

Make sure .NET is actually installed, and you can access the `dotnet` cli.
Type the following command:

```shell
dotnet --info
```

The command should return something similar to this:
```
.NET SDK (reflecting any global.json):
 Version:   6.0.100
 Commit:    9e8b04bbff

Runtime Environment:
 OS Name:     arch
 OS Version:
 OS Platform: Linux
 RID:         arch-x64
 Base Path:   /usr/share/dotnet/sdk/6.0.100/

Host (useful for support):
  Version: 6.0.0
  Commit:  4822e3c3aa

.NET SDKs installed:
  6.0.100 [/usr/share/dotnet/sdk]

.NET runtimes installed:
  Microsoft.NETCore.App 6.0.0 [/usr/share/dotnet/shared/Microsoft.NETCore.App]

To install additional .NET runtimes or SDKs:
  https://aka.ms/dotnet-download
```
If it doesn't, make sure the `dotnet` executable is in your path, restart your
command prompt, and try the command again. If it still doesn't work, try reinstalling
.NET, and ask in our community [Discord Server](https://reactor.gg/discord).


## Install the mod template

Now, the `Reactor.Template` mod template needs to be installed on your computer. Then, the `dotnet` cli can scaffold the project.

Run the following command to install the latest template:
```shell
dotnet new --install Reactor.Template
```

After running this command with no errors, `Reactor.Template` will be installed.

## Scaffold and generate a mod using the template.
We need to create a new folder to store an example mod project. Open a new command prompt
in the folder you just created. Then, type the following command to generate the plugin.
You can replace `NameOfYourPlugin` with a name of your choosing, like `ModExperiment`.

```shell
dotnet new reactor -n NameOfYourPlugin
```

After running this command, there will be a new directory created with the example mod. Here
is the directory structure after creating a project with the name `ModExperiment`.
```
.
└── ModExperiment
    ├── ModExperiment
    │   ├── ModExperiment.csproj
    │   └── TemplatePlugin.cs
    └── ModExperiment.sln
```
