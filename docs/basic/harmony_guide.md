---
title: Harmony Guide
---

## Intro to Prefixes and Postfixes

Harmony Patches are defined as Prefixes and Postfixes. 

Prefixes run before the original method. It can be used to:
- Access and edit the arguments of the original method.
- Set the result of the original method.
- Skip the original method.

Postfixes run after the original method. They can be used to:
- Read or change the result of the original method.
- Access the arguments of the original method.
- Run custom code after the logic of the original method has executed.

They are usually defined as **attributes** above a patch class, 
which contains static methods named `Prefix` and/or `Postfix`. You can
access the current instance by adding a `__instance` parameter to the method (with the type
of the class you are patching).

Extensive Harmony patch documentation is [here](https://harmony.pardeike.net/articles/patching.html).

## Understanding how to Patch Classes

An example patch is below. 
In particular, we call which class we want to detect, for instance, we will use the `PlayerControl` class.  
After that, we would like to define what method we want to detect in that class. In this scenario, we will 
use the `FixedUpdate` method which runs every frame in the game.

In order for us to patch this class and method, we can use the following line:  
`[HarmonyPatch(typeof(PlayerControl), nameof(PlayerControl.FixedUpdate))]`  
*Make sure that this is above your class*

After that, we can create a Postfix method since it is not necessary to use a Prefix  
It is easy practice to make sure your method is public, static, and that your variable is called `__instance`  
You then can access the `PlayerControl` from the variable `__instance`

```java
using HarmonyLib;

namespace ExampleMod
{
    [HarmonyPatch(typeof(PlayerControl), nameof(PlayerControl.FixedUpdate))]
    public static class ExamplePatch
    {
        // It is nice to know that this method runs for all players so all player's names are changed to "Apollo was here"
        public static void Postfix(PlayerControl __instance)
        {
            // This changes all player's name into "Apollo was here" 
            __instance.nameText.Text = "Apollo was here";
        }
    }
}
```
