import { Rule } from "../../karabiner/types.ts";
import { changeModifier } from "../../karabiner/change-modifier.ts";

const conditions = [
  {
    bundle_identifiers: [
      "^com\\.apple\\.Terminal$",
      "^com\\.googlecode\\.iterm2$",
    ],
    type: "frontmost_application_if" as const,
  },
];

const commandCVZRule: Rule = {
  description: "Map Command C/V/Z/R to Control C/V/Z/R",
  manipulators: ["c", "d", "z", "r"].map((x) =>
    changeModifier(x, ["right_command"], ["left_control"], conditions)
  ),
};

const commandArrowsRule: Rule = {
  description: "Map Command + Left/Right to Alt + Left/Right in terminal",
  manipulators: ["left_arrow", "right_arrow"].map((x) =>
    changeModifier(x, ["right_command"], ["left_option"], conditions)
  ),
};

const controlArrowsRule: Rule = {
  description: "Map Control + Left/Right to Alt + Left/Right in Terminal",
  manipulators: ["left_arrow", "right_arrow"].map((x) =>
    changeModifier(x, ["left_control"], ["left_option"], conditions)
  ),
};

const controlForCopyPaste: Rule = {
  description: "Map Control + Shift + C/V to Command + Shift + C/V",
  manipulators: ["c", "v"].map((x) =>
    changeModifier(
      x,
      ["left_control", "shift"],
      ["right_command", "shift"],
      conditions
    )
  ),
};

const homeAndEnd = {
  type: "basic",
  description: "Map Home and End to Control A and Control E in Terminal",
  manipulators: [
    {
      type: "basic" as const,
      from: {
        key_code: "home",
      },
      to: [
        {
          key_code: "a",
          modifiers: ["control"],
        },
      ],
      conditions: [
        {
          bundle_identifiers: [
            "^com\\.apple\\.Terminal$",
            "^com\\.googlecode\\.iterm2$",
          ],
          type: "frontmost_application_if" as const,
        },
      ],
    },
    {
      type: "basic" as const,
      from: {
        key_code: "end",
      },
      to: [
        {
          key_code: "e",
          modifiers: ["control"],
        },
      ],
      conditions: [
        {
          bundle_identifiers: [
            "^com\\.apple\\.Terminal$",
            "^com\\.googlecode\\.iterm2$",
          ],
          type: "frontmost_application_if" as const,
        },
      ],
    },
  ],
};

const rules: Rule[] = [
  commandCVZRule,
  commandArrowsRule,
  controlArrowsRule,
  controlForCopyPaste,
  homeAndEnd,
];

export default rules;
