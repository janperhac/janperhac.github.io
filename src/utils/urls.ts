/** Prefix local URLs with Astro's deployment base, preserving external URLs. */
export function withBase(path: string): string {
    if (!path.startsWith('/') || path.startsWith('//')) return path;
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    if (base && (path === base || path.startsWith(`${base}/`))) return path;
    return `${base}${path}`;
}
