import cmdToFn from "./cmd-to-fn.ts";
import capsToCmd from "./caps-to-cmd.ts";
import textNavigation from "./text-navigation.ts";
import terminalCopyPaste from "./terminal-copy-paste.ts";
import cmdComboKeys from "./cmd-keys.ts";
import lockScreen from "./lock-screen.ts";
import ctrlKeys from "./ctrl-keys.ts";

const rules = [
  cmdToFn,
  capsToCmd,
  textNavigation,
  cmdComboKeys,
  terminalCopyPaste,
  lockScreen,
  ctrlKeys,
];

export default rules;
