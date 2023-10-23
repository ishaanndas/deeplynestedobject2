const obj1 = {
    name: "vedanta",
    age: 12,
    gender: "Male",
    m: 30,
    h: 2,
    d: 4,
    title: "Hi",
    desc: "lorem ipsum lorem ipsum",
};

const obj2 = {
    name: "vedanta",
    age: 12,
    gender: "feamel",
    m: 1,
    h: 2,
    d: 4,
    title: "Hi",
    desc: "lorem ipsum lorem ipsum",
};

const objs = [obj1, obj2];
const randomObj = objs[Math.floor(Math.random() * objs.length)];

document.getElementById("name").textContent = randomObj.name;
document.getElementById("age").textContent = randomObj.age.toString();
document.getElementById("gender").textContent = randomObj.gender;

document.getElementById("m").style.width = `${(randomObj.m / 100) * 232}px`;
document.getElementById("h").style.width = `${(randomObj.h / 100) * 232}px`;
document.getElementById("d").style.width = `${(randomObj.d / 100) * 232}px`;

document.getElementById("title").textContent = randomObj.title;
document.getElementById("desc").textContent = randomObj.desc
