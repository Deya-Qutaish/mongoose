const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://localhost/textdb");

async function run() {
  try {
    const user = await User.create({
      name: "Kyle",
      age: 26,
      email: "TEST@TEST.com",
      hobbies: ["Weight Lifting", "Bowling"],
      address: {
        street: "Main St",
      },
    });
    user.name = "Sally";
    //   const user = new User({ name: "Kyle", age: 26 });
    await user.save();
    // console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}
// run();

async function find() {
  try {
    // const user = await User.findById("6479234e899989ebe1e5b0d5");
    // const user = await User.where("age")
    //   .gt(12)
    //   .where("name")
    //   .equals("Kyle")
    //   .populate("bestFriend")
    //   .limit(1);
    // const user = await User.find({ name: "Kyle" });
    // const user = await User.findByName('Kyle');
    // const user = await User.find().byName("Kyle");
    // const user = await User.find().byName("Kyle");
    const user = await User.findOne({
      name: "Sally",
      email: "test@test.com",
      age: 26,
    });
    // user.sayHello();

    await user.save();
    console.log(user);
    console.log(user.namedEmail);
  } catch (err) {
    console.log(err.message);
  }
}
find();
