document.addEventListener('DOMContentLoaded', function() {
	let listItems = [...document.querySelectorAll('li')];
	let xBtns = [...document.querySelectorAll('.removeBtn')];

	const button = document.querySelector("button");

	//  revealRemoveBtn() and removing btn for dynamically created elements

	button.addEventListener("click", function() {
		if( document.querySelector("input").value === "") {
			alert('You can not add empty task !');
		} else {
			document.querySelector('ul').appendChild(newLiElement());
			document.querySelector("input").value = "";
		}
	});

	// removing btn for existing elements

	function removeBtn(arr) {
		for( let i = 0; i < arr.length; i++ ) {
			arr[i].addEventListener('click', function() {
				this.parentNode.remove();
			});
		}
	}

	removeBtn(xBtns);

	function newLiElement() {
		// creating complete DOM li structure element 
		let newLi = document.createElement("li");
		let newSpan = document.createElement("span");
		newSpan.classList.add("removeBtn");
		newLi.appendChild(newSpan);
		let newI = document.createElement("i");
		newI.classList.add("icon-cancel-circled");
		newSpan.appendChild(newI);
		let newP = document.createElement("p");
		newLi.appendChild(newP);
		newLi.lastElementChild.innerText = document.querySelector("input").value;

		// remove function
		newSpan.addEventListener("click", function() {
			this.parentNode.remove();
		});
		return newLi;
	}

	const exampleElement = `<div>
		<span>asdasd</span>
	</div>`;
	console.log(exampleElement);





})