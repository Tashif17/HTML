let guest_list : string [] = [`ali`,`farhan`,`raza`,`ayesha`];
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir/Madam ` + guest_list[i] + `,\nwe invited you on dinner tomorrow.\n\nThank You`)
}
let not_present : string = `farhan`;
let new_guest : string = `Hania Amir`;
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir/Madam ` + guest_list[i] + `,\nwe invited you on dinner tomorrow.\n\nThank You`)
}
console.log(`Mr. ${not_present} will not coming tomorrow dinner `);