---
title: Debugging
sidebar_position: 2
---

## Intro to debugging your mod
Before launching your mod, we highly recommend for you to turn on bepinex's console for Among Us.
Head on to the path to your Among Us install. From there, go into `BepInEx/config`.
You should see the file `BepInEx.cfg`. Open up the `BepInEx.cfg` file and find the header
`[Logging.Console]` and change `Enabled = false` to `Enabled = true`

## Reactor.Debugger
If you wish to start the game with less than 4 clients, you can use the `Reactor.Debugger`
Download [Reactor.Debugger.dll](https://nightly.link/NuclearPowered/Reactor/workflows/main/master/Reactor.Debugger.dll) and copy to your `BepInEx/plugins`

## Debugging using your IDE

### Rider

1. Open your `doorstop_config.ini` and set `debugEnabled` to `true`
    ```ini title=doorstop_config.ini
    # Specifies whether the mono soft debugger is enabled
    debugEnabled=true
    # Specifies whether the mono soft debugger should suspend the process and wait for the remote debugger
    debugSuspend=false
    ```
    You can also enable `debugSuspend` if you want the game to wait for you to connect a debugger.

2. Make sure that debug symbols are available (reactor mod template does that by default)

3. Make a new `Mono Remote` run configuration
    ![Step 1](/img/debugging/rider/1.png)
    ![Step 2](/img/debugging/rider/2.png)
    Make sure port is set to `10000`!
    ![Step 3](/img/debugging/rider/3.png)
    ![Step 4](/img/debugging/rider/4.png)

### VS

VS could potentially work with [VSMonoDebugger](https://marketplace.visualstudio.com/items?itemName=GordianDotNet.VSMonoDebugger0d62) extension, although it is very hacky compared to official support in Rider, if anyone finds a reliable way, please contribute to this page ;)