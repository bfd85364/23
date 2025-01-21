//Name: 
//Date:  
//Assignment: 

//1
function Exercise1() {
	let  textArray = [1,2,3,4,5,6,7,8,9,10];
	for (let x in textArray){
	print(textArray[x]);
}
}

//2
function Exercise2() {
	let veggies = ["potato", "tomato", "carrot", "onion", "mushroom"];
	print(veggies.sort());
	print(veggies.reverse());
}

//3
function Exercise3() {
	let students = [
		"Azizbek Makhamatov",
		"Farkhod Mirzabekov",
		"Mirodil Yusupjonov (Michael)",
		"Azizbek Abror Ugli Bobokulov",
		"Asilbek Rakhmatov",
		"Eojin Park",
		"Youngwoong Yoon",
		"Durga Dangol",
		"USMONKUL KHAKIMOV",
		"Javohirbek Mukhtorjonov (Junior)",
		"YULDUZ SHAYMARDANOVA",
		"Dulce Miriam Aurora Mojica Garcia",
		"Vladislava Nezavitina (Vlada)",
		"JIE LI",
		"Kim Daeun",
		"Woo Young Jung",
		"Hwang Eunjee",
		"Heejin Lee",
		"Thi Trang Dinh (Trang)"
	];

	print(students.indexOf("JIE LI"));
	
	//students.replace("Azizbek Makhamatov","Azizbek");
	
	if(students.indexOf("Azizbek Abror Ugli Bobokulov") == 3){
	students.splice(3,1,"Azizbek");
	print(students);
	}
	
	if(students.slice(10,12) == "YULDUZ SHAYMARDANOVA",
		"Dulce Miriam Aurora Mojica Garcia"){
			students = students.slice(10,12);
			print(students.sort());
			print(students);
}
}

//4
function Exercise4() {
	let finalProject = [
	["path finder robot", "DatabaseAcess", "SnakeProject"], 
	["Database extraction", "DatabaseAcess", "ArrayList"],
	["shortpath algorithm nevigation","Cyber_security","bit-camp"]
	]
	
	let students = [
	["junhyung_kim", "jeon_jaeheoyn"],
	["merusalt", "jihoon_kim", "Ishmael"],
	["heyongi-han", "Yi-sang", "angela"]
	]
	
	for(x in finalProject){ 
		let topic = finalProject[x]; 
		for (y in topic){ 
			print("Topic: " + topic[y] + "\nTeam: " + students[y]); 
		} 
	} 
}

//5
function Exercise5() {
			let num = [[7,"+"],[13,"+"],[15,"+"],[18,"+"],[56,"+"],[71,"+"],[91,"+"],[100,"+"],["=",103]
			]
				
				for(let i=0; i<num.length; i++){
						if(i%2==0){
						   print(num);
						}
				}
	}

  

//6
function Exercise6() {
	let teams = [
		[
			"Azizbek Makhamatov",  
			"Mirodil Yusupjonov (Michael)",
			"Asilbek Rakhmatov"
		],
		[
			"Youngwoong Yoon",
			"USMONKUL KHAKIMOV",
			"YULDUZ SHAYMARDANOVA"
		],
		[
			"Vladislava Nezavitina (Vlada)",
			"Daeun Kim",
			"Eunjee Hwang"
		]	
	];
	print(teams.sort());
	print(teams);
	
	for(let x in teams){
		for(let y in teams[x]){
			if(x == 6){
				print(teams[x]); 
			}				
		}
	}
}

//7
function Exercise7() {
	
 
}

//8
function Exercise8() {
	
  
}

//9
function Exercise9() {
	
  
}

//10
function Exercise10() {
	let numbers = [56, 67, 23, 5, 10, 99];
  
}

//11
function Exercise11() {
	let numbers = [
		[56, 67, 23, 5, 10, 99],
		[84, 4, 89, 51, 105, 9],
		[124, 15, 10, 75, 90, 39]
	]
  
}

//12
function Exercise12() {
  
  
}


//Clear working space
function clearAll() {
  const element = document.getElementById("workingSpace_id");
  element.textContent = " ";
}
