---
title: Getting Started
slug: /
---


## Preamble

This guide will explain the tools necessary to install and setup in order to create
a modding environment. It contains a detailed explanation of how one would approach
modding the game Among Us. Finally, it walks through the process of getting your mod
installed and playing it.


---


## Prerequisite Information

1. Loading external mods requires **BepInEx**, also known as Bepis Injector Extensible.
2. BepInEx provides an environment for mods to patch Among Us functions,
   to change how they run, as well as call Among Us and Unity methods.
3. A quirk of Among Us is that it is compiled using **il2cpp**, and obfuscated using
   **beebyte**. These programs that converts code that can be easily decompiled
   and patchable into obfuscated code.
4. Luckily, the Reactor Framework automatically deobfuscates Among Us,
   to make it easily moddable again.

:::important

Mods for the game are programmed in **C#**. It is similar to other higher level languages
like Java. Though the programming concepts in this guide are simple to follow, prior
programming experience is heavily recommended.

:::

## What are the different parts of the Reactor Framework?

- **Reactor Framework** is the all-encompassing umbrella term for many NuclearPowered
  projects. It may also be referred to as just Reactor in general language.
- **Reactor** (Reactor.dll) refers to the client side mod. It provides helper extensions
  and utility functions for other client mods.
- **Reactor.OxygenFilter** is the program which translates obfuscated names to unobfuscated
  names. It is used when internally and automatically when building a mod project to
    - Convert from obfuscated ➔ deobfuscated
      (so you can use human-friendly names in your code)
    - Convert from deobfuscated ➔ obfuscated
      (so the mod works in the obfuscated environment where the game is running)
- **Reactor.OxygenFilter.MSBuild** is the actual code which plugs directly into the C# build
  process, and invokes Reactor.OxygenFilter

---

## Overall Goals
1. Install BepInEx.
2. Install the Reactor mod.
3. Install an C# IDE and download the example mod project
4. Compile the project and obtain the mod file.
5. Launch Among Us with the new mod!

## Ready to start?

### [Let's go ➔](basic/install_bepinex)
