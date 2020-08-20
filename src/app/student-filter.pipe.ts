import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {

  transform(students: any[], filter: any): any {
    let filteredStudents = [];
    switch (filter.criteria) {
      case 'all' :
        filteredStudents = [...students];
        break;
      case 'id' :
        filteredStudents = [...students].filter(st => st.id > 0 && st.id < 7);
        break;
      case 'age' :
        filteredStudents = [...students].filter(st => st.age > 30);
        break;
      case 'grapefruit':
        filteredStudents = [];
        break;
      case 'average' :
        filteredStudents = [...students].filter(st => st.avg_grade > 90);
        break;
      case 'phone' :
        filteredStudents = [...students].filter(st => st.phone.substr(-1) === '4');
        break;
      case 'name' :
        filteredStudents = [...students].filter(st => st.name.charAt(0).toLowerCase() === 'b');
        break;
      default:
        filteredStudents = [...students];

    }
    return filteredStudents;
  }

}
