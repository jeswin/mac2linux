import { Rule } from "../../karabiner/types.ts";

const rules: Rule[] = [
  {
    description: "Support Super + Arrow Keys in Rectangle",
    manipulators: [
      {
        type: "basic",
        from: {
          key_code: "left_arrow",
          modifiers: { mandatory: ["left_command"] },
        },
        to: [
          {
            key_code: "left_arrow",
            modifiers: ["control", "option", "shift"]
          },
        ],
      },
      {
        type: "basic",
        from: {
          key_code: "right_arrow",
          modifiers: { mandatory: ["left_command"] },
        },
        to: [
          {
            key_code: "right_arrow",
            modifiers: ["control", "option", "shift"]
          },
        ],
      },
      {
        type: "basic",
        from: {
          key_code: "up_arrow",
          modifiers: { mandatory: ["left_command"] },
        },
        to: [
          {
            key_code: "up_arrow",
            modifiers: ["control", "option", "shift"]
          },
        ],
      },
      {
        type: "basic",
        from: {
          key_code: "down_arrow",
          modifiers: { mandatory: ["left_command"] },
        },
        to: [
          {
            key_code: "down_arrow",
            modifiers: ["control", "option", "shift"]
          },
        ],
      },
    ],
  },
];

export default rules;
