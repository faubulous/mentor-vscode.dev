import fs from 'node:fs';
import path from 'node:path';

/**
 * The release history page, which is the single place on this site where a new
 * Mentor release is recorded. Its first entry is the current release.
 */
const RELEASE_HISTORY_PATH = 'src/content/docs/about/release-history.mdx';

/**
 * A single release recorded on the release history page.
 */
export interface Release {
	/** The version without a leading `v`, e.g. `0.6.3`. */
	version: string;
	/** The headline following the version, e.g. `SPARQL Document Query Fix`. */
	title: string;
	/** The release date, for the older entries that record one. */
	date?: string;
	/** The entry body as Markdown, without its heading and date lines. */
	body: string;
}

/**
 * Reads the most recent Mentor release from the release history page, whose
 * entries are `### Version X.Y.Z: Title` headings in reverse chronological
 * order, optionally followed by a date line carrying a calendar codicon.
 *
 * @returns The first entry, or `undefined` when the page cannot be read or
 * holds no release entry — callers then omit the release rather than render a
 * placeholder.
 */
export function getLatestRelease(): Release | undefined {
	let content: string;

	try {
		content = fs.readFileSync(path.join(process.cwd(), RELEASE_HISTORY_PATH), 'utf-8');
	} catch {
		return undefined;
	}

	const entry = content.split(/\n(?=### Version )/).find((part) => part.startsWith('### Version '));

	if (!entry) {
		return undefined;
	}

	const lines = entry.split('\n');
	const heading = lines[0].match(/^### Version ([\d.]+(?:-\S+)?): (.+)$/);

	if (!heading) {
		return undefined;
	}

	// The date is optional: only the entries up to 0.5.7 record one.
	const isDateLine = (line: string) => line.includes('codicon-calendar');
	const date = lines.find(isDateLine)?.match(/\*([^*]+)\*/)?.[1].trim();

	// Everything but the heading and the date line is the body. It is left as
	// Markdown rather than stripped of markup, so that the links, emphasis and
	// code spans an entry uses survive -- stripping HTML tags here would also
	// eat the angle brackets inside a code span such as `GRAPH <document>`.
	const body = lines
		.slice(1)
		.filter((line) => !isDateLine(line))
		.join('\n')
		.trim();

	return { version: heading[1], title: heading[2].trim(), date, body };
}

/**
 * Reads the version of the most recent Mentor release from the release history
 * page.
 *
 * @returns The version without a leading `v`, or `undefined` when no release
 * entry can be read.
 */
export function getLatestReleaseVersion(): string | undefined {
	return getLatestRelease()?.version;
}
