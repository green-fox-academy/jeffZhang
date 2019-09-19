class Teacher {
  teach(student) {
    student.learn()
  }
  answer() {
    console.log('the teacher is answering a question')
  }
}
module.exports = Teacher
