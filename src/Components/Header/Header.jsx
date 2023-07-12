import { Navigation } from "./Navigation/Navigation";
import { Top } from "./Top/Top";


export const Header = ({list}) => (
    <header>
        <Top list={list}/>
        <Navigation list={list}/>
    </header>
)
