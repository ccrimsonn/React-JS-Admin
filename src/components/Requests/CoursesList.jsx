const url = 'http://www.empirecollege.net/Education/public/api/allCourses';
class CoursesList{
  // constructor(props){
  //   this.state = {
  //     courseData:[]
  //   };
  // }
  
  allCourseInfo(){
    return new Promise(function(resolve){
      fetch(url)
        .then(response => response.json())
        .then((data) => {
          resolve(data)
        }).catch((error) => {
        alert("Course List Request failed")
      });
    })
  }
  
  // CourseData(){
  //   var result = [];
  //   fetch(url)
  //     .then(response => response.json())
  //     .then((data) => {
  //       data.courList.map((list)=> {
  //         result.push(list);
  //       })
  //     })
  //   return result;
  // }
  
}

export default CoursesList;