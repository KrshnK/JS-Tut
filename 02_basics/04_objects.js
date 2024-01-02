// const tinderUser = new Object()
const tinderUser = {}

 tinderUser.id= "123abc"
 tinderUser.name="Sam"
 tinderUser.isLoggedIn= false

// console.log(tinderUser)

const regularUser = {
    email: "Some@MS.com",
    fullname : {
        userFullname:{
            firstname:"krishna",
            lastname: "gond"
        }
    }
}

// console.log(regularUser.fullname.userFullname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj4 ={5:"e",6:"f"}

// const obj3 ={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3)

const users =[
    {
        id:1,
        email: "hagemaru@sa.com"
    },
    {
        id:1,
        email: "hagemaru@sa.com"
    },
    {
        id:1,
        email: "hagemaru@sa.com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course =  {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Hitehs",
//     "coursename": "JS in Hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]