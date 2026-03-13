import { useMemo } from "react";
import {generateItems} from "../utils/generateItems";

interface RegularListProps {
    itemCount?: number;
}

export function RegularList({ itemCount = 10000 }: RegularListProps) {
    const items = useMemo(() => generateItems(itemCount), [itemCount]);

    return (
        <div className="regular-list">
            {items.map(item => (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <span>{item.category}</span>
                </div>
            ))}
        </div>
    );
}