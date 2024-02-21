# Development Repo for Ethereal Engine Tutorials
This is a meta-project for creating EE Tutorial/Example projects.  
It contains:
- Collection of project ideas that could turn into useful tutorials
- Already published tutorials _(as submodules)_
- Source code of Work-in-Progress tutorial projects

## Cloning the Repository
The repository must be cloned with submodule recursion:
```bash
git clone --recurse-submodules -j8 git://github.com/EtherealEngine/ee-tutorials.git
```

If you already cloned the repository without recursive submodules
```bash
git submodule update --init --recursive
```

## Folder structure
```md
ROOT
 ├─ 🗀 published  # Finished tutorial projects are stored as submodules
 │  ├─ 🗀 ...     # A published tutorial submodule ..
 │  └─ 🗀 ...     # A published tutorial submodule ..
 ├─ 🗀 src        # Contains in-development projects that might eventually be published
 │  ├─ 🗀 ...     # Source code of a Work-in-Progress tutorial project ..
 │  └─ 🗀 ...     # Source code of a Work-in-Progress tutorial project ..
 └─ 🗎 readme.md  # This file
```

