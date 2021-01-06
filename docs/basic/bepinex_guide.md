---
title: BepInEx Guide
---


## Best Practices

Here is an example BasePlugin class:
```java
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
