// Interface Segregation Principle (ISP)
interface Post {
  title: string;
  content: string;
}

interface Comment {
  title: string;
  content: string;
}

interface PostCreator {
  createPost(content: Post): void;
}

interface CommentCreator {
  createComment(content: Comment): void;
}

interface PostSharer {
  sharePost(post: Post): void;
}

class Admin implements PostCreator, CommentCreator, PostSharer {
  createPost(content: Post): void {
    console.log('Admin is creating a post');
  }

  createComment(content: Comment): void {
    console.log('Admin is commenting on a post');
  }

  sharePost(post: Post): void {
    console.log('Admin is sharing a post');
  }
}

class User implements CommentCreator, PostSharer {
  createComment(content: Comment): void {
    console.log('User is commenting on a post');
  }

  sharePost(post: Post): void {
    console.log('User is creating a post');
  }
}
