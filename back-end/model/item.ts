import { ItemType } from './itemType';

export class Item {
    private id?: number;
    private name: string;
    private type: ItemType;

    constructor(item: { name: string; type: ItemType }) {
        this.name = item.name;
        this.type = item.type;
    }
}
