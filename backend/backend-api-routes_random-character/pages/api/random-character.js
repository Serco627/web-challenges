import Chance from "chance";

export default function handler(request, response) {
  const chance = new Chance();
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitter: chance.twitter(),
    age: chance.age(),
    geohash: chance.geohash(),
    profession: chance.profession(),
    birthday: chance.birthday({ string: true, american: false }),
    favAnimal: chance.animal(),
  };

  response.status(200).json(character);
}
