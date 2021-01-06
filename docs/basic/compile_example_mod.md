---
title: Compile the Example mod
---


Compiling the Example mod is the fourth step in the
[Overall Goals](/docs#overall-goals).


## Compiling

In an IDE, you can use the integrated building.

If you are using a lightweight editor without integrated C# build support,
you can run the build from the console:
```shell
dotnet build
```

After compiling, the mod will automatically be copied to the `BepInEx/plugins` directory.
This is where Reactor was installed to earlier.
