---
title: BepInEx Guide
sidebar_position: 0
---


## Best Practices

Here is an example BasePlugin class. Note how it does not (ab)use static variables everywhere, and calls `Harmony.PatchAll()` after it has been created with a user defined `Id = gg.reactor.Example`.
```csharp
using BepInEx;
using BepInEx.Configuration;
using BepInEx.IL2CPP;
using HarmonyLib;
using Reactor;

namespace Example
{
    [BepInPlugin(Id)]
    [BepInProcess("Among Us.exe")]
    [BepInDependency(ReactorPlugin.Id)]
    public class ExamplePlugin : BasePlugin
    {
        public const string Id = "gg.reactor.Example";

        public Harmony Harmony { get; } = new Harmony(Id);

        public override void Load()
        {
            Harmony.PatchAll();
        }
    }
}
```
