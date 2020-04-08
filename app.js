console.log("Connected");

// const Riya = {
//     name: "Riya",
//     dob: 2003,
//     graduated: false,
//     age: function() {
//         console.log(this);
//         return 2020 - this.dob;
//     }
// };

// console.log(this);
// () => {};  ///Be careful of this...returns to something globally. 

// const homer = {
//     name: "Homer",
//     age: 32,
//     family:{
//         wife: {
//             name: "Marge",
//             age: 32, 
//         },
//         son: {
//             name: "Bart",
//             age: 10,
//         }
//     },
//     pets: ["cat", "dog"],

// };


// homer.family.daughrter = {
//     name: "Lisa",
//     age: 8,
// };

///Destructuring

const Riya = {
    name: "Riya",
    dob: 2003,
    graduated: false,
    age: function() {
        console.log(this);
        return 2020 - this.dob;
    }
};

const { name, age } = Riya;

// const calc = {
//     add: function() {
//         return x + yield;
//     }
// };
// const { add, divide, cosine } = calc; 

// const { name, poster } = movie; 


// const Angel = Riya;   /// this is not a copy, it's a "reference to"
// Angel.name = "Angel"; 
// const Angel = {};
// Angel.dob = Riya.dob;




const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];
  
  //Challenge Questions
  //1) Filter all presidents, leaving only the Democratic ones
  
  //2)Filter all presidents to leave only one term Republican presidents HINT use If statement
  
  //3) return only the last three presidents
  
  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
  
  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"


  const democrats = presidents.filter(presidents => presidents.party === "D");


  const republicansOneTerm = presidents.filter(function(presidents){
      if (presidents.terms === 1 && presidents.party === "R"){
          return true;
      }
  }
  );

  const lastThree = presidents.slice(0,3);

  const demsTwoTerms = democrats.filter(democrats => democrats.terms === 2);
  

