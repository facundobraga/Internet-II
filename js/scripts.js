var users=[{
    name:"Facundo",
    lastname:"Braga",
    age: 20,
    city: "chapuy",
},
{
    name:"Manolo",
    lastname:"Braga",
    age: 20,
    city: "chapuy",
},
{
    name:"Gaston",
    lastname:"Braga",
    age: 20,
    city: "chapuy",
},
{
    name:"Valentina",
    lastname:"colareta",
    age: 30,
    city: "chapuy",
},
{
    name:"Imanol",
    lastname:"ocampo",
    age: 22,
    city: "Rosario",
}],

function nombres(valA,valB){
    return valA+", "+valB;
    controle.log (nombres("Valentina","colareta"))
}


function assamble (user){
    return user.lastname+", "+user.name+" vive en"+ user.city;
}

for (var i=o; i<users.lenght;i++){
    controle.log (assamble(users[i]))
}