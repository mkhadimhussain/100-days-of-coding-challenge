// class implement interface
// The class ensures that it provides the properties and methods required by that interface. It helps
// enforce a consistent structure for objects created from that class.
var ProductImplementInterface = /** @class */ (function () {
    function ProductImplementInterface(id, name) {
        this.id = id;
        this.name = name;
    }
    ProductImplementInterface.generateNextId = function () {
        return ProductImplementInterface.nextId++;
    };
    ProductImplementInterface.prototype.getProductInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    // 'private' property
    ProductImplementInterface.nextId = 1;
    return ProductImplementInterface;
}());
// Generate unique IDs for products using the static method
var product1Implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Widget");
var product2Implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(), "Gadget");
console.log(product1Implement.getProductInfo()); // ID: 1, Name: Widget
console.log(product2Implement.getProductInfo()); // ID: 2, Name: Gadget
// In this example:
// - We have an interface ProductImplementInterface that defines the structure of a product with properties id
//   and name, as well as a method getProductInfo.
// - The Product class implements the ProductImplementInterface interface using the implements keyword. It
//   provides the required properties (id and name) and the method getProductInfo.
// - Instances of the Product class, product1 and product2, are created and assigned to variables of type
//   ProductImplementInterface . This demonstrates that the class conforms to the interface.
