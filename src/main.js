import App from './App.svelte';

const app = new App({
	target: document.body.querySelector('#salaryIndex'),
	props: {
		name: 'world'
	}
});

export default app;