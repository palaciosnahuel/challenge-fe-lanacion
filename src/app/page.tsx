import { Providers } from "./providers/ArticleProvider";
import Sidebar from "./views/layout/Sidebar";
import RecipesView from "./views/recipes/RecipesView";


export default function Home() {

  return (
    <div className="lay-sidebar">
      <Providers>
        <RecipesView/>
      </Providers>
      <Sidebar/>
    </div>
  );
}
