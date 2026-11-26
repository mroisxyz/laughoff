// One-line laugh-off entry writer.
// thinking_revised: hello, this batch of orders fills its slot on one line.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { isAbsolute, join } from 'node:path';

// Anchor relative output paths to this script's own directory.
const here = fileURLToPath(new URL('.', import.meta.url));
const configured = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputDir = isAbsolute(configured) ? configured : join(here, configured);

// Cold read, no setup: the punchline is the whole bit.
const line = 'I have a very strict bedtime: any time I decide to stop being productive.';

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), line, 'utf8');
console.log(Buffer.byteLength(line, 'utf8'));
