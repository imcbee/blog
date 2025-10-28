---
title: My Kitty Terminal Config
date: 2025-10-22
created: 2025-10-22
draft: false
cssclasses:
aliases: 
  - 
tags: [kitty, terminal, fzf]
---
```
                ⠀⠀⠀⠀⢀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⣠⠾⠛⠶⣄⢀⣠⣤⠴⢦⡀⠀⠀⠀⠀
                ⠀⠀⠀⢠⡿⠉⠉⠉⠛⠶⠶⠖⠒⠒⣾⠋⠀⢀⣀⣙⣯⡁⠀⠀⠀⣿⠀⠀⠀⠀
                ⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⠀⠀⢯⣼⠋⠉⠙⢶⠞⠛⠻⣆⠀⠀⠀
                ⠀⠀⠀⢸⣧⠆⠀⠀⠀⠀⠀⠀⠀⠀⠻⣦⣤⡤⢿⡀⠀⢀⣼⣷⠀⠀⣽⠀⠀⠀
                ⠀⠀⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⢏⡉⠁⣠⡾⣇⠀⠀⠀
                ⠀⠀⢰⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠋⠉⠀⢻⡀⠀⠀
                ⣀⣠⣼⣧⣤⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠐⠖⢻⡟⠓⠒
                ⠀⠀⠈⣷⣀⡀⠀⠘⠿⠇⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠿⠟⠀⠀⠀⠲⣾⠦⢤⠀
                ⠀⠀⠋⠙⣧⣀⡀⠀⠀⠀⠀⠀⠀⠘⠦⠼⠃⠀⠀⠀⠀⠀⠀⠀⢤⣼⣏⠀⠀⠀
                ⠀⠀⢀⠴⠚⠻⢧⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠞⠉⠉⠓⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠶⠶⠶⣶⣤⣴⡶⠶⠶⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀
```
From [[My Ghostty Terminal Config|my ghostty terminal config]] article post, I thought I would share my kitty configurations. Usually when you download kitty, it gives narrating comments on how to set up each part of kitty. If you would like to see that version of my kitty.conf, follow this link to my [github gist](https://gist.github.com/imcbee/55bd85f3bc7ad971591c64c2b20895d3). 

Using this configuration will need a [Nerd Font](https://www.nerdfonts.com/) and [fzf](https://github.com/junegunn/fzf) to render some of the symbols which are seen missing like in "tab-activity_symbol" on line 14 highlighted below. Kitty is very powerful because you can use fzf with a key map to search the kitty terminal screen for what ever text you want and that text will be piped into kitty's own command programs called "kittens" with the command [`kitty +kitten clipboard`](https://sw.kovidgoyal.net/kitty/kittens_intro/). This helps me a lot with docker logs to grep and find error logs and I can copy that line. Or if I am running around in `psql` and I am trying to find a table or field, I can just use `cmd+shift+f` to find it. With `ctrl+shift+f`, I found this [github repo](https://github.com/trygveaa/kitty-kitten-search) on implementing a close to standard search feature that you might find in something in a normal terminal like Iterm2. `cmd+f` is just using combining [show_scrollback](https://sw.kovidgoyal.net/kitty/actions/#action-show_scrollback) and [send_text](https://sw.kovidgoyal.net/kitty/actions/#action-send_text) with a less command to do a vim search on the terminal window.

That is basically it! Really love the terminal and I learned a lot from it and improving your tools will definitely improve you as a programmer. Cheers!

## `~/.config/kitty/kitty.conf`
```python {14,47,48,49}
# Appearance/Settings
font_family      family="SauceCodePro Nerd Font"
font_size 13
scrollback_lines 10000
enable_audio_bell yes
visual_bell_duration 0.0
window_alert_on_bell yes
bell_on_tab "🔔 "
hide_window_decorations titlebar-only
tab_bar_edge bottom
tab_bar_margin_height 0.0 0.0
tab_bar_style powerline
tab_powerline_style slanted
tab_activity_symbol 
tab_title_template "{fmt.fg.cyan}{bell_symbol}{activity_symbol}{fmt.fg.tab} {title}"
active_tab_foreground   black
active_tab_background   cyan
active_tab_font_style   bold-italic
inactive_tab_foreground 
inactive_tab_background 
inactive_tab_font_style normal
tab_bar_background none
tab_bar_margin_color none
background_opacity 0.80
background_blur 32
allow_remote_control yes
update_check_interval 24
shell_integration enabled
macos_colorspace displayp3

# Maps
map kitty_mod+enter new_window_with_cwd
map cmd+enter       new_window_with_cwd
map cmd+n       new_os_window_with_cwd
map cmd+t       new_tab_with_cwd
map cmd+plus         change_font_size all +0.5
map cmd+minus             change_font_size all -0.5

map kitty_mod+a>m set_background_opacity +0.1
map kitty_mod+a>l set_background_opacity -0.1
map kitty_mod+a>1 set_background_opacity 1
map kitty_mod+a>d set_background_opacity default
map shift+cmd+/ open_url https://sw.kovidgoyal.net/kitty/

map cmd+q quit

map cmd+shift+f launch --type=overlay --stdin-source=@screen_scrollback /bin/sh -c "/opt/homebrew/bin/fzf --no-sort --no-mouse --exact -i --tac | kitty +kitten clipboard"
map ctrl+shift+f launch --location=hsplit --allow-remote-control kitty +kitten search.py @active-kitty-window-id
map cmd+f combine : show_scrollback : send_text normal,application /

map cmd+0 goto_tab 10
map cmd+1 goto_tab 1
map cmd+2 goto_tab 2
map cmd+3 goto_tab 3
map cmd+4 goto_tab 4
map cmd+5 goto_tab 5
map cmd+6 goto_tab 6
map cmd+7 goto_tab 7
map cmd+8 goto_tab 8
map cmd+9 goto_tab 9
map cmd+backspace send_text all \x17
```