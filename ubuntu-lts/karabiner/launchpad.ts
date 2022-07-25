import { Rule } from "../../karabiner/types.ts";

const rules: Rule[] = [
  {
    description: "Show launchpad when Command is pressed alone",
    manipulators: [
      {
        type: "basic",
        from: {
          key_code: "left_command",
        },
        to: [
          {
            key_code: "left_command",
            lazy: true,
          },
        ],
        to_if_alone: [
          {
            key_code: "launchpad",
          },
        ],
      },
    ],
  },
];

export default rules;
