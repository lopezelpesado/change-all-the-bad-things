// constants

const form = document.querySelector("form");
let dobGood = false;
let contactChoiceGood = false;
let telGood = false;

// event listeners

form.addEventListener("submit", formValidation);

// functions

// validate form

function formValidation(e) {
	e.preventDefault();

	console.log("start", dobGood, contactChoiceGood, telGood);

	validateDOB(form.elements.date.value);

	console.log("dob", dobGood, contactChoiceGood, telGood);

	checkContacts();

	console.log("contacts", dobGood, contactChoiceGood, telGood);

	checkTel();

	console.log("tel", dobGood, contactChoiceGood, telGood);

	if (dobGood && contactChoiceGood && telGood) {
		form.reset();
		alert("Thank you! We've got your details and we'll be in touch soon!");
	}

	console("end", dobGood, contactChoiceGood, telGood);
}

// validate date of birth

function validateDOB(dob) {
	if (dob.slice(0, 4) === new Date().getFullYear().toString()) {
		alert("Are you sure you were born this year?");
	} else {
		dobGood = true;
	}
}

// check if a contact preference has been ticked

function checkContacts() {
	if (form.elements.contactEmail.checked || form.elements.contactTel.checked) {
		if (form.elements.contactTel.checked && form.elements.tel.value === "") {
			alert(
				"Please enter a phone number if you want us to contact you by phone"
			);
		} else {
			contactChoiceGood = true;
		}
	} else {
		alert("Please choose how you'd like to be contacted");
	}
}

// check if phone is valid

function checkTel() {
	if (!form.elements.contactTel.checked && form.elements.tel.value === "") {
		telGood = true;
	} else {
		if (form.elements.tel.value[0] !== "0") {
			alert("Please enter a valid UK number starting with 0");
		} else if (
			form.elements.tel.value.slice(1).length !== 10 &&
			form.elements.tel.value.slice(1).length !== 9
		) {
			alert("Please enter a valid UK number starting with 0");
		} else {
			telGood = true;
		}
	}
}
