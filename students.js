

const cardHolderEl = document.querySelector("#cardHolder");

const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];

const missing_students = [
	{
		"name": "Andjela Saponjic",
		"image": null,
	},
	{
		"name": "Cazpian Levén",
		"image": null,
	},
	{
		"name": "Frida Lam",
		"image": null,
	},
	{
		"name": "Maxim Khnykin",
		"image": null,
	},
	{
		"name": "Philip Le",
		"image": null,
	},
];


const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  const temp = array[i];
	  array[i] = array[j];
	  array[j] = temp;
	}
  };
 // Suffling the student array
  shuffleArray(students);
  
  //console.log(students);

  // Declared outside of loop so I can reach whats stored in a
  const aStudents = [];

let k = 0;
let score = 0;
// writing out students with card
const renderStudents = () => {

	//students.forEach((student) => {
		const tempArray = [];

		//tempArray.push(student.name);

		// the right answer gets saved in a
		let a = students[k]['name'];
		// the other 3 are the other names that are wrong
		let b = students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name'];
		let c = students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name'];
		let d = students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name'];

		
			
		//making sure that the same name will not appear again
		while (a == b || a == c || b == c || a == d || b == d || c == d) {
			if (a == b ) {
				b = students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name'];
			}
			if (c == a) {
				c = students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name'];
			}
			if (c == b) {
				c = students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name'];
			}
			if (d == a) {
				d = students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name'];
			}
			if (d == b) {
				d = students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name'];
			}
			if (d == c) {
				d = students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name'];
			}
			
		};
		// pushing in all the choises in an array
		tempArray.push(a , b , c , d);

		//console.log(tempArray);
		// shuffling the 4 students som taht they dont end up on the same button
		shuffleArray(tempArray);

		//console.log(tempArray);

			//testArray.push(students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name']);
			//console.log(a + " " + b + " " + c + " " + d);
			
			
	
		// Writing out the card with img and button with different names
		cardHolderEl.innerHTML += `
		<div class="col-md-6 col-lg-4">
			<div class="card mb-3 ">
            	<span id="imgSpan">
                	<img src="${students[k]['image']}" class="card-img-top" alt="a classmate">
            	</span>
                	<div class="card-body">
                    	<h5 class="card-title">Who dis?</h5>
						<div class="buttonHolder">
                    		<button type="button" class="btn btn-primary">${tempArray[0]}</button>
                    		<button type="button" class="btn btn-primary">${tempArray[1]}</button>
                    		<button type="button" class="btn btn-primary">${tempArray[2]}</button>
                    		<button type="button" class="btn btn-primary">${tempArray[3]}</button>
						</div>
            		</div>
        	</div>
		</div>
		  `	

		const buttonHolderEl = document.querySelectorAll('.buttonHolder');
		const buttons = document.querySelectorAll('.btn');

		buttonHolderEl.forEach(holder => {
	holder.addEventListener('click', e => {

	e.preventDefault;

	if (e.target.tagName == "BUTTON") {
		

		if (e.target.innerHTML == students[0 + k]['name']) {
		k++;
		score++;

		e.target.parentElement.querySelectorAll('button').forEach(buttonEl => {
			buttonEl.setAttribute('disabled',true);
		})
		
		renderStudents();
		
		// TODO
		// Make a removeEventListener to remove target element parent
		
		} else {

		k++

		e.target.parentElement.querySelectorAll('button').forEach(buttonEl => {
			buttonEl.setAttribute('disabled',true);
		})
		
		renderStudents();
		// TODO
		// Make a removeEventListener to remove target element parent


		}

	}
	
		
	
			//'button').setAttribute('disabled',true);

	console.log(e.target.parentElement);

	if (k == students.length) {
		alert("Du hade " + score + " rätt av " + k)
	}

	
 })
} )
	//}
	//)

};
 // Calls the function to print ou students on cards
renderStudents();

 
  
