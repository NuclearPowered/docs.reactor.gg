---
title: Handshake
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Reactor handshake makes sure that all players in a game of modded Among Us are running the same version of mods. If you reached this page, you may have run into an issue with the handshake or you want to enable it for your own mods.

<Tabs>
<TabItem value="players" label="For Players" default>

Most mods require you all players you play with to install the mod. To check that all players have the correct version, the handshake is used. If you do not install mods that use the handshake, you cannot play with this mod.

To play a modded game, either find some friends willing to play with you, or look in the public game menu of a custom server. Joining a game from the public server list on official servers doesn't work, almost all of the lobbies you find there are of unmodded games. Alternatively, join the Discord of the mod you installed, they usually have a matchmaking section.

</TabItem>
<TabItem value="servers" label="For Server Operators">

If you run an Impostor Server, you need to install some plugins to take full advantage of the custom handshake. If y

To prepare your Impostor server for modded game matchmaking, you need to install and set up the following plugins:

- [Impostor.Http](https://github.com/Impostor/Impostor.Http/releases) version 0.2.0 or newer.
- [Reactor.Impostor](https://github.com/NuclearPowered/Reactor.Impostor/releases) version 2.0.0 or newer. <!-- TODO confirm version -->
- Reactor.Impostor.Http which you can download from the Reactor.Impostor Github. Use the same version as Reactor.Impostor.

[Impostor.Http](https://github.com/Impostor/Impostor.Http/blob/main/README.md) requires some additional configuration after installation: you need to install ASP.NET Core and set up a config file. See the readme of Impostor.Http for details on how to configure this plugin.

</TabItem>
<TabItem value="mods" label="For Mod Developers">

If your mod requires all players to have the mod installed in order to play, you need to do the following two things:

1. If you don't already have one, add a dependency to Reactor to your `.csproj` file: `<PackageReference Include="Reactor" Version="x.x.0" />` <!-- TODO -->
2. In your main class, add the following attribute: `[ReactorPluginSide(PluginSide.Both))]` <!-- TODO -->
3. Make sure that each release of your mod that is incompatible with the rest has a different version number and if you are forking someone else's mod, that you are using a different plugin id. The handshake relies on your mod's plugin id and version number to determine which mods are installed on each side.

Now Reactor should register your mod as a mod that requires a handshake to match.

</TabItem>
</Tabs>
