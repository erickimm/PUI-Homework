var shoppingCart = (function () {
    // Shopping cart basic properties
    var cart = [];

    function Item(name, price, count) {
        this.name = name
        this.price = price
        this.count = count
    }

    function getCart() {
        return ["Item 1", "Item 2", "Item 3"]
    }

    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (cart === null) {
            cart = []
        }
    }

    loadCart();

    // ----> Shopping cart functions <----
    var obj = {};

    function ArrayToList

    // Create an unordered list
    var list = document.createElement('ul');

    // Create a list item for each bun
    // and append it to the list
    buns.forEach(function (buns) {
        var li = document.createElement('li');
        li.textContent = bun;
        list.appendChild(li);
    });

    // Adds items to cart
    obj.addItemToCart = function (name, price, count) {
        console.log(name, price, count);
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }

        console.log("addItemToCart:", name, price, count);

        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    };

    // Sets the count for one item
    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };

    // Removes one item from cart
    obj.removeItemFromCart = function (name) {
        for (var i in cart) {
            if (cart[i].name === name) { // "3" === 3 false
                cart[i].count--; // cart[i].count --
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    };

    // Removes all of one item
    obj.removeItemFromCartAll = function (name) { 
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };

    //Clears all items from the cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Returns total number of items in the cart
    obj.countCart = function () {
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

    // Returns total cost for all items
    obj.totalCart = function () {
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    };

    // Returns array (name, price, count, total) containing all items in the cart
    obj.listCart = function () {
        var cartCopy = [];
        console.log("Listing cart");
        console.log(cart);
        for (var i in cart) {
            console.log(i);
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    return obj;

})();