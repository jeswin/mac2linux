export type ToMapping = {
  key_code: string;
  lazy?: boolean;
  modifiers?: string[];
  halt?: true;
};
export type Manipulator = {
  type: "basic";
  from: {
    key_code: string;
    modifiers?: {
      mandatory?: string[];
      optional?: string[];
    };
  };
  to?: ToMapping[];
  to_if_alone?: ToMapping[];
};

export type Rule = {
  description: string;
  conditions?: [
    {
      bundle_identifiers: string[];
      type: "frontmost_application_if" | "frontmost_application_unless";
    }
  ];
  manipulators: Manipulator[];
};
