import { Rule } from "../../karabiner/types.ts";

const rules: Rule[] = [
  {
    description: "Map Caps Lock to Command",
    manipulators: [
      {
        type: "basic",
        from: {
          key_code: "caps_lock",
        },
        to: [
          {
            key_code: "right_command",
          },
        ],
      },
    ],
  },
];

export default rules;
