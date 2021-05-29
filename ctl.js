'use strict'

const 	auth = firebase.auth(),
		provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
auth.languageCode = 'it';
provider.setCustomParameters({ prompt: "select_account" });
auth.onAuthStateChanged(
	usuarioAuth => {
		if (usuarioAuth && usuarioAuth.email) {
			email.value = usuarioAuth.email;
			nombre.value = usuarioAuth.displayName;
			avatar.src = usuarioAuth.photoURL;
		} else {
			auth.signInWithRedirect(provider);
		}
	},
	procesaError
);

async function terminarSesion() {
	try	{
		await auth.signOut();
	} catch (e) {
		procesaError(e);
	}
}

function procesaError(e) {
	console.log(e);
	alert(e.message);
}
