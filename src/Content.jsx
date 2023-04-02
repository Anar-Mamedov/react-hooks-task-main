import { useEffect, useContext } from 'react';

import ItemContext from './Context';

const Content = () => {
    useEffect(() => {
        console.log('Content');
    });

    const { value } = useContext(ItemContext);
    const [items, setItems] = value;

    const onChange = (status, id) => {
        if (status) setItems({ name: "UNCHECKED", id });
        else setItems({ name: "CHECKED", id });
    }

    return (
        <ol style={{ textAlign: 'left', backgroundColor: 'gray' }}>
            <h5>Content</h5>
            {
                items.map((val, ind) => <li key={ind}>
                    <label style={{ textDecoration: val.status && 'line-through' }}>
                        <input checked={val.status} onChange={(e) => onChange(val.status, val.id)} type='checkbox' />
                        {val.title}
                    </label>
                </li>)
            }

        </ol>
    )
}

export default Content;