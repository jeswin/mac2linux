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
    ],
  },
];

export default rules;
