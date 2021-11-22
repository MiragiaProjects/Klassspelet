/*
Betygskriterier

Godkänt

Följer strukturen och upplägget ovan
Den ursprungliga array:en förblir oförändrad
Visar resultat med antal rätt samt totalt antal frågor (t.ex. 16/20 rätt om man fick 16 rätt på 20 frågor)

Väl Godkänt

Använda Array Filter & Array Map

Slumpa ordningen som bilderna kommer i

Visa vilka man gissade fel på och vilket som var rätt svar. Antingen genom att i listan visa vad man gissade på och vad som var rätt svar, eller i en ny lista under resultatet visa foto + namn på de man gissade fel på

Håll reda på senaste resultat och vid varje ny gissning visa om man förbättrade eller försämrade sig denna gången
*/

const rightAnswerEl = document.querySelector("#rightAnswer");
const wrongAnswerEl = document.querySelector(".wrongAnswer");
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

  shuffleArray(students);
  
  console.log(students);

  

const renderStudents = () => {

	students.forEach((student) => {
		const tempArray = [];

		//tempArray.push(student.name);

		let a = student.name;
		let b = students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name'];
		let c = students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name'];
		let d = students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name'];

		
			
		
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

		tempArray.push(a , b , c , d);

		console.log(tempArray);

		shuffleArray(tempArray);

		console.log(tempArray);

			//testArray.push(students[Math.floor(Math.random() * (students.length - 0) ) + 0]['name']);
			//console.log(a + " " + b + " " + c + " " + d);
			
			
	
	
		cardHolderEl.innerHTML += `
		<div class="card mb-3">
            <span id="imgSpan">
                <img src="${student.image}" class="card-img-top" alt="a classmate">
            </span>
                <div class="card-body">
                    <h5 class="card-title">Who dis?</h5>
                    <button type="button" class="btn btn-primary">${tempArray[0]}</button>
                    <button type="button" class="btn btn-primary">${tempArray[1]}</button>
                    <button type="button" class="btn btn-primary">${tempArray[2]}</button>
                    <button type="button" class="btn btn-primary">${tempArray[3]}</button>
            </div>
          </div>
		  `
	}
	)

};

renderStudents();



  
  
