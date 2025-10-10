const streams = ["Shift-1", "Shift-2"];
const examTypes = ["Midterm", "Model", "Semester"];
const marksRange = [50, 100];
const classes = ["1st Year", "2nd Year", "3rd Year"];

const departmentsByStream = {
    "Shift-1": ["Mathematics", "Physics", "Chemistry"],
    "Shift-2": ["Information Technology", "Computer Science"]
};

const subjectsByDepartment = {
    "Mathematics": ["Calculus", "Algebra", "Statistics"],
    "Physics": ["Quantum Mechanics", "Thermodynamics", "Electromagnetism"],
    "Chemistry": ["Organic Chemistry", "Physical Chemistry", "Analytical Chemistry"],
    "Information Technology": ["Design and Analysis of Algorithms", "Database Management", "Networking"],
    "Computer Science": ["Data Structures", "Machine Learning", "Operating Systems"]
};

let selectedStream = null;
let selectedDepartment = null;
let selectedExamType = null;
let selectedMarks = null;

function toggleOptions(containerId) {
    const container = document.getElementById(containerId);
    container.style.display = container.style.display === "block" ? "none" : "block";
    if (container.innerHTML.trim() === "") {
        if (containerId === "stream-options") showOptions(containerId, streams, "stream");
        else if (containerId === "exam-options") showOptions(containerId, examTypes, "examType");
        else if (containerId === "marks-options") showOptions(containerId, marksRange, "marks");
        else if (containerId === "year-options") showOptions(containerId, classes);
    }
}

function showOptions(containerId, options, type = null) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    options.forEach(option => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = containerId;
        radio.value = option;
        radio.onclick = () => {
            if (type === "stream") {
                selectedStream = option;
                selectedDepartment = null;
                document.getElementById("department-options").innerHTML = "";
                document.getElementById("subject-options").innerHTML = "";
                showOptions("department-options", departmentsByStream[selectedStream], "department");
            } else if (type === "department") {
                selectedDepartment = option;
                document.getElementById("subject-options").innerHTML = "";
                showOptions("subject-options", subjectsByDepartment[selectedDepartment]);
            } else if (type === "examType") {
                selectedExamType = option;
            } else if (type === "marks") {
                selectedMarks = option;
            }
        };
        label.appendChild(radio);
        label.appendChild(document.createTextNode(" " + option));
        container.appendChild(label);
    });
    container.style.display = "block";
}

function generateQuestionPaper() {
    if (!selectedStream || !selectedDepartment || !selectedExamType || !selectedMarks) {
        alert("Please select all options before generating the question paper.");
        return; 
    }
     if (selectedExamType === "Midterm" && selectedMarks == 50) {
        window.location.href = "dashboard50.html";
    } else if ((selectedExamType === "Model" && selectedMarks == 100) || 
               (selectedExamType === "Semester" && selectedMarks == 100)) {
        window.location.href = "dashboard100.html";
    } else {
        alert("Invalid selection!\n- Midterm = 50 marks\n- Model = 100 marks\n- Semester = 100 marks");
    }
}

