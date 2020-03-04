let Apple = function () {
    this.weight = 10;

    this.decrease = function () {
        this.weight -= 1;
    };
    this.getWeight = function () {
        return this.weight;
    }
};

let Human = function (name, weight) {
    this.name = name;
    this.weight = weight;
    this.eat = function (apple) {
        if (apple.weight > 0) {
            this.weight++;
            apple.decrease();
        } else {
            alert("Hết rồi ăn lắm thế ???");
        }
    };
    this.setGender = function (gender) {
        this.gender = gender;
    };
    this.talk = function () {
        document.getElementById("talk").innerHTML += "Tôi tên là: " + this.name
            + " nặng " + this.weight + " kg. Quả táo còn " + apple.weight + " miếng." + "<br/>";
    }
};

let apple = new Apple();
let adam = new Human("Adam", "70");
let eva = new Human("Eva", "100");
adam.setGender("Male");
eva.setGender("Female");

function adameat() {
    adam.eat(apple);
    adam.talk();
}
function evaeat() {
    eva.eat(apple);
    eva.talk();
}




