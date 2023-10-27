import { Schema, Types, model } from 'mongoose';
import { IFolderStructure } from './folderStructure.interface';

const folderSchema = new Schema<IFolderStructure>(
  {
    folderName: {
      type: String,
      required: true,
    },
    folderId: {
      type: Types.ObjectId,
      ref: 'FolderStructure',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const FolderStructure = model<IFolderStructure>(
  'FolderStructure',
  folderSchema
);

export default FolderStructure;
