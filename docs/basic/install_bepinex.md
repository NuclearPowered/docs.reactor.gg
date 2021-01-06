---
title: Install BepInEx
---


Installing BepInEx is first step in the [Overall Goals](/docs#overall-goals).


## How to download

BepInEx is distributed as a zip file which contains the necessary bootstrapping code to
mod the game. There are two ways to get the latest build.
  - Manual downloading from the NuclearPowered GitHub. The latest release will be posted on
    [NuclearPowered/BepInEx/releases](https://github.com/NuclearPowered/BepInEx/releases).
  - You can also install it through the Dropship launcher, which will automatically install and
    upgrade to the latest version of BepInEx.
    - The latest Dropship release can be
      [downloaded here](https://github.com/NuclearPowered/Dropship/releases/latest).

:::important

This version of BepInEx is NuclearPowered's own custom fork. You should use this BepInEx for
Among Us modding. If you have a version downloaded from
[builds.bepis.io](https://builds.bepis.io) or any other place online, you should replace
it with our version. Go to the
[Updating or Migrating from a different version](#updating-or-migrating-from-a-different-version)
section to do this.

:::


### Installing BepInEx
If you downloaded it through Dropship, you can skip down to the
[First Launch](#first-launch) section.

If you downloaded the BepInEx zip manually, you should extract the contents of it into the root directory of
your Among Us Folder. Here is a sample of how your Among Us Directory should look after extracting BepInEx.
```
.
├── Among Us_Data
├── Among Us.exe
├── BepInEx
│   ├── core/
│   └── unhollowed/
├── changelog.txt
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
wine prefix that Among Us is installed in. For example with Steam, it will probably be
`~/.steam/steam/steamapps/compatdata/945360/pfx`. If you don't do this, BepInEx **won't**
work!

:::


## Updating or Migrating from a different version

To update or migrate between versions of BepInEx, you can do the following steps:
- Extract the new zip release.
- Drag and drop those files into the Among Us directory, so that it **overwrites**
  the old files.

If you are migrating from a version of BepInEx that isn't NuclearPowered's own BepInEx,
there are a few different steps to follow.
- Delete the following files and directories:
  - `BepInEx/cache`
  - `BepInEx/core`
  - `BepInEx/unhollowed`
  - `changelog.txt`
  - `mono/`
  - `winhttp.dll`
- Now install BepInEx again, following the [Install Instructions](#how-to-download).

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
│   └── unhollowed/
├── changelog.txt
├── doorstop_config.ini
├── GameAssembly.dll
├── mono
│   ├── Managed/
│   └── MonoBleedingEdge/
├── UnityCrashHandler32.exe
├── UnityPlayer.dll
└── winhttp.dll
```
