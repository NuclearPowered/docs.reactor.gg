---
title: Install and configure C# IDE
---


Downloading and configuring the C# IDE for the example template is the fourth step
[Overall Goals](/#overall-goals).

## Install C# IDE

Download Rider or Visual Studio. If you prefer, you can also use a text editor, or a
lightweight environment like Visual Studio Code.

## Initial configuration of the project

Now, Open the project in your IDE or text editor. Do not worry if your IDE shows a lot of
errors. They will disappear at the end of this section. There are a few steps to follow:

- Open the `.csproj` file.
  - In Rider, right click on the project and go under `Edit > Edit .csproj`. Note that the
    image below is a sample image, and some information, particularly the name of the
    project, will not match with our Example mod project.
    
    ![open_csproj_rider](https://i.stack.imgur.com/uj5yP.png)
  - In Visual Studio Code, open up the `.csproj` file from the explorer view.
  - You can also navigate to the directory in which you cloned the git repository,
    and open the .csproj with a text editor.

:::tip
If you can't find the `.csproj` file, make sure you are in the right directory.
The project is organized in a nested structure. Here is an example directory
structure. Note that the exact name of the `.csproj` file depends on what you 
passed as the name to `dotnet new reactor -n` when you created the project.
```
.
└── ModExperiment
    ├── ModExperiment
    │   ├── ModExperiment.csproj
    │   └── TemplatePlugin.cs
    └── ModExperiment.sln
```
:::

### Inside the project file

Reactor.MSBuild docs are WIP

## Troubleshooting
If you still have any errors, you should refresh your IDE, and IDE should do this
automatically. Otherwise, restart the IDE, and it will pick up the proper information
from the project.
