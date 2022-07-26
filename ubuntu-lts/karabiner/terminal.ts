import { Rule } from "../../karabiner/types.ts";

const commandCVZRule: Rule = {
  description: "Map Command C/V/Z to Control C/V/Z",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "c",
        modifiers: {
          mandatory: ["right_command"],
        },
      },
      to: [
        {
          key_code: "c",
          modifiers: ["left_control"],
        },
      ],
      conditions: [
        {
          bundle_identifiers: [
            "^com\\.apple\\.Terminal$",
            "^com\\.googlecode\\.iterm2$",
          ],
          type: "frontmost_application_if",
        },
      ],
    },
    {
      type: "basic",
      from: {
        key_code: "d",
        modifiers: {
          mandatory: ["right_command"],
        },
      },
      to: [
        {
          key_code: "d",
          modifiers: ["left_control"],
        },
      ],
      conditions: [
        {
          bundle_identifiers: [
            "^com\\.apple\\.Terminal$",
            "^com\\.googlecode\\.iterm2$",
          ],
          type: "frontmost_application_if",
        },
      ],
    },
    {
      type: "basic",
      from: {
        key_code: "z",
        modifiers: {
          mandatory: ["right_command"],
        },
      },
      to: [
        {
          key_code: "z",
          modifiers: ["left_control"],
        },
      ],
      conditions: [
        {
          bundle_identifiers: [
            "^com\\.apple\\.Terminal$",
            "^com\\.googlecode\\.iterm2$",
          ],
          type: "frontmost_application_if",
        },
      ],
    },
  ],
};

const commandArrowsRule: Rule = {
  description: "Map Command + Left/Right to Alt + Left/Right in terminal",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "left_arrow",
        modifiers: {
          mandatory: ["right_command"],
        },
      },
      to: [
        {
          key_code: "left_arrow",
          modifiers: ["left_option"],
        },
      ],
      conditions: [
        {
          bundle_identifiers: [
            "^com\\.apple\\.Terminal$",
            "^com\\.googlecode\\.iterm2$",
          ],
          type: "frontmost_application_if",
        },
      ],
    },
    {
      type: "basic",
      from: {
        key_code: "right_arrow",
        modifiers: {
          mandatory: ["right_command"],
        },
      },
      to: [
        {
          key_code: "right_arrow",
          modifiers: ["left_option"],
        },
      ],
      conditions: [
        {
          bundle_identifiers: [
            "^com\\.apple\\.Terminal$",
            "^com\\.googlecode\\.iterm2$",
          ],
          type: "frontmost_application_if",
        },
      ],
    },
  ],
};

const controlArrowsRule: Rule = {
  description: "Map Control + Left/Right to Alt + Left/Right in Terminal",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "left_arrow",
        modifiers: {
          mandatory: ["left_control"],
        },
      },
      to: [
        {
          key_code: "left_arrow",
          modifiers: ["left_option"],
        },
      ],
      conditions: [
        {
          bundle_identifiers: [
            "^com\\.apple\\.Terminal$",
            "^com\\.googlecode\\.iterm2$",
          ],
          type: "frontmost_application_if",
        },
      ],
    },
    {
      type: "basic",
      from: {
        key_code: "right_arrow",
        modifiers: {
          mandatory: ["left_control"],
        },
      },
      to: [
        {
          key_code: "right_arrow",
          modifiers: ["left_option"],
        },
      ],
      conditions: [
        {
          bundle_identifiers: [
            "^com\\.apple\\.Terminal$",
            "^com\\.googlecode\\.iterm2$",
          ],
          type: "frontmost_application_if",
        },
      ],
    },
  ],
};

const controlForCopyPaste: Rule = {
  description: "Map Control + Shift + C/V to Command + Shift + C/V",
  manipulators: [
    {
      type: "basic",
      from: {
        key_code: "c",
        modifiers: {
          mandatory: ["left_control", "shift"],
        },
      },
      to: [
        {
          key_code: "c",
          modifiers: ["right_command", "shift"],
        },
      ],
      conditions: [
        {
          bundle_identifiers: [
            "^com\\.apple\\.Terminal$",
            "^com\\.googlecode\\.iterm2$",
          ],
          type: "frontmost_application_if",
        },
      ],
    },
    {
      type: "basic",
      from: {
        key_code: "v",
        modifiers: {
          mandatory: ["left_control", "shift"],
        },
      },
      to: [
        {
          key_code: "v",
          modifiers: ["right_command", "shift"],
        },
      ],
      conditions: [
        {
          bundle_identifiers: [
            "^com\\.apple\\.Terminal$",
            "^com\\.googlecode\\.iterm2$",
          ],
          type: "frontmost_application_if",
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
];

export default rules;
