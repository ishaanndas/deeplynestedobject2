var obj1 = {
    name: "vedanta",
    age: 12,
    gender: "Male",
    m: 30,
    h: 2,
    d: 4,
    title: "Hi",
    desc: "lorem ipsum lorem ipsum",
};
var obj2 = {
    name: "vedanta",
    age: 12,
    gender: "feamel",
    m: 1,
    h: 2,
    d: 4,
    title: "Hi",
    desc: "lorem ipsum lorem ipsum",
};
var objs = [obj1, obj2];
var randomObj = objs[Math.floor(Math.random() * objs.length)];
document.getElementById("name").textContent = randomObj.name;
document.getElementById("age").textContent = randomObj.age.toString();
document.getElementById("gender").textContent = randomObj.gender;
document.getElementById("m").style.width = "".concat((randomObj.m / 100) * 232, "px");
document.getElementById("h").style.width = "".concat((randomObj.h / 100) * 232, "px");
document.getElementById("d").style.width = "".concat((randomObj.d / 100) * 232, "px");
document.getElementById("title").textContent = randomObj.title;
document.getElementById("desc").textContent = randomObj.desc;
