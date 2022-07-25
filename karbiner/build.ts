import type { Rule } from "./types.ts";

async function run() {
  const distro = Deno.args;

  if (!distro.length) {
    console.error(
      "The command is 'build.sh <distro>'. <distro> was not specified; try running './build.sh ubuntu-lts'."
    );
    Deno.exit(1);
  }

  const rulesets: Rule[][] = (await import(`../${distro}/karabiner/index.ts`))
    .default;

  const output: {
    title: string;
    rules: Rule[];
  } = {
    title: `Mac2Linux Rules for ${distro}`,
    rules: [],
  };

  let counter = 1;
  for (const rules of rulesets) {
    output.rules = output.rules.concat(
      rules.map((rule, i) => {
        return {
          description: `Mac2Linux ${
            rules.length === 1 ? counter : `${counter}.${i + 1}`
          } - ${rule.description}`,
          conditions: rule.conditions,
          manipulators: rule.manipulators,
        };
      })
    );
    counter++;
  }

  const strOutput = JSON.stringify(output, null, 2);

  await Deno.writeTextFile(`./${distro}/mac2linux.json`, strOutput);
}

run();
