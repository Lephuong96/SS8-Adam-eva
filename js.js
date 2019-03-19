function Apple() {
    let weight =10;
    this.getWeight = function () {
        return weight;
    };
    this.setWeight = function (weightApple) {
        weight = weightApple;
    };
    this.isEmpty = function () {
        return !(weight>0);
    };
    this.decrease = function () {
        if(weight>0){
            return weight-=1;
        }
    };
}
function Human(yourname,gender,yourweight){
    let name = yourname;
    this.gender = gender;
    let weight = yourweight;
    this.isMale = function () {
        return this.gender;
    };
    this.setGender = function (boolean) {
        return this.gender = boolean;
    };
    this.checkApple = function (Apple) {
        return !Apple.isEmpty();
    };
    this.eat = function (Apple) {
        if(this.checkApple(Apple)){
            weight++;
            Apple.decrease();
        }
    };
    this.say = function (String) {
        alert(String);
    };
    this.getName = function () {
        return name;
    };
    this.setName = function (String) {
        this.name = String ;
    };
    this.getWeight = function () {
        return weight;
    };
    this.setWeight = function (yourweight) {
        weight = yourweight;
    };
}
function check(){
    alert(adam.getName() + '  : '+ adam.getWeight() + ' Dv ' +' Trước khi ăn táo ');
    alert(eva.getName() + '  : '+ eva.getWeight() + ' Dv ' +' Trước khi ăn táo ');
    if(adam.checkApple(firstApple)){
        for(let i = 0; i < firstApple.getWeight(); i++)
        {
            adam.eat(firstApple);
            alert('Dv táo sau khi Adam ăn là : ' + firstApple.getWeight() + ', ' + 'Dv Adam sau khi ăn táo là : ' + adam.getWeight());

            eva.eat(firstApple);
            alert('Dv táo sau khi Eva ăn là : ' + firstApple.getWeight() + ', ' + 'Dv Eva sau khi ăn táo là :' + eva.getWeight());
        }
        document.write(adam.getName() + '  : '+ adam.getWeight() + ' Dv ' +' sau khi ăn táo ');
        document.write(eva.getName() + '  : '+ eva.getWeight() + ' Dv ' +' sau khi ăn táo ');
    }
    else {
        alert('Hết táo !');
        document.write(adam.getName() + '  : '+ adam.getWeight() + 'vẫn chưa ăn <br/>');
        document.write(eva.getName() + '  : '+ eva.getWeight() + 'vẫn chưa ăn <br/>')
    }
}
let firstApple = new Apple();
let adam = new Human("Adam",true,700);
let eva = new Human('Eva',false,550);
