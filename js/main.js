document.addEventListener('DOMContentLoaded', function() {
	let listItems = [...document.querySelectorAll('li')];
	let xBtns = [...document.querySelectorAll('.removeBtn')];
	let statusBtn = [...document.querySelectorAll('.status')];
	const button = document.querySelector("button");

	//  revealRemoveBtn() and removing btn for dynamically created elements

	button.addEventListener("click", function() {
		if( document.querySelector("input").value === "") {
			alert('You can not add empty task !');
		} else {
			document.querySelector('ul').appendChild(newLiElement());
			document.querySelector("input").value = "";
			document.querySelector("ul").style = "border: 5px solid #111";

		}
	});

	// removing btn for existing elements

	function removeBtn(arr) {
		for( let i = 0; i < arr.length; i++ ) {
			arr[i].addEventListener('click', function() {
				this.parentNode.remove();
				if(document.querySelectorAll("li").length === 0){
					document.querySelector("ul").style = "border: none";
				}
			});
		}
	}

	removeBtn(xBtns);

	// for(let i = 0; i < statusBtn.length; i++) {
	// 	statusBtn[i].addEventListener('change', function() {
	// 		console.log("status changed")
	// 	});
	// }
	

	function newLiElement() {
		// creating complete DOM li structure element 
		// span icon
		let newLi = document.createElement("li");
		let newSpan = document.createElement("span");
		newSpan.classList.add("removeBtn");
		newLi.appendChild(newSpan);
		// select
		let select = document.createElement("select");
		select.classList.add("status");
		let option1 = document.createElement("option");
		option1.classList.add("justAdded");
		option1.innerText = "just added";
		select.appendChild(option1);
		let option2 = document.createElement("option");
		option2.classList.add("inProgress");
		option2.innerText = "in progress";
		select.appendChild(option2);
		let option3 = document.createElement("option");
		option3.classList.add("finished");
		option3.innerText = "finished";

		select.appendChild(option3);
		newLi.appendChild(select);
		// p
		let newI = document.createElement("i");
		newI.classList.add("icon-cancel-circled");
		newSpan.appendChild(newI);
		let newP = document.createElement("p");
		newLi.appendChild(newP);
		newLi.lastElementChild.innerText = document.querySelector("input").value;

		// remove function
		newSpan.addEventListener("click", function() {
			this.parentNode.remove();
			if(document.querySelectorAll("li").length === 0){
				document.querySelector("ul").style = "border: none";
			}
		});
		return newLi;
	}

});