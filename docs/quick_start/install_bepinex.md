---
title: Install BepInEx
sidebar_position: 0
---


Installing BepInEx is first step in the [Overall Goals](/#overall-goals).


## How to download

BepInEx is distributed as a zip file which contains the necessary bootstrapping code to mod the game.
  - Download `BepInEx_UnityIL2CPP_x86_....zip` from [builds.bepinex.dev](https://builds.bepinex.dev/projects/bepinex_be).

:::important

In the past a fork made by us was required, it is no longer the case! Make sure you are using the upstream version.

:::


### Installing BepInEx

You should extract the contents of the zip into the root directory of your Among Us folder. Here is a sample of how your Among Us folder should look after extracting BepInEx.
```
.
├── Among Us_Data
├── Among Us.exe
├── BepInEx
│   └── core/
├── doorstop_config.ini
├── GameAssembly.dll
├── mono
│   ├── Managed/
│   └── MonoBleedingEdge/
├── UnityCrashHandler32.exe
├── UnityPlayer.dll
└── winhttp.dll
```
After extracting BepInEx to your Among Us folder, you should follow the instructions in the
[First Launch](#first-launch) section.

:::warning

If you are on Linux, you should add `winhttp` to your wine configuration overrides, in the
wine prefix that Among Us is installed in. Follow [this](https://docs.bepinex.dev/master/articles/advanced/steam_interop.html#open-winecfg-for-the-target-game) guide if you are using Proton. If you don't do this, BepInEx **won't**
work!

:::

## First Launch

You should launch the game now to complete the first launch setup. BepInEx will internally
dump the game's assemblies, and make it compatible for patching. The first launch will take
a much longer time than normal, as BepInEx processes the game. The launch time will be much shorter
on future launches.

After you run the game once, you will see the directory structure change. Particularily,
the BepInEx folder will become populated with the `cache/`, `config/`, `patchers/`, and
`plugins/` folder. The `unhollwed/` folder will also fill up with a lot more `.dll` files.
This is completely normal, and was the result of the dumping BepInEx did on first launch.
Below is a example directory structure after launching BepInEx for the first time.
```
.
├── Among Us_Data
├── Among Us.exe
├── BepInEx
│   ├── cache/
│   ├── config/
│   ├── core/
│   ├── patchers/
│   ├── plugins/
│   ├── unhollowed/
│   └── unity-libs/
├── doorstop_config.ini
├── GameAssembly.dll
├── mono
│   ├── Managed/
│   └── MonoBleedingEdge/
├── UnityCrashHandler32.exe
├── UnityPlayer.dll
└── winhttp.dll
```
