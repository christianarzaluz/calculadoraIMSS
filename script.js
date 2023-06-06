document.getElementById('teaching-experience-checkbox').addEventListener('change', function() {
    var select = document.getElementById('teaching-experience-years');
    select.disabled = !this.checked;
    select.selectedIndex = 0;
  });
  
  document.getElementById('publications-checkbox').addEventListener('change', function() {
    var select = document.getElementById('publications-count');
    select.disabled = !this.checked;
    select.selectedIndex = 0;
  });
  
  document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var careerAverage = parseFloat(document.getElementById('career-average').value);
    var enarmScore = parseFloat(document.getElementById('enarm-score').value);
    var teachingExperienceCheckbox = document.getElementById('teaching-experience-checkbox');
    var teachingExperienceYears = parseInt(document.getElementById('teaching-experience-years').value);
    var publicationsCheckbox = document.getElementById('publications-checkbox');
    var publicationsCount = parseInt(document.getElementById('publications-count').value);
    var childImss = document.getElementById('child-imss').checked;
    var employeeImss = document.getElementById('employee-imss').checked;
    var internshipImss = document.getElementById('internship-imss').checked;
    var socialServiceImss = document.getElementById('social-service-imss').checked;
  
    var totalScore = (careerAverage + enarmScore) / 2;
  
    if (teachingExperienceCheckbox.checked) {
      totalScore += Math.min(teachingExperienceYears, 4);
    }
  
    if (publicationsCheckbox.checked) {
      totalScore += Math.min(publicationsCount, 4);
    }
  
    if (childImss && employeeImss) {
      totalScore += 1;
    } else if (childImss || employeeImss) {
      totalScore += 0.75;
    }
  
    if (internshipImss) {
      totalScore += 0.25;
    }
  
    if (socialServiceImss) {
      totalScore += 0.75;
    }
  
    document.getElementById('result').textContent = "Puntaje IMSS: " + totalScore.toFixed(2);
  });
  
  