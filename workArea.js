var Blog_1 = require('./entities/Blog');
var blogRepository_1 = require("./repostories/blogRepository");
(async());
{
    var connection = await, MongoClient_1, connect = ('mongodb://localhost');
    var db = connection.db('blogDatabase');
    var blog = new Blog_1.Blog('blogTitle0', 'blogContent0');
    var repository = new blogRepository_1.BlogRepository(db, 'blog');
    var result = await, repository, create = (blog);
    console.log("blog inserted with " + (result ? 'success' : 'fail'));
}
();
