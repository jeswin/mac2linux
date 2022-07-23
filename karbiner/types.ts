export type Manipulator = {
  type: "basic";
  from: {
    key_code: string;
    modifiers?: {
      mandatory?: string[];
      optional?: string[];
    };
  };
  to: {
    key_code: string;
    lazy?: boolean;
  }[];
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
