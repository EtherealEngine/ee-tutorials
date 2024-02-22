# Development ground for Ethereal Engine tutorials
This is a meta-project for creating EE Tutorial/Example projects.  
It contains:
- Collection of project ideas that could turn into useful tutorials
- Already published tutorials _(as submodules)_
- Source code of Work-in-Progress tutorial projects

> **Important**:  
> This repository uses git's `subtree` and `submodule` features for managing its contained projects.  
> Using the provided scripts and instructions is required to respect the repository's workflow.  

## Cloning the Repository
The repository **must** be cloned with submodule recursion:
```bash
git clone --recurse-submodules -j8 git@github.com:EtherealEngine/ee-tutorials.git
```

If you already cloned the repository without recursive submodules
```bash
git submodule update --init --recursive
```

## Creating a new project
This repository provides a script to add new projects based on the engine templates:
```bash
./create <project-name>        # Creates a new project based on the standard template
./create <project-name> static # Creates a new project based on the static build template
# NOTE: <project-name> is the name of the project without the `ee-tutorial-` prefix
```

## Folder structure
```md
ROOT
 ├─ 🗀 published  # Finished tutorial projects are stored as submodules
 │  ├─ 🗀 ...     # A published tutorial submodule ..
 │  └─ 🗀 ...     # A published tutorial submodule ..
 ├─ 🗀 src        # In-Development projects that might eventually be published
 │  ├─ 🗀 ...     # Source code of a Work-in-Progress tutorial project ..
 │  └─ 🗀 ...     # Source code of a Work-in-Progress tutorial project ..
 ├─ 🗎 create     # Shell script to create new projects from the engine templates
 └─ 🗎 readme.md  # This file
```

## Publishing finished projects
This process allows to extract the project from this repository's git-tree without losing its history.  
```bash
# Split the project's tree without losing its history
git subtree split -P ./src/<folder-name> -b <new-branch>
# NOTE: <new-branch> is a branch on this repository, not on the new repository that will contain the example

# Create the published project
mkdir ./published/<folder-name> && cd ./published/<folder-name>
git init && git pull git@github.com:EtherealEngine/ee-tutorials.git <new-branch>

# Create the repository with GitHub UI and add the resulting URL
git remote add origin <git@github.com:user/new-repo.git>
git push -u origin dev

# Cleanup the original code of the project
git rm -rf ./src/<folder-name> 
```
