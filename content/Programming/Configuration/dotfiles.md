---
title: dotfiles
date: 2025-10-30
created: 2025-10-30
draft: true
comments: true
cssclasses:
aliases: 
  - 
tags: 
  - 
---

## homebrew

## Stow
When I started the first software engineering job, I spent a lot of time to build a developer environment that both helped me and suited me. When I first started that job, I was given a laptop that did not have enough RAM to run docker containers until the team lead had to see it to believe it. I was grateful to finally have something with more memory and compute power, but that meant I had to set everything up again which would knock me back a day or two. I thought why not version control with git and back it up on Github? But how would that logistical work to back up configuration files that my computer is using?

Then the idea of creating symlinks or [Symbolic Links](https://www.geeksforgeeks.org/linux-unix/how-to-symlink-a-file-in-linux/) of my configuration files into a git repository seems worthwhile. The basic idea of symlinks is that if create a file and create symlink in another directory, you can update one of those files and both should have those updates. But that could be a lot of...

```bash
ln -s <original file> /path/to/<symbolic link file> 
```

to make that happen and hearing about [GNU Stow](https://www.gnu.org/software/stow/) or stow from this [video](https://youtu.be/y6XCebnB9gs?si=UbZxi_2FaDYZojhS) seemed really cool to easily initialize, add and update those files as m configuration settings become more fine tuned. The idea with stow is that the original config file or folder is copied (i.e. for a copying a folder of configurations:).

```bash
cp -r <original folder> /path/to/<copied folder into your git repository>
```

> [!warning]
> Make sure your configuration file structure matches your git repository. For more info, check out the [youtube video](https://youtu.be/y6XCebnB9gs?si=UbZxi_2FaDYZojhS).

**When backing up with git, make sure you commit first to undo any changes.** Then you can run...

```bash
# This command to take those copied files can create symlinks in your git repository.
stow --adopt .
```

...to adopt the original file into your git repository and the original file becomes the symlink. When you edit either file, git will detect the file changes and you can commit and push up those changes. So when your computer breaks and you have to use a new one. Clone your dotfiles and run in the git repository...

```bash
stow .
```
## powerlevel-10k

## 