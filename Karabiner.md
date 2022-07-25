# The Karabiner Approach

This approach requires installing Karabiner Elements, a keyboard remapping tool. 
If you prefer something simpler, see the [Simple Approach](Simple.md)

You need to install Karabiner Elements from https://karabiner-elements.pqrs.org/

## Change the login shell

- Change the shell from zsh to bash with `chsh -s /bin/bash`
- OR Users and Groups -> Select User -> Advanced Options - Change login shell to /bin/bash

## .bash_profile

Use the included [ubuntu-lts/.bash_profile](ubuntu-lts/.bash_profile) - copied from Ubuntu.

## Mouse

- Uncheck Scroll Direction = Natural

## Keyboard Customization

### Change DefaultKeyBindings.dict

macOS application obey user-specific keybindings stored at ~/Library/KeyBindings/DefaultKeyBindings.dict.
Copy the included <distro>/DefaultKeyBindings.dict into the directory. This directory ~/Library/KeyBindings may need to be created if it doesn't exist.

It makes the following bindings:

1. Text Navigation Linux style (which is Control + Cursor keys)
   - Command + Left/Right Arrows = Move cursor by a word left/right.
   - Command + Shift + Left/Right Arrows = Select word left/right.
   - Home to go to the beginning of a line
   - End to go to the end of a line
   - Shift + Home to select text up to the beginning of a line
   - Shift + End to select text up to the end of a line

## Customizing Apps

### System

1. Locking the Screen
   - Open Keyboard -> Shortcuts -> App Shortcuts
   - Select "All Applications"
   - Lock Screen = Control + Option + L

### Terminal

1. Let's create a shortcut to launch Terminal

   - Open Automator, select New document, then select Quick Actions
     - Select 'Launch Application'
     - Workflow receives "no input" in any application
     - Launch Application = Terminal
   - Open Keyboard -> Shortcuts
     - Select Services -> General
     - Add "Launch Terminal" = Ctrl + ~ OR Ctrl + Alt + T OR whatever

2. Open Keyboard -> Shortcuts -> App Shortcuts

   - Create Terminal.app
   - Copy = Command + Shift + C
   - Paste = Command + Shift + V

3. Terminal Preferences
   - Open Preferences -> Shell: When the shell exits, "Close the window"
   - Open Preferences -> Shell: Ask before closing: Never
   - Change color theme to Homebrew Default (or whatever)
   - Open Preferences -> General: Shells Open with: Default login shell

### Chrome

1. Open Keyboard -> Shortcuts -> App Shortcuts
   - Create Google Chrome.app
   - Reload Page Shortcut
     - Reload this page = F5
   - Developer Tools Shortcut
     - Developer Tools = Command + Shift + I

### Mission Control

1. Open Keyboard -> Shortcuts -> Mission Control
   - Show Desktop = Command + D
   - Move left a space = Ctrl + Option + Left
   - Move right a space = Ctrl + Option + Right

### Finder

1. Open Keyboard -> Shortcuts -> App Shortcuts
   - Create Finder.app
   - Go to Folder = Control + L

### Visual Studio Code

1. Open Keyboard Shortcuts (Command + Shift + P and type Keyboard Shortcuts)
   - cursorWordLeft = Command + Left
   - cursorWordEndRight = Command + Right
   - cursorWordLeftSelect = Shift + Command + Left
   - cursorWordEndRightSelect = Shift + Command + Right
   - editor.action.formatDocument = Shift + Command + I
   - renameFile = F2

## Window management (Rectangle.app)

In Ubuntu/Gnome3 the shortcut is Super + Arrow Keys. But Super is Command on macOS, so we're in a bind here.
So for now, we'll use Ctrl + Shift + Alt instead of Command. See the Advanced section if you wanna fix it Karabiner.

- Install Rectangle https://rectangleapp.com/
- Open Rectangle.app and set these:
  - Snap window to Left half = Ctrl + Shift + Alt + Left
  - Snap window to Right half = Ctrl + Shift + Alt + Right
  - Maximize = Ctrl + Shift + Alt + Up
  - Make Smaller - Ctrl + Shift + Alt + Down

## Dock & Menu Bar under System Preferences

- Position on Screen = Left
- Show Recent Apps = False

## Karabiner Config

1. Karabiner installs a new keyboard driver. So you'd need to fix the modifier keys again.
   - Go to Preferences -> Keyboard -> Modifier Keys.
   - Select your keyboard and change Caps Lock to Command.
   - Change Control to Command
   - Change the Globe/Fn key to Control (to use if you ever need it)

2. Let's enable custom modifications.
   - Copy <distro>/mac2linux.json into ~/.config/karabiner/assets/complex_modifications/
   - Go to Karabiner Elements GUI, and enable all modifications
   - Changes made via Karabiner
      - Map Caps Lock to Right Command
      - Make Super + Arrow Keys work in Rectangle App
      - Show Launchpad when Super (Left Command) is pressed

### Customizing Karabiner Config

The Karabiner config file (mac2linux.json) is auto-generated from scripts written with Deno and TypeScript. These files can be found under the `<distro>/src` directory.
To compile your edits, you need to install `deno` first (with `brew install deno`), and then run `./build-karabiner.sh <distro>`.

Compilation will generate a karabiner config file located at `<distro>/mac2linux.json`.

