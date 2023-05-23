class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = [];
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    present() {
        if (this.attendance.length < 25) {
            this.attendance.push(true);
        } else {
            console.log("Масив відвідуваності повністю заповнений.");
        }
    }

    absent() {
        if (this.attendance.length < 25) {
            this.attendance.push(false);
        } else {
            console.log("Масив відвідуваності повністю заповнений.");
        }
    }

    calculateAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade);
        return sum / this.grades.length;
    }

    calculateAttendancePercentage() {
        if (this.attendance.length === 0) {
            return 0;
        }
        const totalSessions = this.attendance.length;
        const totalPresent = this.attendance.filter((status) => status === true).length;
        return totalPresent / totalSessions;
    }

    summary() {
        const averageGrade = this.calculateAverageGrade();
        const attendancePercentage = this.calculateAttendancePercentage();

        if (averageGrade > 90 && attendancePercentage > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendancePercentage > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Василь", "Симоненко", 2000);
student1.addGrade(95);
student1.addGrade(87);
student1.addGrade(92);
student1.present();
student1.present();
student1.absent();
console.log("Вік: " + student1.getAge());
console.log("Середній бал: " + student1.calculateAverageGrade());
console.log("Відвідуваність: " + student1.calculateAttendancePercentage());
console.log("Резюме: " + student1.summary());

const student2 = new Student("Стас", "Островський", 2001);
student2.addGrade(88);
student2.addGrade(92);
student2.absent();
student2.present();
student2.present();
student2.present();
console.log("Вік: " + student2.getAge());
console.log("Середній бал: " + student2.calculateAverageGrade());
console.log("Відвідуваність: " + student2.calculateAttendancePercentage());
console.log("Резюме: " + student2.summary());