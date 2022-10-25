---
title: Compile the example mod
sidebar_position: 4
---


Compiling the example mod is the fourth step in the [Overall Goals](/#overall-goals).


## Compiling

In an IDE, you can use the integrated building. There should be a build icon you can click,
 or click build from the context menu of the project.

If you are using a lightweight editor without integrated C# build support,
you can run the build from the console. Navigate to the directory that contains the `.sln`
file or the `.csproj` file. If you used the `dotnet new reactor` when scaffolding the project
(as this guide instructs), then
[this will be the folder](install_netsdk_template#download-the-example-mod-template).
Once you are in this folder, run this command:
```shell
dotnet build
```

Now the output dll should be in `bin/Debug/net6.0/ModExperiment.dll`, you can either copy it manually to your `BepInEx/plugins` folder or have it linked automatically by running this command:

```shell
dotnet build -p:AmongUs="/path/to/your/among/us"
```
