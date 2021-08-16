<script>
    import { supabase } from "./supabaseClient";
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    let email;
    let password;
    let username;

    let loading = false;
    
    const handleSignup = async () => {
        try
        {
            loading = true;
            let { error } = await supabase.auth.signUp({
                email,
                password
            });
            if(error)
                throw error;
        }
        catch(err)
        {
            alert(err.message);
        }
        finally
        {
            loading = false;
            alert("Check your email for a verification link");
        }
    }

    const handleLogin = () => dispatch("switch", "login");
</script>

{#if loading == false}
<form class="loginForm" on:submit|preventDefault={handleSignup}>
    <input type="text" bind:value={username} placeholder="Enter your username" min=3>
    <input type="email" bind:value={email} placeholder="Enter your email" min=3>
    <input type="password" bind:value={password} placeholder="Enter your password" min=3>
    <button type="submit">Sign up</button>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a on:click={handleLogin}>Already have an account?</a>
</form>
{:else}
<div>Please wait...</div>
{/if}