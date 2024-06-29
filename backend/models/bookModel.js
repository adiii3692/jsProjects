import mongoose from "mongoose";

// Schema for the model
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

/** Make a Book model with a new collection called 'Books', passing the bookSchema
 *  as a parameter
*/
export const Book = mongoose.model('Books',bookSchema);
