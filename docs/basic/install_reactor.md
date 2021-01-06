---
title: Install Reactor
---


Installing Reactor is the second step in the [Overall Goals](/docs#overall-goals).
This is the Reactor.dll client side mod, not to be confused with any other part of the
Reactor framework.

## How to Install

- Download Reactor from CI at
[NuclearPowered/Reactor/actions](https://github.com/NuclearPowered/Reactor/actions).
- Click into the latest build (it will be the first workflow run).
- At the bottom of that page, there are the `Reactor.dll` and `Reactor.Debugger.dll`
  artifacts. Download the `Reactor.dll` mod for now.
- Move it into the `BepInEx/plugins` folder. This folder is the one where we previously
  extracted BepInEx to, the Among Us directory.


## Test the current BepInEx modloader install

Now that we have a mod downloaded, launch BepInEx to make sure that everything is working.
You should see the **BepInEx version** and **Reactor version** in the top left, similar
to this picture:

![bepinex_test.png](/img/bepin_test.png)


If this does not appear, follow the instructions in [Install BepInEx](install_bepinex.md)
again, and ask in our community [Discord Server](https://discord.gg/Zcmsb9UGuq) for help.
