// function fetchUser(fun) {
//   console.log("Fetched user data");
//   fun({ id: 1, name: "Raunak Mishra" });
// }

// function fetchPosts(user, fun) {
//   console.log(`Fetched posts for user: ${user.name}`);
//   fun(["Post1", "Post2", "Post3"]);
// }

// function fetchComments(posts, fun) {
//   console.log(`Fetched comments for posts: ${posts}`);
//   fun(["Comment1", "Comment2"]);
// }

// // Callback Hell Example
// fetchUser((user) => {
//   fetchPosts(user, (posts) => {
//     fetchComments(posts, (comments) => {
//       console.log("Comments:", comments);
//     });
//   });
// });

// // fixing Callback hell
// function fetchUser1() {
//   const promise = new Promise((resolve, reject) => {
//     resolve({ name: "Raunak", Age: 18 });
//   });
//   return promise;
// }

// function fetchPost1(user) {
//   console.log(user);
//   const promise = new Promise((resolve, reject) => {
//     resolve(["Post1", "Post2"]);
//   });
//   return promise;
// }

// function fetchComment1(post) {
//   console.log(post);
//   const promise = new Promise((resolve, reject) => {
//     resolve(["comment1", "comment2"]);
//   });
//   return promise;
// }

// fetchUser1()
//   .then((user) => fetchPost1(user))
//   .then((post) => fetchComment1(post))
//   .then((res) => console.log(res));

// async function func() {
//   const user = await fetchUser1();
//   const post = await fetchPost1(user);
//   const comment = await fetchComment1(post);
//   console.log(comment);
// }
// func();

// // OOPS inheritance
// class Age {
//   constructor(x) {
//     this.x = x;
//   }
//   getX() {
//     return this.x;
//   }
// }

// // const obj = new Age(20);
// // console.log(obj.getX());

// const obj2 = Object.create(Age.prototype);
// obj2.type = "hii";
// obj2.x = 30;
// console.log(obj2);
// console.log(obj2.getX());

// // Generator function
// function* generatorFunction() {
//   console.log("Step 1");
//   yield "First pause";
//   console.log("Step 2");
//   yield "Second pause";
//   console.log("Step 3");
// }

// const generator = generatorFunction();
// console.log(generator.next().value); // Output: "Step 1", "First pause"
// console.log(generator.next().value); // Output: "Step 2", "Second pause"
// console.log(generator.next().value); // Output: "Step 3", undefined

// Closure

function f() {
  var x = 0;
  return function () {
    x++;
    console.log(x);
  };
}
function f3() {
  var x = 0;
  return {
    inc: () => {
      x++;
      console.log(x);
    },
    dec: () => {
      x--;
      console.log(x);
    },
  };
}
const x = f();
x();
x();
x();

const y = f3();
y.inc();
y.inc();
y.dec();
