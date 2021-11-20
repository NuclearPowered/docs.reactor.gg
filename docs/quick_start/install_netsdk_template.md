---
title: Install .NET SDK and the template
sidebar_position: 2
---


Installing the .NET SDK and the example mod template is the third step in the
[Overall Goals](/#overall-goals).


## Install .NET SDK

Microsoft distributes the .NET SDK. You can find the download page [here](https://dotnet.microsoft.com/download/dotnet/5.0).
If you are on Windows, just download the installer. On Linux, use your package manager (duh).

![dotnet download](/img/dotnetdownload.png)

## Test your .NET SDK install

Make sure .NET is actually installed, and you can access the `dotnet` cli.
Type the following command:

```shell
dotnet --info
```

The command should return something similar to this:
```
.NET SDK (reflecting any global.json):
 Version:   5.0.101
 Commit:    d05174dc5a

Runtime Environment:
 OS Name:     arch
 OS Version:  
 OS Platform: Linux
 RID:         arch-x64
 Base Path:   /usr/share/dotnet/sdk/5.0.101/

Host (useful for support):
  Version: 5.0.1
  Commit:  b02e13abab

.NET SDKs installed:
  5.0.101 [/usr/share/dotnet/sdk]

.NET runtimes installed:
  Microsoft.AspNetCore.App 5.0.1 [/usr/share/dotnet/shared/Microsoft.AspNetCore.App]
  Microsoft.NETCore.App 5.0.1 [/usr/share/dotnet/shared/Microsoft.NETCore.App]

To install additional .NET runtimes or SDKs:
  https://aka.ms/dotnet-download
```
If it doesn't, make sure the `dotnet` executable is in your path, restart your 
command prompt, and try the command again. If it still doesn't work, try reinstalling
.NET, and ask in our community [Discord Server](https://reactor.gg/discord).


## Download the example mod template

Now, the `Reactor.Template` example mod template needs to be installed on your computer. Then, the
`dotnet` cli can scaffold the project.

Run the following command to install the latest template:
```shell
dotnet new --install Reactor.Template
```

After running this command with no errors, `Reactor.Template`, the example mod template, will be installed.

## Scaffold and generate the example mod template.
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

## Setup Among Us environment variable

Finally, we need to set up an environment variable which points to your modded Among Us Directory.
This is the folder in which BepInEx was installed earlier.

On Windows:
- Search `system environment variables` from the search button in the taskbar. Click the
  result in the image below.
  
  ![win_envvar_step1](/img/winenvvar1.png)
- The window that will open is shown below. Click the advanced tab at the top, and click the
  `Environment Variables...` button.
  
  ![win_envvar_step2](/img/winenvvar2.png)
- The `Environment Variables...` button should open the window pictured below. Click the `New`
  button under `System Variables`. 
  
  ![win_envvar_step3](/img/winenvvar3.png)
- Name the variable `AmongUs`, and path to be the path to your
  Among Us installation. After you click save, it should look like this.
  
  ![win_envvar_step3](/img/winenvvar4.png)

On Linux, there are many options. Here are two different ways:
1.  Open the file `/etc/environment` and add `AmongUs=/path/to/among/us` to the file.
2.  Create a new file under `/etc/profile.d/`, and name it `amongus-oxygenfilter.sh`. Add the
    following snippet to this file.
    ```
    export AmongUs=/path/to/among/us
    ```
