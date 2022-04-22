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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const blog_schemas_1 = require("./schemas/blog.schemas");
let BlogService = class BlogService {
    constructor(blogModel) {
        this.blogModel = blogModel;
    }
    async loadMore(blogId) {
        return this.blogModel.find({ '_id': { $ne: blogId } });
    }
    async findAll(skipNumber) {
        return this.blogModel.find({}).populate("createdBy", "fullName", "User").sort({ createdAt: -1 }).skip(skipNumber).limit(6).exec().then(data => {
            return this.blogModel.countDocuments().exec().then(count => {
                return {
                    totalPage: count,
                    data
                };
            });
        });
    }
    async search(textSearch) {
        let regex = new RegExp(textSearch, "i");
        return await this.blogModel.find({ title: regex });
    }
    async createBlog(createBlogDto, photoURL, username) {
        let date = new Date();
        const blog = new this.blogModel(Object.assign(Object.assign({}, createBlogDto), { photoURL, createdAt: date, createdBy: username }));
        return blog.save();
    }
    async findById(id) {
        return await this.blogModel.findById(id);
    }
    async deleteById(id) {
        let blog = await this.blogModel.findById(id);
        if (blog) {
            blog.remove();
        }
    }
    async updateById(id, updateBlogDto, photoURL) {
        let blog = await this.blogModel.findById(id.toString());
        if (photoURL) {
            blog.title = updateBlogDto.title;
            blog.metaDescription = updateBlogDto.metaDescription;
            blog.content = updateBlogDto.content;
            blog.photoURL = photoURL;
            return blog.save();
        }
        else {
            blog.title = updateBlogDto.title;
            blog.metaDescription = updateBlogDto.metaDescription;
            blog.content = updateBlogDto.content;
            return blog.save();
        }
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(blog_schemas_1.Blog.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map