<script>
    import { supabase } from "./supabaseClient";
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    let email;
    let password;

    let loading = false;
    
    const handleLogin = async () => {
        try
        {
            loading = true;
            let { error } = await supabase.auth.signIn({
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
        }
    }

    const handleSignup = () => dispatch("switch", "signup");
</script>

{#if loading == false}
<form class="loginForm" on:submit|preventDefault={handleLogin}>
    <input type="email" bind:value={email} placeholder="Enter your email" min=3>
    <input type="password" bind:value={password} placeholder="Enter your password" min=3>
    <button type="submit">Login</button>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a on:click={handleSignup}>Don't have an account?</a>
</form>
{:else}
<div>Please wait...</div>
{/if}