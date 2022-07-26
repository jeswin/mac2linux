import { Manipulator, ManipulatorCondition } from "./types.ts";

export function changeModifier(
  key: string,
  fromModifiers: string[],
  toModifiers: string[],
  conditions: ManipulatorCondition[]
): Manipulator {
  return {
    type: "basic" as const,
    from: {
      key_code: key,
      modifiers: {
        mandatory: fromModifiers,
      },
    },
    to: [
      {
        key_code: key,
        modifiers: toModifiers,
      },
    ],
    conditions,
  };
}
