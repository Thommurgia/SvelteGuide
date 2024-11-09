<script lang="ts">
    import {Button} from "$components"
    import logo from "$assets/Spotify_Logo_RGB_White.png"
    import cover from "$assets/cover.png"
</script>

<div class="wrapper">
    <div class="content">
        <img src={logo} class="logo" alt="Spotify" />
        <h1>EGP 0.00 for 3 months of Premium</h1>
        <p>Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</p>
        <div class="buttons">
            <Button element="a" variant="outline" href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer">Sign Up</Button>
            <Button element="a" variant="solid" href="/api/auth/login">Login</Button>
        </div>
    </div>
    <div class="cover">
        <img src={cover} alt="Svelte album cover" />  
    </div>
</div>

<style lang="scss">
    :global(body) {
        background-image: linear-gradient(230deg, var(--sidebar-color), var(--bg-color));
        height: 100vh;
    }
    .wrapper {
        display: flex;
        width: 100;
        max-width: 1200px;
        margin: 80px auto 0;
        align-items: center;
    }
    .cover {
        flex: 1;
        margin-left: 20px;
        img {
            max-width: 100%;
        }
    }
    .content {
        flex: 1.8;
        h1 {
            font-size: functions.toRem(40);
        }
        p {
            font-size: functions.toRem(20);
        }
        .buttons {
            margin-top: 40px;
            :global(.button) {
                margin-right: 10px;
                padding: 10px 20px;
                text-transform: uppercase;
            }
        }
        .logo {
            width: 170px;
            max-width: 100%;
            margin-bottom: 30px;
        }
    }
</style>