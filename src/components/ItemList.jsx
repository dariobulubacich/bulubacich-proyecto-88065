import Item from "./Item.Jsx";
const ItemList = ({ items }) => {
  if (!items.length) return <p>No hay productos para mostrar.</p>;
  return (
    <div className="item-grid">
      {items.map((p) => (
        <Item key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ItemList;
