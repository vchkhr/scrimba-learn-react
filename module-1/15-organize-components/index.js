import Header from "./Header.js"
import Footer from "./Footer.js"
import MainContent from "./MainContent.js"

/**
Challenge: move the Footer and MainContent components
into their own files.
*/

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
