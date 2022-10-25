---
title: Install and configure C# IDE
sidebar_position: 3
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

In the `.csproj` file, there are few important properties:
  - `GameVersion` defines which version of the game that the Reactor framework will download.
  - `Description` should be a description of your mod.
  - `Authors` should be the name of the author(s) of the mod.
```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net6.0</TargetFramework>
    <LangVersion>latest</LangVersion>
    <DebugType>embedded</DebugType>

    <VersionPrefix>1.0.0</VersionPrefix>
    <VersionSuffix>dev</VersionSuffix>
    <Description>Mod generated using Reactor Template</Description>
    <!-- <Authors>your name</Authors> -->
  </PropertyGroup>

  <PropertyGroup>
    <GamePlatform Condition="'$(GamePlatform)' == ''">Steam</GamePlatform>
    <GameVersion Condition="'$(GamePlatform)' == 'Steam'">2021.6.30</GameVersion>
    <GameVersion Condition="'$(GamePlatform)' == 'Itch'">2021.6.30</GameVersion>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Reactor" Version="2.0.0" />
    <PackageReference Include="BepInEx.Unity.IL2CPP" Version="6.0.0-be.662" Private="false" ExcludeAssets="runtime;native" />
    <PackageReference Include="AmongUs.GameLibs.Steam" Version="2022.10.25" PrivateAssets="all" />

    <PackageReference Include="BepInEx.AutoPlugin" Version="1.1.0" PrivateAssets="all" />
    <PackageReference Include="BepInEx.IL2CPP.MSBuild" Version="2.0.1" PrivateAssets="all" ExcludeAssets="runtime" />
  </ItemGroup>

  <Target Name="Copy" AfterTargets="Build" Condition="'$(AmongUs)' != ''">
    <Copy SourceFiles="$(TargetPath)" DestinationFolder="$(AmongUs)/BepInEx/plugins/" UseSymboliclinksIfPossible="true" />
  </Target>
</Project>
```

## Troubleshooting
If you still have any errors, you should refresh your IDE, and IDE should do this
automatically. Otherwise, restart the IDE, and it will pick up the proper information
from the project.
