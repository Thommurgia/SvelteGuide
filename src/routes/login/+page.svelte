<script lang="ts">
    import Button from "$components/Button.svelte"
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

<stlye lang="scss">
    
</stlye>