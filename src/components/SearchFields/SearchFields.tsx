import { useState, useEffect } from "react";
import "./SearchFields.scss";
import { useSelector } from "react-redux";
import { item as typeListItems } from "../../store/ListItems/ListItems";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

export function SearchFields() {
    const [searchFields, setSearchFields] = useState<string>('');
    const listItems: typeListItems[] = useSelector((state: RootState) => state.listItems);
    const [resulSearch, setResulSearch] = useState<typeListItems[]>([]);

    useEffect(() => {
        if (searchFields) {
            let resul: typeListItems[] = listItems.filter(item => item.name.toLowerCase().includes(searchFields.toLowerCase()));
            resul = resul.slice(0, 8);

            setResulSearch(resul);

        } else {
            setResulSearch([]);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchFields]);

    return (        
        <div className={ `${searchFields && 'searchActiv'} search` }>
            <input
                value={searchFields}
                onChange={event => setSearchFields(event.target.value)}
                type="search"
                className="inputSearch"
                placeholder="Поиск..."
            />
            {searchFields &&
                <div
                    onClick={() => setSearchFields('')}
                    className="closeModal"
                >
                </div>
            }
            <div className="search-resulWrap">
                {
                    resulSearch.map((item: typeListItems) => 
                        <Link
                            key={item.id}
                            to={`/${item.type}/${item.id}`}
                        >
                            <div
                                className="search-resul"
                            >
                                <p className="search-resul-name">{ item.name }</p>
                                <p>
                                    <span>Тип:</span> { item.type === 'film' ? 'Фильм': 'Сериал' } <span>  Дата:</span> { item.date }
                                </p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}