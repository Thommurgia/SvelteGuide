import type { RequestHandler } from "./$types";
import {SPOTIFY_APP_CLIENT_ID, SPOTIFY_APP_CLIENT_SECRET} from "$env/static/private"
import { error, json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({cookies, fetch}) => {
    const refreshToken = cookies.get("refresh_token")

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${Buffer.from(`${SPOTIFY_APP_CLIENT_ID}:${SPOTIFY_APP_CLIENT_SECRET}`).toString('base64')}`
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: refreshToken || ''
		})
    });

    const responseJson = await response.json()

    if (responseJson.error) {
        cookies.delete("access_token", {path: "/"})
        cookies.delete("refresh_token", {path: "/"})
        throw error(401, responseJson.error_description)
    }

    cookies.set("refresh_token", responseJson.refresh_token, {path: "/"})
    cookies.set("access_token", responseJson.access_token, {path: "/"})

    return json(responseJson);
}