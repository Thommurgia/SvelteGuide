import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ data, url }) => {
	const user: SpotifyApi.CurrentUsersProfileResponse | null = data?.user ?? null;
	if (user && url.pathname === '/login') {
		throw redirect(307, '/');
	}
	if (!user && url.pathname !== '/login') {
		throw redirect(307, '/login');
	}

	return {
		user
	};
};