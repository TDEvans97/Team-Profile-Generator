const generateHTML = (teamMembers) => {

    // Create an empty array for dynamic HTML elements to be pushed into.
    const htmlEl = [];
    // Create functions for each type of employee that returns HTML data into htmlEl.
    const generateManager = manager => {
        let managerEl = ` 
        <div class="card">
            <div class="card-header">
           ${manager.name} <br/>
           <i class="fas fa-mug-hot"></i>Manager</div>
           <div class = "list-container">
                <ul class="list">
                    <li class="list-item">Employee ID: ${manager.id}</li>
                    <li class="list-item">Email: <span class="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li class="list-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
        `;
        htmlEl.push(managerEl);
    };

    const generateEngineer = engineer => {
        let engineerEl = ` 
        <div class="card">
            <div class="card-header">
           ${engineer.name} <br/>
           <i class="fas fa-glasses"></i>Engineer</div>
            <div class = "list-container">
                <ul class="list">
                    <li class="list-item">Employee ID: ${engineer.id}</li>
                    <li class="list-item">Email: <span class="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                    <li class="list-item">Github: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
        `;
        htmlEl.push(engineerEl);
    };

    const generateIntern = intern => {
        let internEl = ` 
        <div class="card">
            <div class="card-header">
           ${intern.name} <br/>
           <i class="fas fa-user-graduate"></i>Intern</div>
           <div class = "list-container">
                <ul class="list">
                    <li class="list-item">Employee ID: ${intern.id}</li>
                    <li class="list-item">Email: <span class="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                    <li class="list-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
        `;
        htmlEl.push(internEl);
    };

    // Loop over the teamMembers array and check each object's subclass of Employee with getRole().
    // For each truthy, run the respective function and push its HTML data into htmlEl for rendering.
    for (let i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].getRole() === "Manager") {
            generateManager(teamMembers[i]);
        }
        if (teamMembers[i].getRole() === "Engineer") {
            generateEngineer(teamMembers[i]);
        }
        if (teamMembers[i].getRole() === "Intern") {
            generateIntern(teamMembers[i]);
        }
        else {
            console.error("The team member does not have valid role.");
        }
    };

    // Join the HTML data into one big block.
    return htmlEl.join('');
};

module.exports = htmlEl => {
    // HTML Template that will house all of htmlEl in <main>.
    // The HTML needs Bootstrap, Font Awesome and CSS Links, but not JS or jQuery since it is not used on the deployed website. 
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" 
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team-Profile-Generator</title>
</head>
<body>
    <header>
    <h1> My Team: </h1>
    </header>
    <main> ${generateHTML(htmlEl)} </main>
     
</body>
</html>
    `;
};