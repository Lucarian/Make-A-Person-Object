
// -------------------------------------------------------------------------
// ( My Personal Symbols Legend: D&I === Declaration & Initialization )
// -------------------------------------------------------------------------


/**
 *  --------------------- FUNCTIONALITY SUMMARY ----------------------------
 * 
 *  --- An elegant and nimble program that stores a full name or parts of it
 *     and gives the ability to retrieve or alter the name or its parts.  
 */


// D&I of Person constructor with one parameter.

let Person = function(firstAndLast) {
  
  /** 
   *  D&I of: 
   *  --1. array that stores firstName and lastName separately.
   *  --2. firstName
   *  --3. lastName
   *  --4. fullName 
   */

  let fullNameArr = firstAndLast.split(" ");
  let firstName = fullNameArr[0];
  let lastName = fullNameArr[1];
  let fullName = `${firstName} ${lastName}`;
 
  // ------------------------------------------------------
  
  /** 
   *  Methods that retrieve the object's following data:
   *  -- 1. firstName
   *  -- 2. lastName
   *  -- 3. fullName
   */
 
   this.getFirstName = function() {
    return firstName;
  }
  
  this.getLastName = function() {
    return lastName;
  }

  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  }

  // ----------------------------------------

  /**
   * Methods that alter the values of:
   * -- 1. firstName
   * -- 2. lastName
   * -- 3. fullName
   */

  this.setFirstName = function(first) {
    firstName = first;
  }

  this.setLastName = function(last) {
    lastName = last;
  }

  this.setFullName = function(firstAndLast) {
    fullNameArr = firstAndLast.split(" ");
    firstName = fullNameArr[0];
    lastName = fullNameArr[1];
    fullName = `${firstName} ${lastName}`;
  }

};

// --------------------------------------------------------

// Creation of an object of 'Person' type
var bob = new Person('Bob Ross');

// Testing of one of 'bob' object's methods.
console.log(bob.getFullName());

