import type { PageLoad } from './$types';

export const load = (async () => {
    const res = await fetch ('');
    return {};
}) satisfies PageLoad;