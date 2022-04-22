"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagSchema = exports.Tag = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const category_schemas_1 = require("../../category/schemas/category.schemas");
let Tag = class Tag {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose.Schema.Types.ObjectId)
], Tag.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Tag.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }),
    __metadata("design:type", category_schemas_1.Category)
], Tag.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date() }),
    __metadata("design:type", Date)
], Tag.prototype, "createdAt", void 0);
Tag = __decorate([
    (0, mongoose_1.Schema)()
], Tag);
exports.Tag = Tag;
exports.TagSchema = mongoose_1.SchemaFactory.createForClass(Tag);
//# sourceMappingURL=tag.schemas.js.map