import blogs from "../data/blogs.json";
export function getAllBlogs(){
    return blogs;
}
export function getBlogBySlug(slug: string) {
  return blogs.find(blog => blog.slug === slug);
}


export function getBlogsByType(type:string){
    return blogs.filter(blog=>blog.type===type);
}