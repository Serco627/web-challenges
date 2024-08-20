import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    //create a new product
    const newProduct = new Product(request.body);
    //Add it to the databases
    await Product.create(newProduct);
    response.status(201).json({ status: "product created succesfully" });
  }
}
