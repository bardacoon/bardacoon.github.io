import { getEntries, type ReferenceDataEntry } from "astro:content";

export function formatDate(date: Date): string {
    const months = [
        "Jan.",
        "Feb.",
        "Mar.",
        "Apr.",
        "May",
        "June",
        "July",
        "Aug.",
        "Sept.",
        "Oct.",
        "Nov.",
        "Dec.",
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

export async function formatTags(
    tags: ReferenceDataEntry<"tags", string>[] | undefined,
): Promise<string[] | null> {
    if (!tags) return null;

    const entries = await getEntries(tags);
    return entries.filter((tag) => tag).map((tag) => tag.data.name);
}
