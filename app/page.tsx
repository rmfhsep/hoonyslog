import PostCard from "@/components/PostCard";
import getPostMetadata from "@/utils/getPostMetadata";

const metada = {
  title: `Junghoons log`,
};

export default function Home() {
  const postMetadata = getPostMetadata("posts");

  return (
    <main>
      <div className="postsContainer">
        {postMetadata.map((post, id) => {
          return <PostCard key={id} post={post} />;
        })}
      </div>
    </main>
  );
}
