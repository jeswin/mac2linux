import { Rule } from "../../karabiner/types.ts";

const rules: Rule[] = [
  {
    description: "Disable Alt + Left/Right arrows except in Terminal",
    manipulators: [
      {
        type: "basic",
        from: {
          key_code: "left_arrow",
          modifiers: {
            mandatory: ["left_option"],
          },
        },
        to: [
          {
            key_code: "vk_none",
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
            mandatory: ["left_option"],
          },
        },
        to: [
          {
            key_code: "vk_none",
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
