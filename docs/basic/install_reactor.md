---
title: Install Reactor
---


Installing Reactor is the second step in the [Overall Goals](/docs#overall-goals).
This is the Reactor.dll client side mod, not to be confused with any other part of the
Reactor framework.

## How to Install

- Download Reactor from CI at
[nightly.link/NuclearPowered/Reactor/workflows](https://nightly.link/NuclearPowered/Reactor/workflows/main/master).
You should see a page like this below.
![nightly_link_reactor_artifact.png](/img/nightly_link_reactor_artifact.png)

- Click the link ending in `Reactor.dll.zip` to download the artifact.
- Open the zip and extract the `.dll` file inside to your `BepInEx/plugins` folder.
  This folder is the one where we previously extracted BepInEx to, the Among Us directory.

:::important
If you get a 404 page or are otherwise unable to download the Reactor mod from the
[nightly.link/NuclearPowered/Reactor/actions](https://nightly.link/NuclearPowered/Reactor/workflows/main/master),
you can download it straight from GitHub. Remember to **sign in** to your GitHub account,
then go to this link: 
[NuclearPowered/Reactor/actions](https://github.com/NuclearPowered/Reactor/actions).
Click into the latest workflow run, and then download the Reactor.dll artifact.
Remember, for some arcane reason, GitHub requires you to be 
logged in to be able to see workflow runs, even if the CI is public.
:::

## Test the current BepInEx modloader install

Now that we have a mod downloaded, launch BepInEx to make sure that everything is working.
You should see the **BepInEx version** and **Reactor version** in the top left, similar
to this picture:

![bepinex_test.png](/img/bepin_test.png)


If this does not appear, follow the instructions in [Install BepInEx](install_bepinex.md)
again, and ask in our community [Discord Server](https://discord.gg/Zcmsb9UGuq) for help.
