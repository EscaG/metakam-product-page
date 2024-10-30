import {NavLink} from "react-router-dom";
import {Button, Container, Flex} from "@radix-ui/themes";
import "./header.scss";

export const Header = ({theme, setTheme}) => {
    const themeSwitcher = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return (
        <header className="header">
            <Container maxWidth="1280px" px="4">
                <Flex
                    justify="between"
                    align="center"
                >
                    <h1>Metakam</h1>
                    <Button onClick={themeSwitcher}>Theme</Button>
                </Flex>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/second">Second</NavLink>
                </nav>
            </Container>
        </header>
    )
};
