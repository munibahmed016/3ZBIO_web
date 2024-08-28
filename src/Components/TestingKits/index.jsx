    import React from "react";
    import "./TestingKits.css"; 
    import ChickenGuniya from "../../assets/strep-a.jpg";
    import Dengue from "../../assets/hep-b-combo1.jpg";
    import Typoid from "../../assets/hep-b-surface-antigen1.jpg";
    import Malaria from "../../assets/mycoplasma-pneu.jpg"
    import Fertility from "../../assets/Testing-kits_03.png";
    import Infactious from "../../assets/Testing-kits_03-02.png";
    import Allergen from "../../assets/Testing-kits_03-03.png";
    import DrugAbuse from "../../assets/Testing-kits_03-04.png"

    const TestingKits = () => {
    return (
        <div className="testing-kits">
        <div className="container text-center">
            <h1>Convenient Testing Kits</h1>
            <div className="testing-types row">
            {/* Fertility Tests */}
            <div className="col-md-3">
                <div className="testing-card">
                <img
                    src={Fertility}
                    alt="Fertility Tests"
                />
                <h4>Fertility Tests</h4>
                <button className="btn btn-primary">Shop now</button>
                </div>
            </div>

            {/* Infectious Disease Tests */}
            <div className="col-md-3">
                <div className="testing-card">
                <img
                    src={Infactious}
                    alt="Infectious Disease Tests"
                />
                <h4>Infectious Disease Tests</h4>
                <button className="btn btn-primary">Shop now</button>
                </div>
            </div>

            {/* Allergen Tests */}
            <div className="col-md-3">
                <div className="testing-card">
                <img
                    src={Allergen}
                    alt="Allergen Tests"
                />
                <h4>Allergen Tests</h4>
                <button className="btn btn-primary">Shop now</button>
                </div>
            </div>

            {/* Drug of Abuse Tests */}
            <div className="col-md-3">
                <div className="testing-card">
                <img
                    src={DrugAbuse}
                    alt="Drug of Abuse Tests"
                />
                <h4>Drug of Abuse Tests</h4>
                <button className="btn btn-primary">Shop now</button>
                </div>
            </div>
            </div>
        </div>

        <div className="featured-products">
            <h3>Featured Products</h3>
            <p>Our Best-Selling Testing Kits</p>
            <div className="product-grid row">
            {/* Product Cards */}
            <div className="col-md-3 mb-4">
                <div className="product-card">
                <img
                    src={ChickenGuniya}
                    alt="Chikungunya IgG And IgM Rapid Test"
                />
                <p>Chikungunya IgG And IgM Rapid Test</p>
                </div>
            </div>
            <div className="col-md-3 mb-4">
                <div className="product-card">
                <img
                    src={Dengue}
                    alt="Dengue IgG and IgM and NS1 Combo Test"
                />
                <p>Dengue IgG and IgM and NS1 Combo Test</p>
                </div>
            </div>
            <div className="col-md-3 mb-4">
                <div className="product-card">
                <img
                    src={Malaria}
                    alt="Malaria Pf and Pan Rapid Test"
                />
                <p>Malaria Pf and Pan Rapid Test</p>
                </div>
            </div>
            <div className="col-md-3 mb-4">
                <div className="product-card">
                <img
                    src={Typoid}
                    alt="Typhoid Rapid Test"
                />
                <p>Typhoid Rapid Test</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default TestingKits;
