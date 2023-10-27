"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const folderSchema = new mongoose_1.Schema({
    folderName: {
        type: String,
        required: true,
    },
    folderId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'FolderStructure',
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            delete ret._id;
            delete ret.__v;
        },
    },
});
const FolderStructure = (0, mongoose_1.model)('FolderStructure', folderSchema);
exports.default = FolderStructure;
