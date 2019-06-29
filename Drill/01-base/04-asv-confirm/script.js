/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function questions() {
    let age = prompt(`Quel est votre âge?`);
    let gender = prompt(`Êtes-vous un homme ou une femme?`);
    let city = prompt(`quelle est votre ville?`);

    let infoConfirm = confirm('Ces infos (' + age + ' ans, ' + gender + ', ' + 'habite à ' + city + ') sont-elles correctes ?');
    if (infoConfirm) {
        alert('Vous avez ' + age + ' ans, vous êtes un(e) ' + gender + ', et vous habitez à ' + city);
    } 
    else {
        questions();
    }
}
questions();