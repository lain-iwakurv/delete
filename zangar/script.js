function openProject(projectname) {
    let projectUrl = ""
    switch (projectname) {
        case "ToDo":
            projectUrl = "ToDo/TODo.html";
            break;

        case "Calculator":
            projectUrl = "CalculatoreProductiv/Calcu.html";
            break;

        case "Pomodoro":
            projectUrl = "Pomododoro/Pomodoro.html";
            break;

    }


    window.open(projectUrl, '_blank');
}


function updateDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString('ru-Ru', {
        day: '2-digit', month: '2-digit', year:  'numeric'
    });

    const time = now.toLocaleTimeString('ru-Ru');

    document.getElementById('date-time').textContent = `${date} ${time}`;
}

// Обновление времени каждую секунду
updateDateTime();
setInterval(updateDateTime, 1000);


