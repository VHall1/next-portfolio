import { GitHubProps } from "../components/GitHub";

export async function fetchRepos(userUrl: string) {
  const res = await fetch(`https://api.github.com/users/${userUrl}/repos`);
  let fetchedPosts = await res.json();

  fetchedPosts = fetchedPosts.filter((e: any) => {
    return e.language === "JavaScript" || e.language === "TypeScript";
  });

  const posts: GitHubProps = fetchedPosts.map((e: any) => {
    return {
      name: e.name,
      description: e.description,
      language: e.language,
      stars: e.stargazers_count,
      link: e.html_url,
    };
  });

  return posts;
}
