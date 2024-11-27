class Category {
    _id: string;
    categoryName: string;
    categoryImage: string;

    constructor(_id: string, categoryName: string, categoryImage: string) {
        this._id = _id;
        this.categoryName = categoryName;
        this.categoryImage = categoryImage;
    }
}
export default Category;