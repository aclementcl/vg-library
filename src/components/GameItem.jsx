import data from '../data/data.json';
import steamLogo from '/img/logos/steam.png';

const platformLogos = {
    "Steam": '/img/logos/steam.png',
    "xbox": "/img/logos/xbox.png"
};


export const GameItem = () => {
    return (
        <>
            {data.map((item) => (
                <div class="card">
                    <h2>{item.game}</h2>
                    <p class="price"> {new Intl.NumberFormat("es-CL", {
                        style: "currency",
                        currency: "CLP",
                        minimumFractionDigits: 0
                    }).format(item.price)}</p>
                    <img src={platformLogos[item.platform]} alt={item.platform} className="platform-logo" />
                    <p><strong>Editor:</strong> {item.publisher}</p>
                </div>
            ))}
        </>
    )
}
