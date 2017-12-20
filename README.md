Basic Inheritance
--------------------------------------------------------

The idea behind this is to use inheritance in javascript
in _seemingly_ declarative way.

    function Superclass(){
      //superclass code
    }

    function Subclass(){
      // subclass code
      // can use this.parent to access superclass methods
    }.extends(Superclass)

or

    function Subclass(){
      // subclass code
      // can use this.parent to access superclass methods
    }.extends(function Superclass(){
      //superclass code
    })

or

    var Superclass = {
      //superclass object
    }

    function Subclass(){
      // subclass code
      // can use this.parent to access superclass methods
    }.extends(Superclass)

or

    function Subclass(){
      // subclass code
      // can use this.parent to access superclass methods
    }.extends({
      //superclass object
    })

> NOTE: As you see the limitation is that superclass is always a function.

****** Usage ******

In browser:

    <script src="pathto/basic-inheritance.js"></script>

In Node:

    // returns nothing but modifies global Function
    require("pathto/basic-inheritance.js");
