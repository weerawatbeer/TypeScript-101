//Interface
interface Player {
    realName: string;
    hp: number;
    weapon: string;
    attack: () => string;
}

let p1: Player = {
    realName: 'firstname',
    hp: 100,
    weapon: "sword",
    attack: (): string => {
        return "Attack"
    }
}

//Enum
enum Month {
    jan = 1, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec
}


function showMessage() {
    console.log("Show Message")
}

//Optional Parameters
function addProduct(id: number, name?: string) {
    console.log("id : " + id + "name : " + name)
}

addProduct(10)

//Rest Parameters
function addNumber(...nums: number[]) {
    var sum: number = 0;
    var i;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("Summation : " + sum);
}

addNumber(1, 2, 6);

