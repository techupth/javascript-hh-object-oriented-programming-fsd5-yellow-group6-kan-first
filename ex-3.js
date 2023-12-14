//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.postList = new PostList();
  }
}

class PostList {
  constructor() {
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }

  sharePost(post) {
    console.log(`You've shared post "${post.title}" to your friend.`);
  }
}

class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(id, content, createdBy) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }

  addLike() {
    this.like += 1;
  }
}

class Facebook {
  constructor() {
    this.groupList = [];
    this.pageList = [];
  }

  addGroup(group) {
    this.groupList.push(group);
  }

  addPage(page) {
    this.pageList.push(page);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }

  send(commentCreatedBy, postTitle) {
    console.log(`Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`);
  }
}

class Post {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(id, content, createdBy) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }

  addLike() {
    this.like++;
  }
}

class Facebook {
  constructor() {
    this.groupList = [];
    this.pageList = [];
  }

  addGroup(group) {
    this.groupList.push(group);
  }

  addPage(page) {
    this.pageList.push(page);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }

  send(commentCreatedBy, postTitle) {
    console.log(`Notification: ${commentCreatedBy} has just commented on this post—"${postTitle}"`);
  }
}