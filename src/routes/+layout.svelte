<script lang="ts">
    import "modern-normalize/modern-normalize.css"
    import "../styles/main.scss"
	import type { LayoutData } from "./$types";

    export let data: LayoutData

    $: user = data.user
</script>

<div id="main">
    <div id="content">
        <main id="main-content">
            <slot />
        </main>
    </div>
</div>

<style lang="scss">
    #main {
        #content {
            main#main-content {
                padding: 30px 15px 60px;
                padding: 30px 15px 60px;
            }
        }
    }
</style>