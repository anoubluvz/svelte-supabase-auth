<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    let email;
    let password;
    
    const handleLogin = () => {
        
    }

    const handleSignup = () => dispatch("switch", "signup");
</script>

<form class="loginForm" on:click|preventDefault={handleLogin}>
    <input type="email" bind:value={email}>
    <input type="password" bind:value={password}>
    <a on:click={handleSignup} href="/">Don't have an account?</a>
</form>