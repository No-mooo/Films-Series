import { item as typeListItems } from "../store/ListItems/ListItems";

export interface propsItems {
    sort: 'name' | 'date' | 'rating';
    quantity: number;
    type: typeListItems['type'] | 'all';
}

const ListSortItems = {
    date(a: typeListItems, b: typeListItems) {
        return +(new Date(a.date)) - +(new Date(b.date));
    },

    name(a: typeListItems, b: typeListItems) {
        return a.name[0].toLowerCase().charCodeAt(0) - b.name[0].toLowerCase().charCodeAt(0);
    },

    rating(a: typeListItems, b: typeListItems) {
        return  a.rating - b.rating;
    },
}

export function sortFilterItems(props: propsItems, listItems: typeListItems[]) {
    const result = listItems.filter(item => item.type === props.type || props.type === 'all');
    result.sort(ListSortItems[props.sort]).slice(0, props.quantity + 1);

    return result;
}