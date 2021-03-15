---
title: Debugging your mod
---

## Intro to Debugging
Before launching your mod, we highly recommend for you to turn on bepinex's console for Among Us.
Head on to the path to your Among Us install. From there, go into `BepInEx/config`.
You should see the file `BepInEx.cfg`. Open up the `BepInEx.cfg` file and find the header 
`[Logging.Console]` and change `Enabled = false` to `Enabled = true`

## Reactor.Debugger 
If you wish to start the game with 3 clients, you can use the `Reactor.Debugger.dll`  
Click this link: https://nightly.link/NuclearPowered/Reactor/workflows/main/master/Reactor.Debugger.dll
After downloading the Reactor.Debugger dll, drop it in your `BepInEx/plugins` folder.

There are a few options you can configure in the debugger at runtime of the game, but one necessary 
change is to **make sure the Impostor count is set to 1**