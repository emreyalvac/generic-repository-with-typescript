var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var baseRepository_1 = require("./base/baseRepository");
var BlogRepository = (function (_super) {
    __extends(BlogRepository, _super);
    function BlogRepository() {
        _super.apply(this, arguments);
    }
    return BlogRepository;
})(baseRepository_1.BaseRepository);
exports.BlogRepository = BlogRepository;
