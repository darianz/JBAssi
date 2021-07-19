

var ToyFactory = (function () {
    // this.toy = ToyDuck;
    var toy;

    this.CreateToy = function (options) {
        var toy;
        switch (options.toyType) {
            case "car":
                toy = new ToyCar(options.toyType, options.color, options.price, options.name);
                break;
            case "duck":
            default:
                toy = new ToyDuck(options.toyType, options.color, options.price);
                break;
        }

        return toy;
    }

    return {
        getInstance: function (options) {
            if (!toy) {
                toy = CreateToy(options);
            }
            return toy;
        }
    };
})();

function ToyCar(toyType, color, price, name) {
    this.type = toyType;
    this.color = color;
    this.price = price;
    this.name = name;

    console.log("type: + ", this.type);
}

function ToyDuck(toyType, color, price, name) {
    this.type = toyType;
    this.color = color;
    this.price = price;
    console.log("type: + ", this.type);

}

// for check
//var factory = new ToyFactory();
//factory.CreateToy({ toyType: "car", color: "red", price: "99", name: "pita" });

function testSingleton() {
    var instance1 = ToyFactory.getInstance({ toyType: "car", color: "red", price: "99", name: "pita" });
    var instance2 = ToyFactory.getInstance({ toyType: "car", color: "red", price: "99", name: "pita" });
    console.log("Same instance? " + (instance1 === instance2));
}

testSingleton();
