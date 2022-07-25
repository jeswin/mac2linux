export default function getKeyName(keyCode: string) {
  return keyCode === "command"
    ? "Command"
    : keyCode === "control"
    ? "Control"
    : keyCode === "spacebar"
    ? "Space Bar"
    : keyCode === "tab"
    ? "Tab"
    : keyCode === "grave_accent_and_tilde"
    ? "Tilde"
    : keyCode;
}
