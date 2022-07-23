/*
  In Linux, we'd have mapped Caps Lock as Control.
  There are two Controls then (Caps Lock and the Original Control).

  Many Cmd + Key functions need to be mapped to the orignal Control as well.
*/

function mapControlToCommand(keyCode: string, useShift = false) {
  return {
    description: `Map Control +${
      useShift ? " Shift +" : ""
    } ${keyCode.toUpperCase()} to Command +${
      useShift ? " Shift +" : ""
    } ${keyCode.toUpperCase()}`,
    manipulators: [
      {
        type: "basic",
        from: {
          key_code: keyCode,
          modifiers: {
            mandatory: ["control"].concat(useShift ? ["shift"] : []),
          },
        },
        to: [
          {
            key_code: keyCode,
            modifiers: ["left_command"].concat(useShift ? ["shift"] : []),
          },
        ],
      },
    ],
  };
}

export default [
  mapControlToCommand("c"),
  mapControlToCommand("v"),
  mapControlToCommand("s"),
  mapControlToCommand("l"),
  mapControlToCommand("z"),
  mapControlToCommand("z", true),
];
