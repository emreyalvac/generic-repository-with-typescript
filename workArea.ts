import {MongoClient} from 'mongodb';

import {Blog} from './entities/Blog';
import {BlogRepository} from "./repostories/blogRepository";

(async () => {
    const connection = await MongoClient.connect('mongodb://localhost');
    const db = connection.db('blogDatabase');
    const blog = new Blog('blogTitle0', 'blogContent0');
    const repository = new BlogRepository(db, 'blog');
    const result = await repository.create(blog);
    console.log(`blog inserted with ${result ? 'success' : 'fail'}`)
})();