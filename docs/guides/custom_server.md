---
title: Custom server
sidebar_position: 4
---

Custom server is required to send [Custom RPCs](guides/custom_rpcs.md) and generally is strongly recommended over playing on official servers.

## Impostor

[Impostor](https://github.com/Impostor/Impostor) is a C# implementation of Among Us server with 1st party Reactor support.

1. Install Impostor following their [docs](https://github.com/Impostor/Impostor/blob/master/docs/Running-the-server.md)
2. Download Reactor.Impostor.dll from [NuclearPowered/Reactor.Impostor/releases](https://github.com/NuclearPowered/Reactor.Impostor/releases) and copy it to the server's `plugins` folder
3. Your server now supports modded handshake and custom rpcs! :tada:

Reactor.Impostor provides an API that you can use in your Impostor plugins to handle the custom rpcs on the server side.

## Hindenburg
[Hindenburg](https://github.com/SkeldJS/Hindenburg) is another option, written in TypeScript NodeJS although not supported officialy by us.