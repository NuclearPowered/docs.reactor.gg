---
title: BepInEx Guide
sidebar_position: 0
---


## Best Practices

Here is an example BasePlugin class. Note how it does not (ab)use static variables everywhere, and calls `Harmony.PatchAll()` after it has been created with an `Id` defined by the `BepInAutoPlugin`.
```csharp
using BepInEx;
using BepInEx.IL2CPP;
using HarmonyLib;
using Reactor;

namespace Example;

[BepInAutoPlugin]
[BepInProcess("Among Us.exe")]
[BepInDependency(ReactorPlugin.Id)]
public partial class ExamplePlugin : BasePlugin
{
    public Harmony Harmony { get; } = new(Id);

    public override void Load()
    {
        Harmony.PatchAll();
    }
}
```
