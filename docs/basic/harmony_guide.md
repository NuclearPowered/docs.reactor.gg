---
title: Harmony Guide
---

## Intro to Prefixes and Postfixes

Harmony Patches are defined as Prefixes and Postfixes. 

Prefixes run before the original method. It can be used to:
- access and edit the arguments of the original method.
- set the result of the original method.
- skip the original method.

Postfixes run after the original method. They can be used to:
- read or change the result of the original method.
- access the arguments of the original method.
- run custom code after the logic of the original method has executed.

They are usually defined as **attributes** above a patch class, 
which contains static methods named `Prefix` and/or `Postfix`. You can
access the current instance by adding a `__instance` parameter to the method (with the type
of the class you are patching).

Extensive Harmony patch documentation is [here](https://harmony.pardeike.net/articles/patching.html).

## Best Practices

An example patch is below. In particular, it uses `nameof(PlayerControl.FixedUpdate)` for the second parameter of the attribute, instead of hardcoding a string value of `FixedUpdate`.:
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
