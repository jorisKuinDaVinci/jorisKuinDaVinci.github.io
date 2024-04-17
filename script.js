// Hier kan eventuele JavaScript functionaliteit worden toegevoegd
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const submitButton = form.querySelector('button[type="submit"]');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Voorkom standaardformulierverzending
        form.dispatchEvent(new Event('submit')); // Trigger het submit event van het formulier
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Voorkom standaardformulierverzending

        // Verkrijg de gegevens van het formulier
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Voorbeeld: Toon de ingevoerde gegevens in de console
        console.log('Naam:', name);
        console.log('E-mail:', email);
        console.log('Bericht:', message);

        // Hier kunt u de logica toevoegen om het formulier te verwerken, zoals het verzenden van de gegevens naar een server met behulp van AJAX
        // Voor nu simuleren we gewoon een succesvolle verzending door een bevestigingsbericht weer te geven
        alert('Bedankt voor uw bericht! We nemen spoedig contact met u op.');
        form.reset(); // Formulier resetten na succesvolle verzending
    });
})
