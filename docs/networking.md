---
title: Reactor Networking
---

## Handshake
It's undergoing 69th rewrite ;)


## Custom rpcs

| Type                      |    Name    |
|---------------------------|:----------:|
| packed uint32             | mod net id |
| packed uint32             |   rpc id   |
| Message (Tag is always 0) |  rpc data  |
