import { MongoClient } from 'mongodb';

import { BlogRepository } from './repositories/BlogRepository'
import { Blog } from './entities/Blog';


(async () => {

    const connection = await MongoClient.connect('mongodb://localhost');
    const db = connection.db('blogDatabase');

    const blog = new blog('blogTitle0', 'blogContent0');


    const repository = new BlogRepository(db, 'blog');


    const result = await repository.create(blog);
    console.log(`blog inserted with ${result ? 'success' : 'fail'}`)


})();