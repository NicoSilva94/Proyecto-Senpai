import React from "react" ;


class Home extends React.Component {
    render() {
        return (
            <main>
                <div class="banner-container">
                    <div class="banner-text">
                        <h1>Ns Store</h1>
                        <p>You wish it, we get it</p>
                        <button>Store</button>
                    </div>
                </div>

                <div class="popular-container">
                    <div class="popular-title">
                        <h2>Popular Products</h2>
                        <p>Check out our most liked products</p>
                    </div>
                    <div class="featured-container">
                        <div class="featured-item" id="item1">
                            <h3>Playstation 5</h3>
                        </div>
                        <div class="featured-item" id="item2">
                            <h3>Air Jordan Retro</h3>
                        </div>
                        <div class="featured-item" id="item3">
                            <h3>DDJ-XP2 Controller</h3>
                        </div>
                        <div class="featured-item" id="item4">
                            <h3>Tv Samsung 40"</h3>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Home;