import { Embed } from "./interfaces";
import "./styles/index.scss";
export default class EmbedWidget implements Embed {
    url: string;
    button: HTMLButtonElement;
    container: HTMLDivElement;
    initialText: string;
    state: string;
    constructor(url: string, text: string);
    toggle(): void;
    open(): void;
    close(): void;
    appendFrame(): void;
    updateClasses(): void;
    updateButton(): void;
}
