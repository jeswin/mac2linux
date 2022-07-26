import capsToCmd from "./caps-to-cmd.ts";
import rectangle from "./rectangle.ts";
import launchpad from "./launchpad.ts";
import terminal from "./terminal.ts";
import disableAltArrows from "./disable-alt-arrows.ts";
import controlArrows from "./control-arrows.ts";

const rules = [
  capsToCmd,
  rectangle,
  launchpad,
  terminal,
  disableAltArrows,
  controlArrows,
];

export default rules;
