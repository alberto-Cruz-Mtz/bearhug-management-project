import Home from "../icon/Home";
import LogOut from "../icon/LogOut";
import Money from "../icon/Money";
import Setting from "../icon/Setting";
import Tag from "../icon/Tag";

export default function Menu({ className }: { className?: string }) {
    return (
        <aside className={className}>
            <nav className="flex flex-col justify-between h-full py-3 items-center">
                <ul className="grid gap-6">
                    <li>
                        <a href="#"><Home /></a>
                    </li>
                    <li>
                        <a href="#"><Money /></a>
                    </li>
                    <li>
                        <a href="#"><Setting /></a>
                    </li>
                    <li>
                        <a href="#"><Tag /></a>
                    </li>
                    <li>
                        <a href="#"></a>
                    </li>
                </ul>
                <LogOut />
            </nav>
        </aside>
    )
}
