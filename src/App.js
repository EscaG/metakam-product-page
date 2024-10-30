import {useState} from "react";
import {Outlet} from "react-router-dom";
import {Flex, Theme} from "@radix-ui/themes";
import {Header} from "./widgets/Header/Header";
import {Footer} from "./widgets/Footer/Footer";

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <Theme appearance={theme}>
            <Flex
                direction="column"
                justify="between"
                height="100%"
                minHeight="100vh"

            >
            <Header
                setTheme={setTheme}
                theme={theme}
            />
            <div className="content-page">
                <Outlet/>
            </div>
            <Footer/>
            </Flex>
        </Theme>
    );
}

export default App;
