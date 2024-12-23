function User(name,age,power){
    this.name=name;
    this.age=age;
    this.power=power;
    return this;
}
const user1=new User('Tony',30,'IronMan');//New Instance
const user2=new User('Steve Rogers',100,'Captain America');//New Instance
console.log(user1);