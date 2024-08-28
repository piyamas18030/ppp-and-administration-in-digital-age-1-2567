//models\ProductModel.js
import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    name: { type: String, required: true },
    projact: { type: String, required: true },
    implementation: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    budget: { type: Number, required: true },
    year: { type: Number, required: true },
    evaluation: { type: Number, required: true },
    week: { type: String, required: true },
    strength: { type: String, required: true },
    deverrument: { type: String, required: true },
    suggestion: { type: String, required: true },

  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", topicSchema);

export default ProductModel;
