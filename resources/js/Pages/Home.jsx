import Navbar from "../Layouts/Navbar";

const Home = ({ name }) => {
    return (
        <>
            <h1>Halo Saya {name}</h1>
        </>
    );
};

Home.layout = (page) => <Navbar children={page} title="Welcome" />;

export default Home;
