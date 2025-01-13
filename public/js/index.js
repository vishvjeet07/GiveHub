document.addEventListener('DOMContentLoaded', () => {
  const streamFilter = document.getElementById('streamFilter');
  const semesterFilter = document.getElementById('semesterFilter');
  const categoryFilter = document.getElementById('categoryFilter');
  const assignmentsList = document.getElementById('assignmentsList');

  const filterAssignments = () => {
    const stream = streamFilter.value;
    const semester = semesterFilter.value;
    const category = categoryFilter.value;

    const assignments = assignmentsList.querySelectorAll('li');

    assignments.forEach(assignment => {
      const matchesStream = stream === 'all' || assignment.dataset.stream === stream;
      const matchesSemester = semester === 'all' || assignment.dataset.semester === semester;
      const matchesCategory = category === 'all' || assignment.dataset.category === category;

      if (matchesStream && matchesSemester && matchesCategory) {
        assignment.style.display = '';
      } else {
        assignment.style.display = 'none';
      }
    });
  };

  streamFilter.addEventListener('change', filterAssignments);
  semesterFilter.addEventListener('change', filterAssignments);
  categoryFilter.addEventListener('change', filterAssignments);
});
