function calculateGrade() {
    const english = parseFloat(document.getElementById('english').value);
    const hindi = parseFloat(document.getElementById('hindi').value);
    const maths = parseFloat(document.getElementById('maths').value);
    const science = parseFloat(document.getElementById('science').value);
    const computer = parseFloat(document.getElementById('computer').value);
  
    const totalMarks = english + hindi + maths + science + computer;
    const percentage = (totalMarks / 500) * 100;
  
    let grade, remarks;
  
    if (percentage >= 95) {
      grade = 'A+';
      remarks = 'Outstanding';
    } else if (percentage >= 90) {
      grade = 'A';
      remarks = 'Excellent';
    } else if (percentage >= 85) {
      grade = 'B+';
      remarks = 'Very Good, keep it up';
    } else if (percentage >= 80) {
      grade = 'B';
      remarks = 'Good, aim higher';
    } else if (percentage >= 75) {
      grade = 'C+';
      remarks = 'Satisfactory';
    } else if (percentage >= 70) {
      grade = 'C';
      remarks = 'Average, put in more effort';
    } else if (percentage >= 40) {
      grade = 'D';
      remarks = 'Pass, but needs improvement';
    } else {
      grade = 'F';
      remarks = 'Fail';
    }
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Total Marks: ${totalMarks}</p>
      <p>Percentage: ${percentage.toFixed(2)}%</p>
      <p>Grade: ${grade}</p>
      <p>Remarks: ${remarks}</p>
    `;
  }
  