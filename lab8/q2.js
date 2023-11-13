class Student {
    constructor(studentId) {
      this.studentId = studentId;
      this.answers = [];
    }
  
    addAnswer(question) {
      this.answers.push(question);
    }
  }
  
  class Question {
    constructor(qid, answer) {
      this.qid = qid;
      this.answer = answer;
    }
  
    checkAnswer(studentAnswer) {
      return this.answer === studentAnswer;
    }
  }
  
  class Quiz {
    constructor(questions, students) {
      this.questions = new Map(questions.map(q => [q.qid, q.answer]));
      this.students = students;
    }
  
    scoreStudentBySid(sid) {
      const student = this.students.find(s => s.studentId === sid);
      if (!student) {
        console.log(`Student with ID ${sid} not found.`);
        return 0;
      }
  
      let score = 0;
      student.answers.forEach(studentAnswer => {
        const correctAnswer = this.questions.get(studentAnswer.qid);
        if (correctAnswer && studentAnswer.checkAnswer(correctAnswer)) {
          score++;
        }
      });
  
      return score;
    }
  
    getAverageScore() {
      if (this.students.length === 0) {
        console.log("No students in the quiz.");
        return 0;
      }
  
      let totalScore = 0;
      this.students.forEach(student => {
        totalScore += this.scoreStudentBySid(student.studentId);
      });
  
      return totalScore / this.students.length;
    }
  }
  
  // Example usage
  const student1 = new Student(10);
  student1.addAnswer(new Question(2, 'a'));
  student1.addAnswer(new Question(3, 'b'));
  student1.addAnswer(new Question(1, 'b'));
  
  const student2 = new Student(11);
  student2.addAnswer(new Question(3, 'b'));
  student2.addAnswer(new Question(2, 'a'));
  student2.addAnswer(new Question(1, 'd'));
  
  const students = [student1, student2];
  const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
  const quiz = new Quiz(questions, students);
  
  let scoreforStudent10 = quiz.scoreStudentBySid(10);
  console.log(scoreforStudent10); // Expected Result: 3
  
  let scoreforStudent11 = quiz.scoreStudentBySid(11);
  console.log(scoreforStudent11); // Expected Result: 2
  
  let average = quiz.getAverageScore();
  console.log(average); // Expected Result: 2.5
  