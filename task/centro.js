document.getElementById('ContactForm').addEventListener('submit', async function(e){
	e.preventDefault();
	const formData = new FormData(this);

	const response = await fetch('http://localhost:5090/api/form/submit', {
		method: 'POST',
    	body: formData
	});

  	const data = await response.json();
  	alert(data.message);
	form.reset();
});
