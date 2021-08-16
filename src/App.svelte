<script>
	import { supabase } from "./supabaseClient";
	import { user } from "./sessionStore";
	import Login from "./Login.svelte";
	import Signup from "./Signup.svelte";
	
	let loginPopup = false;
	let signupPopup = false;

	user.set(supabase.auth.user);

	supabase.auth.onAuthStateChange((__, session) => {
		user.set(session);
	});

	const popupHandler = (popupType) => {
		switch(popupType)
		{
			case "login":
				loginPopup = true;
				break;
			case "signup":
				signupPopup = true;
				break;
			default:
				break;
		}
	}

	const switchHandler = (e) => {
		switch(e.detail)
		{
			case "login":
				loginPopup = true;
				signupPopup = false;
				break;
			case "signup":
				loginPopup = false;
				signupPopup = true;
				break;
			default:
				break;
		}
	}

	const closePopups = () => {
		loginPopup = false;
		signupPopup = false;
	}
</script>

<main>
    <h1>Simple authentication app</h1>
	{#if loginPopup == true}
	<button on:click={closePopups}>X</button>
	{/if}
	{#if signupPopup == true}
	<button on:click={closePopups}>X</button>
	{/if}
	{#if loginPopup == false}
	{#if signupPopup == false}
	<button on:click={() => popupHandler("login")}>Login/Signup</button>
	{/if}
	{:else}
	<Login on:switch={switchHandler} />
	{/if}
	{#if signupPopup}
	<Signup on:switch={switchHandler} />
	{/if}
</main>