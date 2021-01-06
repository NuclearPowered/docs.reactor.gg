---
title: Install C# IDE and the Example mod
---


Installing the C# IDE and the Example mod is the third step in the
[Overall Goals](/docs#overall-goals).


## Install C# IDE

Download Rider or Visual Studio. If you prefer, you can also use a text editor, or a
lightweight environment like Visual Studio Code.

Download and install the .NET core SDK as well. You can find the download page
[here](https://dotnet.microsoft.com/download/dotnet/5.0).

## Download the Example mod

Use `git` to install the Example mod repository.

```shell
git clone https://github.com/NuclearPowered/Example.git
```

Alternatively use a Git GUI to clone the project. Do **NOT** download the repository as
a zip.

## Initial configuration of the project

Now, we need to open up the project, with some preliminary configuration.

- Create an environment variable that points to your modded Among Us Directory. This is the
  folder in which BepInEx was installed earlier.
- Open the project in your IDE or text editor. Do not worry if your IDE shows a lot of
  errors. They will disappear at the end of this section.
- Open the `.csproj` file.
  - In Rider, right click on the project and go under `Edit > Edit .csproj`. Note that the
    image below is a sample image, and some information, particularly the name of the
    project, will not match with our Example mod project.
    ![open_csproj_rider](https://i.stack.imgur.com/uj5yP.png)
  - In Visual Studio Code, open up the `Example.csproj` file from the explorer view.
  - You can also navigate to the directory in which you cloned the git repository,
    and open the .csproj with a text editor.

:::tip
If you can't find the `Example.csproj` file, make sure you are in the right directory.
The Example mod project is organized in a nested structure. Here is an example directory
structure.
```
.
├── Example
│   ├── Example.csproj
│   └── ExamplePlugin.cs
├── Example.sln
└── LICENSE
```
:::

### Inside the project file
In the `.csproj` file, there are four important properties:
  - `GameVersion` defines which version of the game that the Reactor framework will download
    mappings for. If you are modding on the steam version, it will be `2020.12.9s`, as is
    already defined.
  - `Mappings` defines what version of the mappings itself that Reactor will use. If there
    is an incremental update to the mappings (which may correct some deobfuscation and add
    more deobfuscated names), this property should be updated in order to download the new
    version.
  - `Description` should be a description of your mod.
  - `Authors` should be the name of the author of the mod.
  - ![Example mod csproj prop](/img/example_csproj_properties.png)


## Troubleshooting
If you still have any errors, you should refresh your IDE. IDE should do this
automatically. Otherwise, restart the IDE, and it will pick up the proper information
from the project.

