export default function error(msg: string): never {
  throw new Error(msg);
}
