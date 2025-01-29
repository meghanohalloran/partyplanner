async function fetchParties() {
  try {
    const response = await fetch(`parties.jsonhttps://fsa-crud-2aa9294fe819.herokuapp.com/api/2501-ftb-et-web-ft/events`);
    const parties = await response.json();
    populatePartyList(parties);
  } catch (error) {
    console.error(`Error fetching parties:`, error);
  }
}

function populatePartyList(parties) { }
const partyList = document.getElementById(`party-list`);
partyList.innerHTML = "";

parties.forEach(party => {
  const li = document.createElement('li');
  li.textContent = "${party.name} - ${party.date} - ${party.time} - ${party.location} - ${party.description}";
  partyList.appendChild(li);
});

async function addParty(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const location = document.getElementById('location').value;
  const description = document.getElementById('description').value;

  populatePartyList(parties);

  document.getElementById('party-form').reset();
}catch (error){
  console.error('Error adding party:', error);
}
// state.partyList = allParties;
// renderPartyInformation();

// } catch (error){
//   console.log(err);

//   const body = document.querySelector('body')
//   const p = document.createElement('p');
//   p.innerText = `Error fetching party`;

//   body.append(p);
// }


// const renderPartyInformation = () => {
//   const ol = document.querySelector('ol');

//   ol.innerHTML = ``;




//   state.partyList.forEach((singleParty) => {
//     const li = document.createElement('li');
//     li.innerText = singleParty.name;
//     ol.append(li);

//   })


// }

// getPartyInformation();




// //   console.log(1); 

// //   setTimeout(() =>{
// //     console.log(2)
// //   },1000 );

// //   console.log(3);


// // string.slice(indexStart );
// // string.slice(indexStart, indexEnd);

// //   {
// //    id: 1,
// //    name: "Event Name",
// //    description: "This is a description of the event.",
// //    date: "2021-09-30T00:00:00.000Z", // Date ISO string
// //    location: "123 Street"
// //    }
// // }


// // // Build your website according to this user story:

// // // A user enters the website and finds a list of the names, dates, times, locations, and descriptions 
// // // of all the parties that are happening.

// // // ***** NOT THIS UNLESS EXTRA TIME: There is also a form that allows the user to enter information about a new party
// // // that they want to schedule. After filling out the form and submitting it, the user observes their 
// // // party added to the list of parties.

// // // DO NOT USE  THIS...DO NOT EDIT OR CHANGE ANOTHER PERSONS CODE
// // //  DELETE /<resource>/<id>
// // //  Attempts to delete the object identified by the given id. Sends status code 204 if successful.

// // // Create a new repository named party-planner and push it to GitHub.

// // // Read the API documentationLinks to an external site.. You will be working with the /events endpoint.

// // // Plan your code based on the user story.

// // const body = document.querySelector(`body`);
// // const p = document.createElement(`p`);
// // p.innerText = `Error fetching party`;

// // body.append(p);