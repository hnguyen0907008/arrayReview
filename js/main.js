(()=>{
	console.log('fired!');

	//add content into p (container - index)
	let textContainer = document.querySelector(".text-container");
		textButton = document.querySelector("button");
		//querySelector-ALL then we can use forEach
		bioButtons = document.querySelectorAll(".bio-buttons button") //buttons inside the div

	const dataContainer = ['This ', 'is ', 'some ', 'data! '];
	const dataCon2 = ['This ', 'is ', 'another ', 'array ', 'example! '];
	const buttonTextCon = ['This ', 'is ', 'a ', 'join ', 'method ', 'result '];
	const BillandTed = ['I am Bill S Preston, Esq.', 'And I am Ted Theodore Logan. Party on, dude!'];

	function joinArray() {
		textContainer.textContent = buttonTextCon.join(" ");
	}

	//output data text inside container
	dataContainer.forEach((word, index) => {
		textContainer.textContent += word;
		console.log(index);
	});

	function showBioInfo(){
		arrayIndex = this.dataset.arrayref;
		textContainer.textContent = BillandTed[arrayIndex];
	}

	//2nd way to output data
	for (let i=0; i <dataCon2.length; i++) {
		console.log(i, dataCon2[i]);
	//run the array data into the p tag
		textContainer.textContent += dataCon2[i];
	}

	// ... = 'I just added this with JS' => use += to append array
	bioButtons.forEach (button => button.addEventListener("click", showBioInfo));
	textContainer.textContent += 'I just added this with JS';
	textButton.addEventListener("click", joinArray);
})();