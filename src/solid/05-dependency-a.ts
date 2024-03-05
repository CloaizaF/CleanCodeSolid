import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, WebApiPostService } from './05-dependency-c';
import { HttpClient } from './05-dependency-d';


// Main
(async () => {

    //const provider = new JsonDatabaseService();
    //const provider = new LocalDataBaseService();

    const htppClient = new HttpClient();
    const provider = new WebApiPostService(htppClient);

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();