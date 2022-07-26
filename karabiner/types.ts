export type FromBinding = {
  key_code: string;
  modifiers?: {
    mandatory?: string[];
    optional?: string[];
  };
};

export type ToMapping =
  | {
      shell_command: string;
    }
  | {
      key_code: string;
      lazy?: boolean;
      modifiers?: string[];
      halt?: true;
    };

export type ManipulatorCondition = {
  bundle_identifiers: string[];
  type: "frontmost_application_if" | "frontmost_application_unless";
};

export type Manipulator = {
  type: "basic";
  from: FromBinding;
  to?: ToMapping[];
  to_if_alone?: ToMapping[];
  conditions?: ManipulatorCondition[];
};

export type Rule = {
  description: string;
  manipulators: Manipulator[];
};
