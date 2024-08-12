import "./styles/Pokedex.css";


export default function Pokemons() {

    return (
        <div className="Pokemons">
            
            <h1>POKEMONS</h1>
            <div className="pokedex-item pokedex-flex-column">
                <div className="pokedex-item-div-top pokedex-flex-column">
                    <div className="pokedex-item-div-img">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="" />
                    </div>

                    <div className="pokedex-flex-column">
                        <h3 className="pokedex-item-title">Charmander</h3>
                        <p className="pokedex-item-level">Lv. XXX</p>
                    </div>
                </div>

                <div className="pokedex-item-div-bottom pokedex-flex-column">
                    <div className="pokedex-item-div-stats">
                        <p>Tipo</p>
                        <p>tipolongomsm</p>
                    </div>
                    <div className="pokedex-item-div-stats">
                        <p>Vida</p>
                        <p>100</p>
                    </div>
                    <div className="pokedex-item-div-stats">
                        <p>Ataq. Base</p>
                        <p>100</p>
                    </div>
                    <div className="pokedex-item-div-stats">
                        <p>Def. Base</p>
                        <p>100</p>
                    </div>
                </div>
            </div>
    
        </div>
    );
}