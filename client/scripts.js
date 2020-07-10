const students = []

/**
 * Getting a random integer between two values, inclusive (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
  function getRandomIntInclusive (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min // The maximum is inclusive and the minimum is inclusive
  }

document.querySelector('form').addEventListener('submit', function () {
  event.preventDefault()

  const addedStudent = this.parentElement.querySelector('#name').value

  const existingStudent = students.find(
    (currentStudentInArray) => currentStudentInArray === addedStudent)

  if (addedStudent !== existingStudent) {
    students.push(addedStudent)
  }
  console.log(students)
})

document.querySelector('#button1').addEventListener('click', function () {
  event.preventDefault()

  console.log(students[getRandomIntInclusive(0, students.length - 1)])
}
)
