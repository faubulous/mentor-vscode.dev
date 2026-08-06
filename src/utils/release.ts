import fs from 'node:fs';
import path from 'node:path';

/**
 * The release history page, which is the single place on this site where a new
 * Mentor release is recorded. Its first entry is the current release.
 */
const RELEASE_HISTORY_PATH = 'src/content/docs/about/release-history.mdx';

/**
 * Reads the version of the most recent Mentor release from the release history
 * page, whose entries are `### Version X.Y.Z: Title` headings in reverse
 * chronological order.
 *
 * @returns The version without a leading `v`, or `undefined` when the page
 * cannot be read or holds no release entry — callers then omit the version
 * rather than render a placeholder.
 */
export function getLatestReleaseVersion(): string | undefined {
	let content: string;

	try {
		content = fs.readFileSync(path.join(process.cwd(), RELEASE_HISTORY_PATH), 'utf-8');
	} catch {
		return undefined;
	}

	return content.match(/^### Version ([\d.]+(?:-\S+)?)/m)?.[1];
}
