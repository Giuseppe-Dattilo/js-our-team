console.log('JS OK');console.log('JS OK');

/*
Utilizzando i dati forniti, creare un array 
di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti 
informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le
informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina
gradevole (potete usare lo screen in allegato come spunto
*/



// Prendo l'elemento dal DOM
const teamCard = document.getElementById('team-card');

// Preparo l'array del team 
const team = [
    {name: 'Wayne Barnett', role: 'Founder & CEO', pic: 'wayne-barnett-founder-ceo.jpg'},
    {name: 'Angela Caroll', role: 'Chief Editor', pic: 'angela-caroll-chief-editor.jpg'},
    {name: 'Walter Gordon', role: 'Office Manager', pic: 'walter-gordon-office-manager.jpg'},
    {name: 'Angela Lopez', role: 'Social Media Manager', pic: 'angela-lopez-social-media-manager.jpg'},
    {name: 'Scott Estrada', role: 'Developer', pic: 'scott-estrada-developer.jpg'},
    {name: 'Barbara Ramos', role: 'Graphic Designer', pic: 'barbara-ramos-graphic-designer.jpg'}

]

// Per ogni membro del team
for(let i = 0; i < team.length; i++) {
    member = team[i];
    // console.log(member); 

    // stampo in pagina
    teamCard.innerHTML += 

        ` <div class="col"> 
                <div class="card">
                    <img src="img/${member.pic}" class="card-img-top" alt="${member.pic}">
                    <div class="card-body">
                        <h5 class="card-title text-center">${member.name}</h5>
                        <p class="card-text text-center">${member.role}</p>
                    </div>
                </div>
            </div> 
        </div> 
    `;
}


