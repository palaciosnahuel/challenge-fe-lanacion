import ButtonSecondary from "./components/Buttons/ButtonSecondary";
import { Providers } from "./providers/ArticleProvider";
import Sidebar from "./views/layout/Sidebar";
import WrapperPage from "./views/layout/WrapperPage";
import RecipesView from "./views/recipes/RecipesView";


export default function Home() {

  return (
    <WrapperPage>
      <section className='sidebar__main'>
        <Providers>
          <RecipesView />
        </Providers>
        <section className="row">
          <div className="col-12 hlp-text-center hlp-margintop-40">
            <ButtonSecondary text="MÁS NOTAS DE ACUMULADO GRILLA" />
          </div>
        </section>
      </section>
      <Sidebar />
    </WrapperPage>
  );
}
