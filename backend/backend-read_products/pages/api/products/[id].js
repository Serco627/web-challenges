// pages/api/products/[id].js

import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const product = await Product.findById(id).populate("reviews");

      if (!product) {
        return response.status(404).json({ status: "Not Found" });
      }

      response.status(200).json(product);
    } catch (error) {
      response.status(500).json({ error: "Server Error" });
    }
  } else {
    response.setHeader("Allow", ["GET"]);
    response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}
