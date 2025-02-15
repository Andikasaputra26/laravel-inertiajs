import Navbar from "../Layouts/Navbar";

const Home = ({ post }) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {post.map((item) => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {new Date().toLocaleTimeString()}
        </>
    );
};

Home.layout = (page) => <Navbar children={page} title="Welcome" />;

export default Home;
