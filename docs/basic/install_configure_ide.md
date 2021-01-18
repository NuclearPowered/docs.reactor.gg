---
title: Install and configure C# IDE
---


Downloading and configuring the C# IDE for the example template is the fourth step
[Overall Goals](/docs#overall-goals).

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
└── ExamplePlugin
    ├── ExamplePlugin
    │   ├── ExamplePlugin.csproj
    │   └── TemplatePlugin.cs
    └── ExamplePlugin.sln
```
:::

### Inside the project file
In the `.csproj` file, there are four important properties:
  - `GameVersion` defines which version of the game that the Reactor framework will download
    mappings for. If you are modding on the steam version, it will be the `2020.12.9s` (the latest
    version at the time of writing).
  - `Mappings` defines what version of the mappings itself that Reactor will use. If there
    is an update to the mappings (which may correct some deobfuscation and add
    more deobfuscated names), this property should be updated in order to download the new
    version. At the time of writing `NuclearPowered/Mappings:0.1.0-alpha.2` is the latest.
  - `Description` should be a description of your mod.
  - `Authors` should be the name of the author of the mod.
```xml
<Project Sdk="Microsoft.NET.Sdk">
    <PropertyGroup>
        <TargetFramework>netstandard2.1</TargetFramework>
        <Version>1.0.0</Version>
        <GameVersion>2020.12.9s</GameVersion>
        <Mappings>NuclearPowered/Mappings:0.1.0-alpha.2</Mappings>

        <Description>Mod template for Reactor</Description>
        <Authors>js6pak</Authors>
    </PropertyGroup>

    <ItemGroup>
        <Deobfuscate Include="$(AmongUs)\BepInEx\plugins\Reactor-$(GameVersion).dll" />

        <PackageReference Include="Reactor.OxygenFilter.MSBuild" Version="0.2.3" />
    </ItemGroup>

    <Target Name="Copy" AfterTargets="Reobfuscate">
        <Copy 
          SourceFiles="$(OutputPath)reobfuscated/$(AssemblyName)-$(GameVersion).dll" 
          DestinationFolder="$(AmongUs)/BepInEx/plugins/"
          Condition="'$(Configuration)' == 'Debug'"
        />
    </Target>
</Project>
```


## Troubleshooting
If you still have any errors, you should refresh your IDE, and IDE should do this
automatically. Otherwise, restart the IDE, and it will pick up the proper information
from the project.