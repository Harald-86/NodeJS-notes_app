const event = {
  name: "Birthday party",
  guestList: ["Morten", "Amalie", "Britt", "Erik"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();

/* const square = function (x) {
  return x * x;
};
 */

/* const square = (x) => {
  return x * x;
}; */

/* const square = (x) => x * x;

console.log(square(3));
 */
