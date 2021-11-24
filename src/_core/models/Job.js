export class SubType {
  name = null;
  status = null;
  __v = null;
  _id = null;
}

export class Type {
  subTypeJobs = [];
  deleteAt = null;
  _id = null;
  name = null;
  status = null;
  __v = null;
}

export class Job {
  deliveryTime = null;
  image = null;
  localSellers = null;
  name = null;
  onlineSellers = null;
  price = null;
  proServices = null;
  rating = null;
  status = null;
  subType = [new SubType()];
  type = new Type();
  usersBooking = null;
  __v = null;
  _id = null;
}
