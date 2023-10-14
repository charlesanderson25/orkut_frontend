// import uuid from "react-uuid";

// const posts = [
//   {
//     id: uuid(),
//     tittle: "Primeiro Post",
//     subtitle: "Primeiro Post cadastrado",
//     createdAt: new Date(),
//   },

//   {
//     id: uuid(),
//     tittle: "Segundo Post",
//     subtitle: "Segundo Post cadastrado",
//     createdAt: new Date(),
//   },
// ];

// Componente Filho
// const PostList = () => {
//   return (
//     <div className="p-5 m-5 text-white bg-darkTheme">
//       <h2 className="font-bold">PostList</h2>
//       {posts.map((post) => {
//         return (
//           <div key={post.id} className="border-b p-2">
//             <h1 className="text-lg font-bold">{post.tittle}</h1>
//             <h4 className="italic">{post.subtitle}</h4>
//             <p>{post.createdAt.toLocaleDateString()}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// Componente Pai
// const PostBody = () => {
//   return (
//     <div className="bg-backGroundColorDarkTheme h-screen">
//       <PostList />
//     </div>
//   );
// };

// export default PostBody;
