---
title: My Ghostty Terminal Config
date: 2025-10-21
created: 2025-10-21
draft: false
cssclasses:
aliases: 
  - 
tags: [terminal, ghostty]
---
# My Ghostty Terminal Config
[Ghostty](https://ghostty.org/) has been a better upgrade as a Mac-based terminal emulator than using Iterm2 or the stock Mac terminal app. What is nice about Ghostty is that it uses the [Kitty Graphics Protocol](https://sw.kovidgoyal.net/kitty/graphics-protocol/) to raster graphics like jpeg, png and even run applications like [DOOM](https://github.com/cryptocode/terminal-doom) in your terminal. To honest, my heart still goes out to [Kitty Terminal](https://sw.kovidgoyal.net/kitty/) as my favorite terminal emulator. The only reasons that I like the power-line tab bars, being locked in with settings format (even though ghostty's settings are much easier to configure), and having some powerful tools like [fzf](https://github.com/junegunn/fzf) piped into the terminal window buffer for powerful searching (especially with log or hard to find words).

So I will leave behind my configs so far below and maybe you might like them. I love the transparent with background blur look with the hidden titlebar. You can set separate color scheme theme on light and dark mode and I love to combo that with [dark-mode](https://github.com/sindresorhus/dark-mode) to quickly switch from light and dark for a new theme feel or when I need to present my terminal on screen share. If you are interested in checking out my kitty terminal settings, check out my [[My Kitty Terminal Config|my kitty terminal config]].

## `~/.config/ghostty/config`
```python
shell-integration = zsh
theme = dark:Apple System Colors ,light:Apple System Colors Light
font-family = SauceCodePro Nerd Font
background-opacity = 0.85
background-blur = 32
window-colorspace = display-p3
macos-titlebar-style = hidden 
quick-terminal-animation-duration = 0.08

# Key Bindings
keybind = global:ctrl+grave_accent=toggle_quick_terminal
```