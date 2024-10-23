import Header from "./component/Header.js"
import logo from '../../../public/logo.png';
import Menu from "./component/Menu.js";
import BoxDashboard from "./component/BoxDashboard.js";

export default function Dashboard() {
    return (
        <section className="">
            <Header logo={logo} />
            <section className="px-2 grid grid-cols-12 gap-2">
                <Menu className="bg-gray-50 dark:bg-zinc-800" />
                <BoxDashboard className="col-span-11 bg-gray-50 dark:bg-zinc-800 rounded-lg" />
            </section>
        </section>
    )
}
