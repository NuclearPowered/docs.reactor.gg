---
title: Custom RPCs
sidebar_position: 3
---

## What is a RPC?

RPC is a method of sending calling a method over a network. In case of Among Us it means that we can send data to other players in the lobby and make them run a method.

## How to make a RPC?

There are 2 methods of making RPCs using Reactor:
- method rpc - the easiest and faster way
- extending `CustomRpc` class - the most flexible but clunky

In boths cases you will need a `CustomRpcCalls` enum, which will store ids for all your rpcs.

```csharp
public enum CustomRpcCalls : uint
{
    SayHello = 0
}
```

### Method RPC

To define a method rpc all you need is:

```csharp
[MethodRpc((uint) CustomRpcCalls.SayHello)]
public static void RpcSayHello(PlayerControl player, string text)
{
    Logger<ExamplePlugin>.Info($"{player.Data.PlayerName} said: {text}");
}
```

To call it just:

```csharp
RpcSayHello(PlayerControl.LocalPlayer, "Hello from docs.reactor.gg!");
```

:::tip
Method rpc can be an extension method
:::

### Class RPC

:::caution
You should only do this if you are already experienced with Hazel and `MessageConverter` api is not enough for you.
:::

To define a class:

```csharp
[RegisterCustomRpc((uint) CustomRpcCalls.SayHello)]
public class SayHelloRpc : PlayerCustomRpc<ExamplePlugin, SayHelloRpc.Data>
{
    public SayHelloRpc(ExamplePlugin plugin, uint id) : base(plugin, id)
    {
    }

    public override RpcLocalHandling LocalHandling => RpcLocalHandling.Before;

    public readonly struct Data
    {
        public readonly string Message;

        public Data(string message)
        {
            Message = message;
        }
    }

    public override void Write(MessageWriter writer, Data data)
    {
        writer.Write(data.Message);
    }

    public override Data Read(MessageReader reader)
    {
        return new Data(reader.ReadString());
    }

    public override void Handle(PlayerControl player, Data data)
    {
        Logger<ExamplePlugin>.Info($"{player.Data.PlayerName} said: {data.Message}");
    }
}
```

To call it just:

```csharp
Rpc<SayHelloRpc>.Instance.Send(new SayHelloRpc.Data("Hello from docs.reactor.gg!"));
```

:::tip
`Rpc<T>.Instance` returns an instance of T, so you can call access members on the rpc, you can use that to create helper methods.
:::
