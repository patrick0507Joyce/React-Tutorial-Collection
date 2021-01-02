import React, {useState, useEffect} from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

function ItemDetails({ match }) {
    useEffect(() => {
        fetchItem();
    }, []);

    const [items, setItems] = useState({});

    const fetchItem = async() => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${
            match.params.id
            }`
        );
        const item = await fetchItem.json();
        setItems(item.data);
        console.log("Item Details:", items);
    }
    return (
        <div>
            
        </div>
    )
}

export default ItemDetails;