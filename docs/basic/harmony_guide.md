---
title: Harmony Guide
---


## Best Practices

Harmony Patches are Prefixes and Postfixes. They are usually defined as **attributes**
above a patch class, which contains static methods named `Prefix` and/or `Postfix`. You can
access the current instance by adding a `__instance` parameter to the method (with the type
of the class you are patching).

Extensive Harmony patch documentation is [here](https://harmony.pardeike.net/articles/patching.html).

An example patch is below:
```java
using HarmonyLib;

namespace Example
{
    [HarmonyPatch(typeof(PlayerControl), nameof(PlayerControl.FixedUpdate))]
    public static class ExamplePatch
    {
        public static void Postfix(PlayerControl __instance)
        {
            __instance.nameText.Text = "Patched name";
        }
    }
}
```
