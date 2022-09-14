# The Simple Approach

This approach doesn't require installing a keyboard remapping tool.
It gets acceptably close to the default Linux experience, but if you're a power user consider using the [Karabiner Approach](Karabiner.md).

## Change the login shell

- Change the shell from zsh to bash with `chsh -s /bin/bash`
- OR Users and Groups -> Select User -> Advanced Options - Change login shell to /bin/bash

## .bash_profile

Use the included [ubuntu-lts/.bash_profile](ubuntu-lts/.bash_profile) - copied from Ubuntu.

## Mouse

- Uncheck Scroll Direction = Natural

## Keyboard Customization

### Modifier Keys

1. Go to Preferences -> Keyboard -> Modifier Keys.
   Select your keyboard and change Caps Lock to Command.

This lets you use the Caps Lock key as a Command button.

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
     - Add "Launch Terminal" = Control + ~ OR Control + Alt + T OR whatever

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
   - Move left a space = Control + Option + Left
   - Move right a space = Control + Option + Right

### Finder

1. Open Keyboard -> Shortcuts -> App Shortcuts
   - Create Finder.app
   - Go to Folder = Control + L
   - Rename = F2

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
So for now, we'll use Control + Shift + Alt instead of Command. See the Advanced section if you wanna fix it Karabiner.

- Install Rectangle https://rectangleapp.com/
- Open Rectangle.app and set these:
  - Snap window to Left half = Control + Shift + Alt + Left
  - Snap window to Right half = Control + Shift + Alt + Right
  - Maximize = Control + Shift + Alt + Up
  - Make Smaller - Control + Shift + Alt + Down

## Dock & Menu Bar under System Preferences

- Position on Screen = Left
- Show Recent Apps = False
