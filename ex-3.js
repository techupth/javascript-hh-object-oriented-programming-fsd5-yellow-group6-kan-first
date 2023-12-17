//  Start coding here
class ids {
  constructor(id){
    this.id = id
  }
}

class User extends ids{
  constructor(id, name, email){
    super(id)
    this.name = name;
    this.email = email;
  }
}

class postList{
  constructor(posts){
    this.posts = posts;
  }
  addPost(){
    this.posts.push(Post)
  }
  sharePost(){
    return "You've shared post "+this.title+" to your friend."
  }
}

class Post extends ids{
  constructor(id, title, content, comment){
    super(id)
    this.title = title;
    this.content = content;
    this.comment = comment;
  }
  addComment(){
    this.comment.push(Comment)
  }
}

class Comment extends ids{
  constructor(id, content, createdBy, like){
    super(id)
    this.content = content;
    this.createdBy = createdBy;
    this.like = like;
  }
  addLike(){
    1 += this.like
  }
}

class Facebook{
  constructor(groupList, pageList){
    this.groupList = groupList;
    this.pageList = pageList;
  }
  addGroup(){
    1 += this.groupList
  }
  addPage(){
    1 += this.pageList
  }
}

class names {
  constructor(name){
    this.name = name;
  }
}

class FacebookPage extends names{
  constructor(name){
    super(name)
  }
}

class FacebookGroup extends names{
  constructor(name){
    super(name)
  }
}

class Notification extends ids{
  constructor(id){
    super(id)
  }
  send(){
    return `Notification: ${Comment.this.createdBy} has just commented on this post—"${Post.this.title}"`
  }
}