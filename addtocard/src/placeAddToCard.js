import { render } from "solid-js/web";
import AddToCard from "./AddToCard";

export default function placeAddToCard(el, id) {
    render(() => <AddToCard id={id} />, el);
}
