import { useEffect, useState } from "react";
import { api } from "../../api";
import { FaSpinner } from "react-icons/fa";
import DeleteButton from "../../components/DeleteButton";
import EditButton from "../../components/EditButton";
import BreadCrumbs from "../../components/BreadCrumbs";
import { Helmet } from "react-helmet";

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

const textPostList = {
  title: "PostList",
};

interface Post {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  created_at: Date;
}

const initialPosts: Post[] = [];
const loadSpinner = true;

// Componente Filho
const PostList = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [load, setLoad] = useState(loadSpinner);

  async function getPosts() {
    const response = await api.get("/posts");
    console.log(response);

    const showPosts: Post[] = response.data.posts;
    setPosts(showPosts);
  }

  useEffect(() => {
    getPosts();
    console.log("Os dados foram carregados!");
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      setLoad(false);
    }
    console.log("Os dados foram atualizados");
  }, [posts]);

  return (
    <div className="p-5 m-5 text-white bg-darkTheme max-w-screen-xl md:mx-auto">
      <Helmet>
        <title>{textPostList.title}</title>
      </Helmet>
      <div className="flex flex-col items-center">
        {load && (
          <div className="flex">
            <FaSpinner className="text-4xl animate-spin items-center justify-center" />
          </div>
        )}

        <h2 className="font-bold text-3xl	ml-2 text-defaultRed">PostList</h2>
      </div>
      {posts.map((post) => {
        return (
          <div key={post.id} className="border-b p-2">
            <span>
              <BreadCrumbs
                link={[
                  { href: "/", label: "Home" },
                  {
                    href: `/editar-post/${post.id}`,
                    label: `Editar Post ${post.id}`,
                  },
                ]}
              />
            </span>
            <span className="italic">#{post.id}</span>

            <span className="flex gap-6 items-center">
              <DeleteButton id={post.id} />
              <EditButton id={post.id} />
            </span>
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <h4 className="text-lg	font-bold">{post.subtitle}</h4>
            <p className="italic">{post.content}</p>
            <p>{new Date(post.created_at).toLocaleDateString()}</p>
          </div>
        );
      })}
    </div>
  );
};

// return (
//   <div className="p-5 m-5 text-white bg-darkTheme">
//     <h2>PostList</h2>
//     {posts.map((post) => {
//       return (
//         <div key={post.id} className="border-b p-2">
//           <h1 className="text-lg font-bold">{post.tittle}</h1>
//           <h4>{post.subtitle}</h4>
//           <p>{post.createdAt.toLocaleDateString()}</p>
//         </div>
//       );
//     })}
//   </div>
// );
// };

// Componente Pai
const PostListMain = () => {
  return (
    <div className="bg-backGroundColorDarkTheme">
      <PostList />
    </div>
  );
};

export default PostListMain;
