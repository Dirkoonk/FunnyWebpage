function showProjects(person) {
    var allProjects = document.querySelectorAll('.projects');
    allProjects.forEach(function(projects) {
        projects.style.display = 'none';
    });
    document.getElementById(person).style.display = 'flex';
}

function showDescription(project) {
    var allDescriptions = document.querySelectorAll('.project-description');
    allDescriptions.forEach(function(description) {
        description.style.display = 'none';
    });

    var selectedDescription = document.getElementById(project);
    selectedDescription.style.display = 'block';

    // Bild dynamisch hinzufügen, falls es noch nicht existiert
    if (!selectedDescription.querySelector("img")) {
        var img = document.createElement("img");
        img.src = "images/" + project + ".png"; // Bilder aus dem "images"-Ordner laden
        img.alt = "Bild von " + project;
        img.style.width = "100%";
        img.style.maxWidth = "400px";
        img.style.borderRadius = "8px";
        img.style.marginTop = "10px";
        selectedDescription.appendChild(img);
    }
}