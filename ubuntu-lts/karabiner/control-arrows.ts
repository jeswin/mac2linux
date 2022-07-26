import { Rule } from "../../karabiner/types.ts";

const rules: Rule[] = [
  {
    description:
      "Map Control + Left/Right to Command + Left/Right except in Terminal",
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
            modifiers: ["right_command"],
          },
        ],
        conditions: [
          {
            bundle_identifiers: [
              "^com\\.apple\\.Terminal$",
              "^com\\.googlecode\\.iterm2$",
            ],
            type: "frontmost_application_unless",
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
            modifiers: ["right_command"],
          },
        ],
        conditions: [
          {
            bundle_identifiers: [
              "^com\\.apple\\.Terminal$",
              "^com\\.googlecode\\.iterm2$",
            ],
            type: "frontmost_application_unless",
          },
        ],
      },
      {
        type: "basic",
        from: {
          key_code: "left_arrow",
          modifiers: {
            mandatory: ["left_control", "shift"],
          },
        },
        to: [
          {
            key_code: "left_arrow",
            modifiers: ["right_command", "shift"],
          },
        ],
      },
      {
        type: "basic",
        from: {
          key_code: "right_arrow",
          modifiers: {
            mandatory: ["left_control", "shift"],
          },
        },
        to: [
          {
            key_code: "right_arrow",
            modifiers: ["right_command", "shift"],
          },
        ],
        conditions: [
          {
            bundle_identifiers: [
              "^com\\.apple\\.Terminal$",
              "^com\\.googlecode\\.iterm2$",
            ],
            type: "frontmost_application_unless",
          },
        ],
      },
    ],
  },
];

export default rules;
