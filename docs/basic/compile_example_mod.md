---
title: Compile the Example mod
---


Compiling the Example mod is the fourth step in the
[Overall Goals](/docs#overall-goals).


## Compiling

In an IDE, you can use the integrated building. There should be a build icon you can click, or click build from the context menu of the project.

If you are using a lightweight editor without integrated C# build support,
you can run the build from the console. Navigate to the directory that you downloaded the repository into ([this directory](install_ide_mod_project#download-the-example-mod)). Then, run this command:
```shell
dotnet build
```

After compiling, the mod will automatically be copied to the `BepInEx/plugins` directory.
This is where Reactor was installed to earlier.
