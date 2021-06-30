---
title: Compile the Example mod
---


Compiling the Example mod is the fourth step in the
[Overall Goals](/#overall-goals).


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

After compiling, the mod will automatically be copied to the `BepInEx/plugins` directory in 
your Among Us install folder. This is where Reactor was installed to earlier.
