import { useState } from "react";

export default function Cart() {
        const [items, setItems] = useState([]);

        function addItem() {
              setItems([...items, `Item ${items.length + 1}`]);
            }

            return (
              <div>
               <h1>Shopping Cart</h1>
               <button onClick={addItem}>Add Item</button>
               <ul>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
               </ul>
              </div>
        );
}
